/********* CordovaOpenApplusPlugin.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface CordovaOpenApplusPlugin : CDVPlugin {
  // Member variables go here.
}
- (void)start:(CDVInvokedUrlCommand*)command;
- (void)enableLogging:(CDVInvokedUrlCommand*)command;
- (void)navigateToMiniProgram:(CDVInvokedUrlCommand*)command;
- (void)sync:(CDVInvokedUrlCommand*)command;
@end

#import <OpenApplus/OpenApplus.h>

@implementation CordovaOpenApplusPlugin

- (void)start:(CDVInvokedUrlCommand*)command{
    CDVPluginResult* pluginResult = nil;
    NSString* key = [command.arguments objectAtIndex:0];
    NSString* secret = [command.arguments objectAtIndex:0];
    
    [OpenApplus startWithAppKey:key andSecret:secret];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)sync:(CDVInvokedUrlCommand*)command{
    CDVPluginResult* pluginResult = nil;
	[OpenApplus sync];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)enableLogging:(CDVInvokedUrlCommand*)command{
    CDVPluginResult* pluginResult = nil;
    NSString* enable = [command.arguments objectAtIndex:0];
    if ([enable isEqualToString:@"1"]){
        [OpenApplus enableLogging:YES];
    } else {
        [OpenApplus enableLogging:NO];
    }
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)navigateToMiniProgram:(CDVInvokedUrlCommand*)command
{
    __block CDVPluginResult* pluginResult = nil;
    NSString* link = [command.arguments objectAtIndex:0];
    __weak  CordovaOpenApplusPlugin* weakSelf = self;
    if (link != nil && [link length] > 0) {
        UINavigationController *navigationController = [[UINavigationController alloc] init];
        [self.viewController presentViewController:navigationController animated:YES completion:^{
            [OpenApplus setNavigationController:navigationController];
            [OpenApplus navigateToMiniProgram:link completion:^{
                       pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
                       [weakSelf.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
                   }];
        }];
       
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}


@end
