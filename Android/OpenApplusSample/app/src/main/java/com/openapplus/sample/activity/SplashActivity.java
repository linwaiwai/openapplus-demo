package com.openapplus.sample.activity;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.app.Activity;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;

import com.openapplus.sample.R;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Locale;

/**
 * Created by Carry on 2017/8/23.
 */

public class SplashActivity extends Activity {
    private Handler mHandler = new Handler();
    public static String sHA1(Context context) {
        try {
            PackageInfo info = context.getPackageManager().getPackageInfo(
                    context.getPackageName(), PackageManager.GET_SIGNATURES);
            byte[] cert = info.signatures[0].toByteArray();
            MessageDigest md = MessageDigest.getInstance("SHA1");
            byte[] publicKey = md.digest(cert);
            StringBuffer hexString = new StringBuffer();
            for (int i = 0; i < publicKey.length; i++) {
                String appendString = Integer.toHexString(0xFF & publicKey[i])
                        .toUpperCase(Locale.US);
                if (appendString.length() == 1)
                    hexString.append("0");
                hexString.append(appendString);
                hexString.append(":");
            }
            String result = hexString.toString();
            return result.substring(0, result.length()-1);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    protected void onResume() {
        super.onResume();
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.d("高德填入的SHA1:", sHA1(SplashActivity.this.getApplicationContext()));
                Log.d("packageName:", SplashActivity.this.getApplicationContext().getPackageName());
            }
        }).start();
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        init();
    }

    private void init() {

//        final OAVersionManager versionManager = ManagerFactory.getManagerService(OAVersionManager
//                .class);
        new Thread(new Runnable() {
            @Override
            public void run() {
//                long prepareTime = versionManager.prepareJsBundle(SplashActivity.this);
                mHandler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
//                        toHome();
                        toX5Web();
                    }
                }, 0 );
            }
        }).start();


    }
    private void toX5Web() {
        Intent intent = new Intent(SplashActivity.this,
                MainActivity.class);
        startActivity(intent);
        finish();
    }

    private void toHome() {
//        String homePage = OAEnvironment.mPlatformConfig.getPage().getHomePage();
//        String NavigationColor = OAEnvironment.mPlatformConfig.getPage().getNavBarColor();
//        RouterModel router = new RouterModel(homePage, Constant.ACTIVITIES_ANIMATION
//                .ANIMATION_PUSH, null, null, false, null);
//        DispatchEventManager dispatchEventManager = ManagerFactory.getManagerService
//                (DispatchEventManager.class);
//        EventBean eventBean = new EventBean();
//        eventBean.setKey(WXConstant.WXEventCenter.EVENT_OPEN);
//        eventBean.setJsParams(ManagerFactory.getManagerService(ParseManager.class).toJsonString
//                (router));
//        eventBean.setContext(this);
//        dispatchEventManager.getBus().post(eventBean);
//        finish();
    }
}
