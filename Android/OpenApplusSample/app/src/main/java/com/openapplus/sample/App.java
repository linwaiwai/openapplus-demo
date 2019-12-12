package com.openapplus.sample;


import android.app.Application;

import android.provider.Settings;


import com.openapplus.OAAuthDtoWrapper;
import com.openapplus.OARequestWrapper;
import com.openapplus.OAUserInfo;
import com.openapplus.OpenApplus;
import com.openapplus.OpenApplusCallback;
import com.openapplus.core.OAEnvironment;


import org.json.JSONException;
import org.json.JSONObject;


/**
 * Created by linwaiwai on 2017/10/01.
 */
public class App extends Application {
    public Application mInstance;

    @Override
    public void onCreate() {
        super.onCreate();


//        new ANRWatchDog(1000).setIgnoreDebugger(true).start();
        mInstance = this;
        OpenApplus.registerApp(this, SampleContants.APPID, SampleContants.APP_SECRET);
        OpenApplus.setMapApiKey("992eddf37aad445d2d768a8a9eb9ff6f");
        OpenApplus.sync();

        OpenApplus.setCallback(new OpenApplusCallback() {
            @Override
            public void invoke(OACallbackType type, JSONObject data, OpenApplusNotify notify) {
            if (type == OACallbackType.OACallbackTypeAuthUser){
                OARequestWrapper requestWrapper = OpenApplus.makeRequestWrapper(SampleContants.SERVER_APPID, SampleContants.SERVER_APP_SECRET);
                OAUserInfo userInfo = new OAUserInfo();
                userInfo.setNickName("linwaiwai");
                userInfo.setGender("male");
                userInfo.setCity("Guangzhou");
                userInfo.setProvince("GuangDong");
                userInfo.setAvatarUrl("http://www.openapplus.com/icon/default.jpg");
                OAAuthDtoWrapper dto = new OAAuthDtoWrapper();
                dto.setUid("33334");
                dto.setUserInfo(userInfo);
                try {
                    dto.setCode(data.getString("code"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                String deviceID = Settings.Secure.getString(OAEnvironment.sApplication.getApplicationContext().getContentResolver(),
                        Settings.Secure.ANDROID_ID);
                dto.setDeviceid(deviceID);
                requestWrapper.sendObject(dto, notify);
            }
            }
        });

    }

}
