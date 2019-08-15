//
//  AppDelegate.m
//  OpenApplusSample
//
//  Created by linwaiwai on 2019/8/14.
//  Copyright © 2019 openapplus. All rights reserved.
//

#import "AppDelegate.h"
#import <OpenApplus/OpenApplus.h>
#import <OpenUDID/OpenUDID.h>
@interface AppDelegate ()

@end

@implementation AppDelegate

-(void)configureUser{
    NSString *uid = @"1";
    [OAConfiguration setUserIdentify:uid];
    [OpenApplus setupCallback:^(OACallbackType type, id data, OpenApplusNotify notify, NSError *error) {
        switch (type) {
                case OACallbackTypeAuthUser: {
                    OAUserInfo *user = [[OAUserInfo alloc] init];
                    user.nickName = @"linwaiwai";
                    user.gender = @"male";
                    user.city = @"Guangzhou";
                    user.province = @"GuangDong";
                    user.avatarUrl = @"http://www.openapplus.com/icon/default.jpg";
                    // 填写APP服务端的ServerAppKey和ServerAppSecret
                    OAUserAuthRequestWrapper *requestWrapper =
                    [OpenApplus requestWithAppKey:@"oas14039571b9f0429ea9575ce50fb276ae"
                                        andSecret:@"$2a$10$M3xCj9/NFcUyRLrFmk0qk.KAKyVEKLln7DER2g9ixtTOB42/lHdB2"];
                    OAAuthDtoWrapper *dto = [[OAAuthDtoWrapper alloc] init];
                    dto.code  = [data performSelector:@selector(code)];
                    dto.deviceid  = [OpenUDID value];
                    dto.uid = uid;
                    dto.userInfo = user;
                    [requestWrapper sendObject:dto notify:notify];
                }
                break;
            default:
                break;
        }
    }];
}


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [OpenApplus startWithAppKey:@"oa606f78973e434c78933b869d8ba73c59"
                      andSecret:@"$2a$10$4bbR9ZNAhm74x3sckSLf/uPyR.E2JQvACCHP4xKtLt/OOpbJsiq9q"];
    [self configureUser];
    [OpenApplus setNavigationController:(UINavigationController*)self.window.rootViewController];
    // Override point for customization after application launch.
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}



- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    [OpenApplus sync];
    [[UIApplication sharedApplication] cancelAllLocalNotifications];
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
