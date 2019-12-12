package com.openapplus.sample.activity;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.view.View;
import android.widget.Button;

import com.openapplus.sample.R;
import com.openapplus.activity.OATinyActivity;

import java.util.HashMap;

/**
 * Created by linwaiwai on 10/10/2018.
 */

public class MainActivity extends Activity {

    HashMap<String, HashMap<String, String> > data = new HashMap<String, HashMap<String, String>>(){{
        put("openappluswx",new HashMap<String, String>(){{
            put("link","openapplus://jsApp/Lr12JhPrE9bg7N4uoABBXY");
        }});
        put("openapplus",new HashMap<String, String>(){{
            put("link","openapplus://jsApp/e240d37f58194292a213cdd8736b00c3");
        }});
        put("demo",new HashMap<String, String>(){{
            put("link","openapplus://jsApp/c2f7494c0d1f40a8871acc7934cb80c5");
        }});
        put("shop",new HashMap<String, String>(){{
            put("link","openapplus://jsApp/dc7df9ded0b9416cb83a4464bb35e32b");
        }});
    }};


    public final static int REQUEST_READ_PHONE_STATE = 1;


    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        switch (requestCode) {
            case REQUEST_READ_PHONE_STATE:
                if ((grantResults.length > 0) && (grantResults[0] == PackageManager.PERMISSION_GRANTED)) {
                    //TODO
                }
                break;

            default:
                break;
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        int permissionCheck = ContextCompat.checkSelfPermission(this, Manifest.permission.READ_PHONE_STATE);
        if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{ Manifest.permission.READ_PHONE_STATE}, REQUEST_READ_PHONE_STATE);
        }
        Button btn1 = (Button) findViewById(R.id.openappluswx);
        btn1.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                MainActivity.this.didTap("openappluswx");
            }
        });

        Button btn2 = (Button) findViewById(R.id.demo);
        btn2.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                MainActivity.this.didTap("demo");
            }
        });

        Button btn3 = (Button) findViewById(R.id.openapplus);
        btn3.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                MainActivity.this.didTap("openapplus");
            }
        });

        Button btn4 = (Button) findViewById(R.id.shop);
        btn4.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                MainActivity.this.didTap("shop");
            }
        });
    }

    private void didTap(String name){
        HashMap<String, String> element =  this.data.get(name) ;
        Intent intent = new Intent(MainActivity.this, OATinyActivity.class);
        intent.putExtra("tiny",element.get("link"));
        startActivity(intent);
    }

}
