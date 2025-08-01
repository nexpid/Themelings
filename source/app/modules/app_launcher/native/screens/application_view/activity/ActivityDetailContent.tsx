// app/modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function Tag(arg1) {
        var1 = arg1;
        var9 = var1.tagName;
        var7 = var1.icon;
        var1 = _closure1_slot15;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var10.tag;
        var1['style'] = var5;
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot11;
        var7 = _closure1_slot0;
        var11 = _closure1_slot3;
        var6 = 10;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var11 = 'text-sm/normal';
        var6['variant'] = var11;
        var10 = var10.tagText;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function PrimaryEntryPointButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.applicationId;
            var _closure2_slot0 = var13;
            var3 = var2.context;
            var20 = var2.sectionName;
            var1 = var2.primaryEntryPointCommand;
            var _closure2_slot1 = var1;
            var7 = var2.disabled;
            var17 = var2.onActivityItemSelected;
            var16 = var2.entrypoint;
            var15 = var2.activityAction;
            var _closure2_slot2 = var15;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var8 = _closure1_slot6;
            var6 = var8.useId;
            var12 = var6.bind(var8)();
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 11;
            var6 = var9[var6];
            var8 = var10.bind(var5)(var6);
            var6 = var8.useRequiredAppLauncherContext;
            var6 = var6.bind(var8)();
            var18 = var6.chatInputRef;
            var _closure2_slot3 = var18;
            var6 = var6.keyboardCloseReasonRef;
            var _closure2_slot4 = var6;
            var14 = _closure1_slot6;
            var11 = var14.useCallback;
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.AppLauncherKeyboardCloseReason;
                    var3 = var3.ACTIVITY;
                    var4['current'] = var3;
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 75; continue _fun0002 }
 65:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 75:
                    return var1;
                }
            };
            var14 = var11.bind(var14)(var6, var8);
            var _closure2_slot5 = var14;
            var8 = _closure1_slot1;
            var6 = 12;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['applicationId'] = var13;
            var6['context'] = var3;
            var6['launchingComponentId'] = var12;
            var11 = 13;
            var9 = var9[var11];
            var9 = var10.bind(var5)(var9);
            var9 = var9.ActivityAction;
            var10 = var9.LEAVE;
            var9 = undefined;
            if(!(var15 !== var10)) { _fun0001_ip = 237; continue _fun0001 }
 234:
            var9 = var14;
 237:
            var6['onSubmissionComplete'] = var9;
            var6 = var8.bind(var5)(var6);
            var10 = var6.submitting;
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var6 = 14;
            var6 = var19[var6];
            var9 = var18.bind(var5)(var6);
            var8 = var9.useHandleActivityItemSelected;
            var6 = {};
            var6['applicationId'] = var13;
            var6['context'] = var3;
            var6['sectionName'] = var20;
            var6['onActivityItemSelected'] = var17;
            var17 = 15;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.ApplicationCommandTriggerLocations;
            var17 = var17.APP_LAUNCHER_APPLICATION_VIEW;
            var6['location'] = var17;
            var6['entrypoint'] = var16;
            var6['launchingComponentId'] = var12;
            var6 = var8.bind(var9)(var6);
            var16 = var6.handleActivityItemSelected;
            _closure2_slot6 = var16;
            var9 = _closure1_slot6;
            var8 = var9.useMemo;
            var1 = var1.displayName;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.formatPrimaryEntryPointCommandName;
                var1 = _closure2_slot1;
                var1 = var1.displayName;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var1, var6);
            var1 = null;
            if(!(var1 == var8)) { _fun0001_ip = 448; continue _fun0001 }
 393:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var6 = 17;
            var9 = var18[var6];
            var9 = var17.bind(var5)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.zKX8Nj;
            var8 = var9.bind(var12)(var6);
 448:
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var11];
            var6 = var9.bind(var5)(var6);
            var6 = var6.ActivityAction;
            var6 = var6.JOIN;
            if(!(var15 !== var6)) { _fun0001_ip = 584; continue _fun0001 }
 481:
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var11];
            var6 = var9.bind(var5)(var6);
            var6 = var6.ActivityAction;
            var6 = var6.LEAVE;
            var9 = 'primary';
            if(!(var15 === var6)) { _fun0001_ip = 645; continue _fun0001 }
 521:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var6 = 17;
            var11 = var18[var6];
            var11 = var17.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.Hi1/aW;
            var8 = var11.bind(var12)(var6);
            var9 = 'destructive';
            _fun0001_ip = 645; continue _fun0001;
 584:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var6 = 17;
            var11 = var18[var6];
            var11 = var17.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.d9PsMj;
            var8 = var11.bind(var12)(var6);
            var9 = 'active';
 645:
            var12 = _closure1_slot6;
            var11 = var12.useCallback;
            var6 = new Array(4);
            var6[0] = var16;
            var6[1] = var15;
            var6[2] = var14;
            var6[3] = var13;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 18;
                    var2 = var6[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot10;
                    var4 = var2.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var3['application_id'] = var9;
                    var5 = _closure1_slot0;
                    var9 = 19;
                    var9 = var6[var9];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.EntryPointCommandButtonActions;
                    var9 = var9.USE_APP_COMMAND;
                    var3['button_action'] = var9;
                    var3 = var7.bind(var8)(var4, var3);
                    var3 = _closure2_slot6;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot2;
                    var3 = 13;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.ActivityAction;
                    var3 = var3.LEAVE;
                    if(!(var4 === var3)) { _fun0003_ip = 141; continue _fun0003 }
 133:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
 141:
                    return var1;
                }
            };
            var6 = var11.bind(var12)(var4, var6);
            var4 = var3.type;
            var3 = 'channel';
            var1 = null;
            if(!(var3 === var4)) { _fun0001_ip = 769; continue _fun0001 }
 702:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 20;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var11 = 'lg';
            var2['size'] = var11;
            var2['loading'] = var10;
            var2['variant'] = var9;
            var2['text'] = var8;
            var2['disabled'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 769:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function TryItOutButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var11 = var1.botUserId;
            var _closure2_slot0 = var11;
            var10 = var1.applicationId;
            var _closure2_slot1 = var10;
            var9 = var1.analyticsLocations;
            var _closure2_slot2 = var9;
            var2 = var1.context;
            var6 = _closure1_slot6;
            var5 = var6.useState;
            var4 = false;
            var7 = var5.bind(var6)(var4);
            var6 = _closure1_slot5;
            var4 = undefined;
            var5 = 2;
            var6 = var6.bind(var4)(var7, var5);
            var5 = 0;
            var7 = var6[var5];
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot3 = var5;
            var8 = _closure1_slot6;
            var6 = var8.useRef;
            var5 = null;
            var5 = var6.bind(var8)(var5);
            var _closure2_slot4 = var5;
            var8 = _closure1_slot6;
            var6 = var8.useCallback;
            var5 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 294; continue _fun0005 }
 10:
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var2 = 18;
                        var3 = var11[var2];
                        var2 = undefined;
                        var8 = var4.bind(var2)(var3);
                        var7 = var8.track;
                        var3 = _closure1_slot10;
                        var5 = var3.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
                        var4 = {};
                        var9 = _closure2_slot1;
                        var4['application_id'] = var9;
                        var10 = _closure1_slot0;
                        var9 = 19;
                        var9 = var11[var9];
                        var9 = var10.bind(var2)(var9);
                        var9 = var9.EntryPointCommandButtonActions;
                        var9 = var9.OPEN_APP_DM;
                        var4['button_action'] = var9;
                        var4 = var7.bind(var8)(var5, var4);
                        var7 = _closure2_slot4;
                        var4 = global;
                        var9 = var4.setTimeout;
                        var8 = function() {
                            var3 = _closure2_slot3;
                            var1 = undefined;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var5 = 250;
                        var5 = var9.bind(var2)(var8, var5);
                        var7['current'] = var5;
 139: // try_start_0
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var5 = 21;
                        var5 = var8[var5];
                        var8 = var7.bind(var2)(var5);
                        var7 = var8.openPrivateChannel;
                        var5 = {};
                        var9 = _closure2_slot0;
                        var5['recipientIds'] = var9;
                        var5 = var7.bind(var8)(var5);
                        SaveGenerator(address=185);
 183:
                        return var5;
 185:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(var7) { _fun0005_ip = 255; continue _fun0005 }
 191:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var6 = 22;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = {};
                        var8 = _closure2_slot1;
                        var6['targetApplicationId'] = var8;
                        var6['channelId'] = var5;
                        var8 = _closure2_slot2;
                        var6['analyticsLocations'] = var8;
                        var6 = var7.bind(var2)(var6);
                        SaveGenerator(address=244);
 242:
                        return var6;
 244:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0005_ip = 252; continue _fun0005 }
 250: // try_end0
                        _fun0005_ip = 260; continue _fun0005;
 252:
                        return var6;
 255:
                        return var5;
 258: // catch_target0
                        CatchBlockStart(arg_register=4);
 260:
                        var5 = var4.clearTimeout;
                        var4 = _closure2_slot4;
                        var4 = var4.current;
                        var4 = var5.bind(var2)(var4);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
 294:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var5.bind(var4)(var3);
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var5 = var6.bind(var8)(var5, var3);
            var3 = var2.type;
            var6 = 'primary';
            var2 = 'channel';
            if(!(var2 === var3)) { _fun0004_ip = 178; continue _fun0004 }
 174:
            var6 = 'secondary';
 178:
            var3 = _closure1_slot11;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 20;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var8 = 'lg';
            var1['size'] = var8;
            var1['loading'] = var7;
            var1['variant'] = var6;
            var6 = 17;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.AUM8hY;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var14 = 4;
    var4 = var6[var14];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var13.bind(var1)(var4);
    var4 = var4.spacing;
    var11 = var4.PX_12;
    var _closure1_slot14 = var11;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_RAISED;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var12 = 'hidden';
    var9['overflow'] = var12;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var9['paddingBottom'] = var11;
    var4['cardContainer'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var4['activityHeroDetailsLandscape'] = var9;
    var9 = {};
    var12 = '65%';
    var9['width'] = var12;
    var4['heroMediaContainerLandscape'] = var9;
    var9 = {};
    var12 = '35%';
    var9['width'] = var12;
    var4['detailsContainerLandscape'] = var9;
    var9 = {'marginTop': 16, 'paddingHorizontal': null, 'rowGap': 4};
    var12 = 16;
    var9['paddingHorizontal'] = var11;
    var4['details'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'marginTop': null, 'columnGap': 4, 'rowGap': 6};
    var11 = var6[var10];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['marginTop'] = var11;
    var4['tagList'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 12, 'paddingVertical': 4};
    var11 = 'center';
    var15 = var6[var10];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_MOD_SUBTLE;
    var9['backgroundColor'] = var15;
    var15 = var6[var10];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9['borderRadius'] = var15;
    var4['tag'] = var9;
    var9 = {};
    var15 = -1;
    var9['top'] = var15;
    var4['tagText'] = var9;
    var9 = {};
    var9['marginRight'] = var14;
    var4['tagIcon'] = var9;
    var9 = {};
    var9['paddingTop'] = var12;
    var4['buttonContainer'] = var9;
    var9 = {};
    var12 = -4;
    var9['marginTop'] = var12;
    var4['activityUrlOverrideInputContainer'] = var9;
    var9 = {'right': 0, 'bottom': 0};
    var4['expandDescriptionCTAStyle'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['marginTop'] = var12;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var9['color'] = var12;
    var9['textAlign'] = var11;
    var4['primaryEntryPointButtonDisabledCTA'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['tryItOutButtonContainerStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityDetailContent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var31 = var1.application;
            var _closure2_slot0 = var31;
            var16 = var1.context;
            var19 = var1.sectionName;
            var14 = var1.onActivityItemSelected;
            var13 = var1.entrypoint;
            var3 = var1.hasCommands;
            var1 = _closure1_slot15;
            var4 = undefined;
            var40 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 11;
            var1 = var8[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useRequiredAppLauncherContext;
            var1 = var1.bind(var2)();
            var33 = var1.width;
            var1 = 23;
            var1 = var8[var1];
            var5 = var7.bind(var4)(var1);
            var2 = var5.useGetPrimaryAppCommand;
            var1 = var31.id;
            var18 = var2.bind(var5)(var16, var1);
            var6 = _closure1_slot1;
            var1 = 24;
            var2 = var8[var1];
            var5 = var6.bind(var4)(var2);
            var2 = 25;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.APP_DETAIL;
            var2 = var5.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var2 = 26;
            var2 = var8[var2];
            var6 = var7.bind(var4)(var2);
            var2 = var6.useIsScreenLandscape;
            var2 = var2.bind(var6)();
            var6 = 19;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.AppLauncherEntrypoint;
            var6 = var6.VOICE;
            var25 = var13 !== var6;
            if(!var25) { _fun0006_ip = 221; continue _fun0006 }
 218:
            var25 = var2;
 221:
            var8 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 27;
            var2 = var6[var2];
            var10 = var8.bind(var4)(var2);
            var9 = var10.useStateFromStoresObject;
            var2 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot8;
                var4 = var3.inDevModeForApplication;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var4.bind(var3)(var2);
                var1['isDeveloperOfThisApp'] = var2;
                var2 = var3.getActivityUrlOverride;
                var2 = var2.bind(var3)();
                var1['activityUrlOverride'] = var2;
                var2 = var3.getUseActivityUrlOverride;
                var2 = var2.bind(var3)();
                var1['useActivityUrlOverride'] = var2;
                return var1;
            };
            var7 = var9.bind(var10)(var7, var2);
            var2 = var7.isDeveloperOfThisApp;
            var27 = var7.activityUrlOverride;
            var12 = var7.useActivityUrlOverride;
            var7 = 16;
            var6 = var6[var7];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isRealApplication;
            var6 = var6.bind(var8)(var31);
            if(var6) { _fun0006_ip = 352; continue _fun0006 }
 316:
            var6 = global;
            var9 = var6.Error;
            var6 = var9.prototype;
            var8 = Object.create(var6, {constructor: {value: var9}});
            var43 = 'ActivityDetailContent was passed the Built-in App, which is not supported.';
            var44 = var8;
            var6 = new var44[var9](var43, var42);
            var6 = var6 instanceof Object ? var6 : var8;
            throw var6;
 352:
            var6 = _closure1_slot9;
            var6 = var31 instanceof var6;
            if(var6) { _fun0006_ip = 371; continue _fun0006 }
 363:
            var6 = var31.max_participants;
            _fun0006_ip = 377; continue _fun0006;
 371:
            var6 = var31.maxParticipants;
 377:
            var29 = null;
            var8 = var29 != var6;
            var37 = 0;
            if(!var8) { _fun0006_ip = 391; continue _fun0006 }
 388:
            var37 = var6;
 391:
            var22 = null;
            if(!var2) { _fun0006_ip = 777; continue _fun0006 }
 399:
            var9 = _closure1_slot12;
            var8 = _closure1_slot7;
            var6 = {};
            var10 = {};
            var11 = 0;
            if(var12) { _fun0006_ip = 423; continue _fun0006 }
 416:
            var15 = _closure1_slot14;
            var11 = -var15;
 423:
            var10['marginBottom'] = var11;
            var6['style'] = var10;
            var15 = _closure1_slot11;
            var32 = _closure1_slot0;
            var20 = _closure1_slot3;
            var10 = 28;
            var10 = var20[var10];
            var10 = var32.bind(var4)(var10);
            var11 = var10.TableRowDivider;
            var10 = {};
            var11 = var15.bind(var4)(var11, var10);
            var10 = new Array(3);
            var10[0] = var11;
            var17 = _closure1_slot11;
            var26 = 29;
            var11 = var20[var26];
            var11 = var32.bind(var4)(var11);
            var15 = var11.FormSwitchRow;
            var11 = {};
            var21 = 17;
            var23 = var20[var21];
            var23 = var32.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var20[var21];
            var21 = var32.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.3TSGuL;
            var21 = var23.bind(var24)(var21);
            var11['label'] = var21;
            var11['value'] = var12;
            var21 = _closure1_slot2;
            var24 = 30;
            var20 = var20[var24];
            var20 = var21.bind(var4)(var20);
            var20 = var20.toggleUseActivityUrlOverride;
            var11['onValueChange'] = var20;
            var20 = true;
            var11['end'] = var20;
            var11 = var17.bind(var4)(var15, var11);
            var10[1] = var11;
            var11 = null;
            if(!var12) { _fun0006_ip = 763; continue _fun0006 }
 609:
            var17 = _closure1_slot11;
            var15 = _closure1_slot7;
            var12 = {};
            var20 = var40.activityUrlOverrideInputContainer;
            var12['style'] = var20;
            var23 = _closure1_slot11;
            var21 = _closure1_slot0;
            var20 = _closure1_slot3;
            var20 = var20[var26];
            var20 = var21.bind(var4)(var20);
            var21 = var20.FormInput;
            var20 = {'showTopContainer': false, 'placeholder': 'e.g. http://192.168.1.1:3000'};
            var32 = var29 != var27;
            var26 = undefined;
            if(!var32) { _fun0006_ip = 682; continue _fun0006 }
 679:
            var26 = var27;
 682:
            var20['value'] = var26;
            var26 = _closure1_slot2;
            var27 = _closure1_slot3;
            var24 = var27[var24];
            var24 = var26.bind(var4)(var24);
            var24 = var24.setActivityUrlOverride;
            var20['onChange'] = var24;
            var26 = _closure1_slot0;
            var24 = 31;
            var24 = var27[var24];
            var24 = var26.bind(var4)(var24);
            var24 = var24.ClearButtonVisibility;
            var24 = var24.WITH_CONTENT;
            var20['clearButtonVisibility'] = var24;
            var20 = var23.bind(var4)(var21, var20);
            var12['children'] = var20;
            var11 = var17.bind(var4)(var15, var12);
 763:
            var10[2] = var11;
            var6['children'] = var10;
            var22 = var9.bind(var4)(var8, var6);
 777:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 32;
            var6 = var9[var6];
            var9 = var8.bind(var4)(var6);
            var8 = var9.useGetOrFetchApplication;
            var6 = var31.id;
            var6 = var8.bind(var9)(var6);
            var8 = var29 == var6;
            var17 = undefined;
            if(var8) { _fun0006_ip = 828; continue _fun0006 }
 822:
            var17 = var6.bot;
 828:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 13;
            var6 = var9[var6];
            var11 = var8.bind(var4)(var6);
            var10 = var11.useActivityAction;
            var6 = {};
            var6['context'] = var16;
            var12 = var31.id;
            var6['applicationId'] = var12;
            var10 = var10.bind(var11)(var6);
            var6 = 33;
            var6 = var9[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.useDelayedSwapToActivityActionLeave;
            var11 = var6.bind(var8)(var10);
            var8 = _closure1_slot1;
            var6 = 34;
            var6 = var9[var6];
            var10 = var8.bind(var4)(var6);
            var6 = {};
            var6['context'] = var16;
            var6['application'] = var31;
            var6['activityAction'] = var11;
            var6 = var10.bind(var4)(var6);
            var15 = var6.disabled;
            var12 = var6.reason;
            var6 = 35;
            var6 = var9[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['context'] = var16;
            var6['application'] = var31;
            var10 = var29 == var17;
            var9 = undefined;
            if(var10) { _fun0006_ip = 980; continue _fun0006 }
 975:
            var9 = var17.id;
 980:
            var6['botUserId'] = var9;
            var9 = var8.bind(var4)(var6);
            if(!(var29 == var18)) { _fun0006_ip = 1199; continue _fun0006 }
 997:
            if(!var2) { _fun0006_ip = 1003; continue _fun0006 }
 1000:
            var2 = !var3;
 1003:
            if(!var2) { _fun0006_ip = 1034; continue _fun0006 }
 1006:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isEmbeddedApp;
            var2 = var3.bind(var6)(var31);
 1034:
            var24 = undefined;
            var23 = undefined;
            if(!var2) { _fun0006_ip = 1503; continue _fun0006 }
 1044:
            var6 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var40.buttonContainer;
            var2['style'] = var7;
            var10 = _closure1_slot11;
            var8 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 36;
            var7 = var32[var20];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var21 = _closure1_slot0;
            var20 = var32[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.HelpMessageTypes;
            var20 = var20.WARNING;
            var7['messageType'] = var20;
            var20 = 17;
            var26 = var32[var20];
            var26 = var21.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var20 = var32[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.s/3hjI;
            var20 = {};
            var20 = var26.bind(var27)(var21, var20);
            var7['children'] = var20;
            var7 = var10.bind(var4)(var8, var7);
            var2['children'] = var7;
            var23 = var6.bind(var4)(var3, var2);
            var24 = undefined;
            _fun0006_ip = 1503; continue _fun0006;
 1199:
            var6 = _closure1_slot12;
            var3 = _closure1_slot13;
            var2 = {};
            var10 = _closure1_slot11;
            var8 = _closure1_slot17;
            var7 = {};
            var20 = var31.id;
            var7['applicationId'] = var20;
            var7['context'] = var16;
            var7['sectionName'] = var19;
            var7['primaryEntryPointCommand'] = var18;
            var7['disabled'] = var15;
            var7['onActivityItemSelected'] = var14;
            var7['entrypoint'] = var13;
            var7['activityAction'] = var11;
            var8 = var10.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = null;
            if(!var9) { _fun0006_ip = 1377; continue _fun0006 }
 1280:
            var10 = var29 == var17;
            var9 = undefined;
            if(var10) { _fun0006_ip = 1294; continue _fun0006 }
 1289:
            var9 = var17.id;
 1294:
            var9 = var29 != var9;
            var8 = null;
            if(!var9) { _fun0006_ip = 1377; continue _fun0006 }
 1303:
            var11 = _closure1_slot11;
            var10 = _closure1_slot7;
            var9 = {};
            var13 = var40.tryItOutButtonContainerStyle;
            var9['style'] = var13;
            var15 = _closure1_slot11;
            var14 = _closure1_slot18;
            var13 = {};
            var17 = var17.id;
            var13['botUserId'] = var17;
            var17 = var31.id;
            var13['applicationId'] = var17;
            var13['analyticsLocations'] = var5;
            var13['context'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var9['children'] = var13;
            var8 = var11.bind(var4)(var10, var9);
 1377:
            var7[1] = var8;
            var2['children'] = var7;
            var8 = var6.bind(var4)(var3, var2);
            var6 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var40.buttonContainer;
            var2['style'] = var7;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var29 != var12;
            if(!var8) { _fun0006_ip = 1487; continue _fun0006 }
 1426:
            var11 = _closure1_slot11;
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 10;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            var13 = 'text-sm/normal';
            var9['variant'] = var13;
            var13 = var40.primaryEntryPointButtonDisabledCTA;
            var9['style'] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 1487:
            var7[1] = var8;
            var2['children'] = var7;
            var24 = var6.bind(var4)(var3, var2);
            var23 = undefined;
 1503:
            var3 = _closure1_slot11;
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot11;
            var5 = 37;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.RedesignCompat;
            var5 = {};
            var8 = true;
            var5['enabled'] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot7;
            var8 = {};
            var12 = var40.container;
            var11 = new Array(1);
            var11[0] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot7;
            var11 = {};
            var14 = var40.cardContainer;
            var11['style'] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = var25;
            if(!var25) { _fun0006_ip = 1635; continue _fun0006 }
 1629:
            var17 = var40.activityHeroDetailsLandscape;
 1635:
            var14['style'] = var17;
            var19 = _closure1_slot11;
            var18 = _closure1_slot7;
            var17 = {};
            var20 = var25;
            if(!var25) { _fun0006_ip = 1661; continue _fun0006 }
 1655:
            var20 = var40.heroMediaContainerLandscape;
 1661:
            var17['style'] = var20;
            var26 = _closure1_slot11;
            var21 = _closure1_slot1;
            var27 = _closure1_slot3;
            var20 = 38;
            var20 = var27[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var27 = var31.id;
            var20['applicationId'] = var27;
            var27 = var33;
            if(!var25) { _fun0006_ip = 1720; continue _fun0006 }
 1706:
            var32 = 65;
            var33 = var32 * var33;
            var32 = 100;
            var27 = var33 / var32;
 1720:
            var20['width'] = var27;
            var20 = var26.bind(var4)(var21, var20);
            var17['children'] = var20;
            var18 = var19.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot12;
            var19 = _closure1_slot7;
            var18 = {};
            var26 = var40.details;
            var21 = new Array(2);
            var21[0] = var26;
            if(!var25) { _fun0006_ip = 1781; continue _fun0006 }
 1775:
            var25 = var40.detailsContainerLandscape;
 1781:
            var21[1] = var25;
            var18['style'] = var21;
            var26 = _closure1_slot11;
            var25 = _closure1_slot1;
            var38 = _closure1_slot3;
            var21 = 39;
            var21 = var38[var21];
            var25 = var25.bind(var4)(var21);
            var21 = {};
            var21['application'] = var31;
            var27 = var40.expandDescriptionCTAStyle;
            var21['expandDescriptionCTAStyle'] = var27;
            var25 = var26.bind(var4)(var25, var21);
            var21 = new Array(5);
            var21[0] = var25;
            var27 = _closure1_slot12;
            var26 = _closure1_slot7;
            var25 = {};
            var32 = var40.tagList;
            var25['style'] = var32;
            var34 = _closure1_slot11;
            var33 = _closure1_slot16;
            var32 = {};
            var35 = _closure1_slot0;
            var28 = 40;
            var28 = var38[var28];
            var28 = var35.bind(var4)(var28);
            var39 = var28.GroupIcon;
            var28 = {};
            var40 = var40.tagIcon;
            var28['style'] = var40;
            var40 = 'xs';
            var28['size'] = var40;
            var28 = var34.bind(var4)(var39, var28);
            var32['icon'] = var28;
            var28 = 41;
            var28 = var38[var28];
            var35 = var35.bind(var4)(var28);
            var28 = var35.getItemSubtitleForMaxPlayersShort;
            var38 = var29 != var37;
            var36 = 0;
            if(!var38) { _fun0006_ip = 1956; continue _fun0006 }
 1953:
            var36 = var37;
 1956:
            var28 = var28.bind(var35)(var36);
            var32['tagName'] = var28;
            var28 = 'participants';
            var32 = var34.bind(var4)(var33, var32, var28);
            var28 = new Array(2);
            var28[0] = var32;
            var32 = var31.tags;
            var31 = var29 == var32;
            var29 = undefined;
            if(var31) { _fun0006_ip = 2017; continue _fun0006 }
 2000:
            var31 = var32.map;
            var30 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot11;
                var3 = _closure1_slot16;
                var2 = {};
                var2['tagName'] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var29 = var31.bind(var32)(var30);
 2017:
            var28[1] = var29;
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var21[1] = var25;
            var21[2] = var24;
            var21[3] = var23;
            var21[4] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();