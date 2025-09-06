// app/modules/threads/native/components/thread_creation/CreateThreadView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function CreateThreadViewInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var35 = var1.threadSettingsDraft;
            var _closure2_slot0 = var35;
            var13 = var1.parentChannel;
            var _closure2_slot1 = var13;
            var19 = var1.screenIndex;
            var1 = _closure1_slot14;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var39 = _closure1_slot0;
            var37 = _closure1_slot2;
            var42 = 10;
            var1 = var37[var42];
            var2 = var39.bind(var4)(var1);
            var1 = var2.usePrivateThreadMode;
            var41 = var1.bind(var2)(var13);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var1 = var13.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = function() {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var3 = var6[var4];
                    var1 = undefined;
                    var10 = var5.bind(var1)(var3);
                    var9 = var10.clearDraft;
                    var3 = _closure2_slot1;
                    var8 = var3.id;
                    var7 = _closure1_slot8;
                    var7 = var7.ThreadSettings;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.clearDraft;
                    var3 = var3.id;
                    var2 = _closure1_slot8;
                    var2 = var2.FirstThreadMessage;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var11 = null;
            var3 = var1.bind(var2)(var11);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var14 = 0;
            var34 = var2[var14];
            var1 = 1;
            var1 = var2[var1];
            var2 = {};
            var2['parentChannel'] = var13;
            var2['threadSettingsDraft'] = var35;
            var2['privateThreadMode'] = var41;
            var2['setNameError'] = var1;
            var1 = function useSubmitForm(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var5 = var2.parentChannel;
                    var _closure3_slot0 = var5;
                    var7 = var2.threadSettingsDraft;
                    var _closure3_slot1 = var7;
                    var11 = var2.privateThreadMode;
                    var8 = var2.setNameError;
                    var _closure3_slot2 = var8;
                    var2 = undefined;
                    var _closure3_slot6 = var2;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 27;
                    var4 = var12[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.useNavigation;
                    var4 = var4.bind(var6)();
                    var _closure3_slot3 = var4;
                    var10 = _closure1_slot5;
                    var9 = var10.useRef;
                    var6 = false;
                    var6 = var9.bind(var10)(var6);
                    var _closure3_slot4 = var6;
                    var6 = var7.parentMessageId;
                    var10 = null;
                    var14 = var10 == var6;
                    var _closure3_slot5 = var14;
                    var13 = _closure1_slot5;
                    var9 = var13.useCallback;
                    var6 = new Array(5);
                    var6[0] = var14;
                    var6[1] = var4;
                    var4 = var7.location;
                    var6[2] = var4;
                    var4 = var7.parentMessageId;
                    var6[3] = var4;
                    var6[4] = var5;
                    var4 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var5 = arg1;
                            var2 = _closure3_slot1;
                            var3 = var2.location;
                            var2 = 'Message Shortcut';
                            if(!(var2 === var3)) { _fun0003_ip = 235; continue _fun0003 }
 28:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 28;
                            var2 = var4[var2];
                            var9 = undefined;
                            var6 = var3.bind(var9)(var2);
                            var4 = var6.track;
                            var2 = _closure1_slot11;
                            var3 = var2.MESSAGE_SHORTCUT_ACTION_SENT;
                            var2 = {};
                            var8 = _closure3_slot0;
                            var10 = var8.id;
                            var2['channel_id'] = var10;
                            var13 = null;
                            var10 = var13 == var8;
                            var8 = undefined;
                            if(var10) { _fun0003_ip = 103; continue _fun0003 }
 94:
                            var10 = _closure3_slot0;
                            var8 = var10.guild_id;
 103:
                            var2['guild_id'] = var8;
                            var8 = _closure3_slot1;
                            var8 = var8.parentMessageId;
                            var2['original_message_id'] = var8;
                            var8 = 'thread';
                            var2['action'] = var8;
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var10 = 29;
                            var8 = var8[var10];
                            var12 = var11.bind(var9)(var8);
                            var11 = var12.collectGuildAnalyticsMetadata;
                            var8 = _closure3_slot0;
                            var13 = var13 == var8;
                            var8 = undefined;
                            if(var13) { _fun0003_ip = 178; continue _fun0003 }
 169:
                            var13 = _closure3_slot0;
                            var8 = var13.guild_id;
 178:
                            var14 = var11.bind(var12)(var8);
                            var15 = var2;
                            var8 = copyDataProperties(var15, var14);
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var9 = var8.bind(var9)(var7);
                            var8 = var9.collectChannelAnalyticsMetadata;
                            var7 = _closure3_slot0;
                            var14 = var8.bind(var9)(var7);
                            var15 = var2;
                            var7 = copyDataProperties(var15, var14);
                            var2 = var4.bind(var6)(var3, var2);
 235:
                            var3 = _closure3_slot3;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0003_ip = 301; continue _fun0003 }
 245:
                            var2 = _closure3_slot5;
                            if(!var2) { _fun0003_ip = 363; continue _fun0003 }
 252:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 30;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var3);
                            var4 = var6.transitionToGuild;
                            var3 = var5.guild_id;
                            var2 = var5.id;
                            var2 = var4.bind(var6)(var3, var2);
                            _fun0003_ip = 363; continue _fun0003;
 301:
                            var3 = _closure3_slot3;
                            var2 = var3.navigate;
                            var1 = {'name': 'channel', 'key': 'new-thread', 'params': null, 'merge': true};
                            var4 = {};
                            var6 = var5.guild_id;
                            var4['guildId'] = var6;
                            var5 = var5.id;
                            var4['channelId'] = var5;
                            var5 = false;
                            var4['showCreateThread'] = var5;
                            var1['params'] = var4;
                            var1 = var2.bind(var3)(var1);
 363:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var9.bind(var13)(var4, var6);
                    var6 = _closure1_slot1;
                    var4 = 31;
                    var4 = var12[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = {};
                    var4['parentChannel'] = var5;
                    var12 = var7.parentMessageId;
                    var4['parentMessageId'] = var12;
                    var4['threadSettings'] = var7;
                    var4['privateThreadMode'] = var11;
                    var11 = var7.location;
                    var12 = var10 != var11;
                    var10 = '(unknown)';
                    if(!var12) { _fun0002_ip = 242; continue _fun0002 }
 239:
                    var10 = var11;
 242:
                    var4['location'] = var10;
                    var4['onThreadCreated'] = var9;
                    var9 = true;
                    var4['useDefaultThreadName'] = var9;
                    var6 = var6.bind(var2)(var4);
                    _closure3_slot6 = var6;
                    var4 = _closure1_slot5;
                    var3 = var4.useCallback;
                    var1 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1, arg2) {
                            var1 = function* anon_0_(arg1, arg2) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 402; continue _fun0004 }
 10:
                                    var8 = arg1;
                                    var6 = arg2;
                                    var2 = undefined;
                                    var5 = undefined;
                                    var7 = _closure3_slot4;
                                    var7 = var7.current;
                                    if(var7) { _fun0004_ip = 399; continue _fun0004 }
 38:
                                    var9 = _closure3_slot4;
                                    var7 = true;
                                    var9['current'] = var7;
                                    var9 = _closure3_slot2;
                                    var7 = null;
                                    var9 = var9.bind(var2)(var7);
 61: // try_start_0
                                    var9 = _closure3_slot1;
                                    var9 = var9.parentMessageId;
                                    if(!(var7 == var9)) { _fun0004_ip = 105; continue _fun0004 }
 75:
                                    var9 = _closure3_slot1;
                                    var9 = var9.name;
                                    if(!(var7 != var9)) { _fun0004_ip = 192; continue _fun0004 }
 88:
                                    var9 = _closure3_slot1;
                                    var10 = var9.name;
                                    var9 = '';
                                    if(!(var9 !== var10)) { _fun0004_ip = 192; continue _fun0004 }
 105:
                                    var9 = _closure3_slot6;
                                    var6 = var9.bind(var2)(var8, var6);
                                    SaveGenerator(address=119);
 117:
                                    return var6;
 119:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(var8) { _fun0004_ip = 189; continue _fun0004 }
 125:
                                    var10 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var9 = 11;
                                    var9 = var11[var9];
                                    var12 = var10.bind(var2)(var9);
                                    var11 = var12.saveDraft;
                                    var9 = _closure3_slot0;
                                    var10 = var9.id;
                                    var8 = _closure1_slot8;
                                    var9 = var8.FirstThreadMessage;
                                    var8 = '';
                                    var8 = var11.bind(var12)(var10, var8, var9);
 184: // try_end0
                                    _fun0004_ip = 387; continue _fun0004;
 189:
                                    return var6;
 192: // try_start_1
                                    var10 = _closure3_slot2;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 32;
                                    var6 = var9[var6];
                                    var11 = var8.bind(var2)(var6);
                                    var6 = var11.makeEmptyTitleError;
                                    var6 = var6.bind(var11)();
                                    var6 = var10.bind(var2)(var6);
                                    var6 = 33;
                                    var6 = var9[var6];
                                    var8 = var8.bind(var2)(var6);
                                    var6 = var8.dismissKeyboard;
                                    var6 = var6.bind(var8)();
                                    var8 = _closure3_slot4;
                                    var6 = false;
                                    var8['current'] = var6;
 268: // try_end1
                                    return var2;
 271: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register=5);
                                    var4 = var6;
                                    var6 = var6.body;
                                    var5 = var6;
                                    var6 = var7 == var6;
                                    var7 = undefined;
                                    if(var6) { _fun0004_ip = 298; continue _fun0004 }
 293:
                                    var7 = var5.code;
 298:
                                    var5 = _closure1_slot10;
                                    var5 = var5.AUTOMOD_TITLE_BLOCKED;
                                    if(!(var7 === var5)) { _fun0004_ip = 387; continue _fun0004 }
 315:
                                    var7 = _closure3_slot2;
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var8 = 32;
                                    var8 = var6[var8];
                                    var10 = var5.bind(var2)(var8);
                                    var9 = var10.makeAutomodViolationError;
                                    var8 = var4.body;
                                    var4 = _closure3_slot0;
                                    var4 = var9.bind(var10)(var8, var4);
                                    var4 = var7.bind(var2)(var4);
                                    var4 = 33;
                                    var4 = var6[var4];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.dismissKeyboard;
                                    var4 = var4.bind(var5)();
 387:
                                    var4 = _closure3_slot4;
                                    var3 = false;
                                    var4['current'] = var3;
 399:
                                    return var2;
 402:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var1.bind(var2)();
                    var1 = new Array(5);
                    var1[0] = var8;
                    var8 = var7.parentMessageId;
                    var1[1] = var8;
                    var7 = var7.name;
                    var1[2] = var7;
                    var1[3] = var6;
                    var1[4] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var17 = var1.bind(var4)(var2);
            var6 = _closure1_slot1;
            var1 = 12;
            var2 = var37[var1];
            var3 = var6.bind(var4)(var2);
            var2 = 13;
            var2 = var37[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CREATE_THREAD;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var2 = 14;
            var2 = var37[var2];
            var2 = var6.bind(var4)(var2);
            var15 = var2.bind(var4)();
            var2 = 15;
            var2 = var37[var2];
            var3 = var6.bind(var4)(var2);
            var23 = false;
            var8 = true;
            var2 = {'isKeyboardAwareOnAndroid': false, 'includeKeyboardHeight': true};
            var2 = var3.bind(var4)(var2);
            var21 = var2.insets;
            var2 = var13.isForumLikeChannel;
            var31 = var2.bind(var13)();
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var20 = var2.bind(var3)(var11);
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var18 = var2.bind(var3)(var11);
            var2 = var35.parentMessageId;
            var36 = var11 != var2;
            var3 = _closure1_slot13;
            var1 = var37[var1];
            var1 = var39.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot12;
            var5 = 16;
            var5 = var37[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['absolute'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var16.container;
            var9 = new Array(2);
            var9[0] = var12;
            var12 = {};
            var21 = var21.bottom;
            var15 = var15.bottom;
            var15 = var21 - var15;
            var12['marginBottom'] = var15;
            var9[1] = var12;
            var6['style'] = var9;
            var15 = _closure1_slot12;
            var12 = _closure1_slot6;
            var9 = {};
            var21 = var16.expander;
            var9['style'] = var21;
            var12 = var15.bind(var4)(var12, var9);
            var9 = new Array(5);
            var9[0] = var12;
            var21 = _closure1_slot12;
            var15 = _closure1_slot7;
            var12 = {};
            var22 = var16.containerContent;
            var12['style'] = var22;
            var25 = _closure1_slot13;
            var24 = _closure1_slot6;
            var22 = {};
            var26 = var16.options;
            var22['style'] = var26;
            var28 = _closure1_slot13;
            var27 = _closure1_slot6;
            var26 = {};
            var29 = var16.optionsInner;
            var26['style'] = var29;
            var32 = _closure1_slot12;
            var30 = _closure1_slot6;
            var29 = {};
            var33 = var16.threadIconContainer;
            var29['style'] = var33;
            var43 = _closure1_slot12;
            var33 = 17;
            var33 = var37[var33];
            var33 = var39.bind(var4)(var33);
            var40 = var33.ThreadIcon;
            var33 = {'color': 'white', 'size': 'lg'};
            var33 = var43.bind(var4)(var40, var33);
            var29['children'] = var33;
            var30 = var32.bind(var4)(var30, var29);
            var29 = new Array(4);
            var29[0] = var30;
            var33 = _closure1_slot12;
            var30 = 18;
            var30 = var37[var30];
            var30 = var39.bind(var4)(var30);
            var32 = var30.Text;
            var30 = {'style': null, 'variant': 'text-xs/bold', 'color': 'interactive-normal'};
            var40 = var16.title;
            var30['style'] = var40;
            var43 = 19;
            var37 = var37[var43];
            var37 = var39.bind(var4)(var37);
            var39 = var37.intl;
            var37 = var39.string;
            var44 = _closure1_slot0;
            var40 = _closure1_slot2;
            var40 = var40[var43];
            var40 = var44.bind(var4)(var40);
            var40 = var40.t;
            if(var36) { _fun0001_ip = 723; continue _fun0001 }
 715:
            var36 = var40.j3XWjI;
            _fun0001_ip = 731; continue _fun0001;
 723:
            var36 = var40.JPvIiI;
 731:
            var37 = var37.bind(var39)(var36);
            var36 = var37.toUpperCase;
            var36 = var36.bind(var37)();
            var30['children'] = var36;
            var30 = var33.bind(var4)(var32, var30);
            var29[1] = var30;
            var33 = _closure1_slot12;
            var32 = _closure1_slot1;
            var36 = _closure1_slot2;
            var30 = 20;
            var30 = var36[var30];
            var32 = var32.bind(var4)(var30);
            var30 = {};
            var30['ref'] = var18;
            var30['chatInputRef'] = var20;
            var30['threadSettingsDraft'] = var35;
            var30['threadNameError'] = var34;
            var30 = var33.bind(var4)(var32, var30);
            var29[2] = var30;
            var30 = null;
            if(var31) { _fun0001_ip = 1169; continue _fun0001 }
 823:
            var31 = var35.parentMessageId;
            var31 = var11 != var31;
            var30 = null;
            if(var31) { _fun0001_ip = 1169; continue _fun0001 }
 841:
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var42];
            var31 = var32.bind(var4)(var31);
            var31 = var31.PrivateThreadMode;
            var31 = var31.Disabled;
            var30 = null;
            if(!(var41 !== var31)) { _fun0001_ip = 1169; continue _fun0001 }
 879:
            var33 = _closure1_slot12;
            var32 = _closure1_slot6;
            var31 = {};
            var34 = var16.optionPrivateThread;
            var31['style'] = var34;
            var37 = _closure1_slot12;
            var40 = _closure1_slot0;
            var39 = _closure1_slot2;
            var34 = 21;
            var34 = var39[var34];
            var34 = var40.bind(var4)(var34);
            var36 = var34.TableSwitchRow;
            var34 = {'start': true, 'end': true};
            var44 = var39[var43];
            var44 = var40.bind(var4)(var44);
            var46 = var44.intl;
            var45 = var46.string;
            var44 = var39[var43];
            var44 = var40.bind(var4)(var44);
            var44 = var44.t;
            var44 = var44.Wy5RIS;
            var44 = var45.bind(var46)(var44);
            var34['accessibilityHint'] = var44;
            var44 = var39[var42];
            var44 = var40.bind(var4)(var44);
            var44 = var44.PrivateThreadMode;
            var44 = var44.Enabled;
            var44 = var41 !== var44;
            var34['disabled'] = var44;
            var44 = var39[var43];
            var44 = var40.bind(var4)(var44);
            var46 = var44.intl;
            var45 = var46.string;
            var44 = var39[var43];
            var44 = var40.bind(var4)(var44);
            var44 = var44.t;
            var44 = var44.F1zyvb;
            var44 = var45.bind(var46)(var44);
            var34['label'] = var44;
            var44 = var39[var43];
            var44 = var40.bind(var4)(var44);
            var45 = var44.intl;
            var44 = var45.string;
            var43 = var39[var43];
            var43 = var40.bind(var4)(var43);
            var43 = var43.t;
            var43 = var43.Wy5RIS;
            var43 = var44.bind(var45)(var43);
            var34['subLabel'] = var43;
            var39 = var39[var42];
            var40 = var40.bind(var4)(var39);
            var39 = var40.getIsPrivate;
            var39 = var39.bind(var40)(var35, var41);
            var34['value'] = var39;
            var38 = function onValueChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = var1.parentChannelId;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0005_ip = 66; continue _fun0005 }
 19:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.changeThreadSettings;
                    var1 = {};
                    var5 = arg1;
                    var1['isPrivate'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var34['onValueChange'] = var38;
            var34 = var37.bind(var4)(var36, var34);
            var31['children'] = var34;
            var30 = var33.bind(var4)(var32, var31);
 1169:
            var29[3] = var30;
            var26['children'] = var29;
            var27 = var28.bind(var4)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var27 = var35.parentMessageId;
            var28 = var11 != var27;
            var27 = null;
            if(!var28) { _fun0001_ip = 1334; continue _fun0001 }
 1209:
            var30 = _closure1_slot13;
            var29 = _closure1_slot6;
            var28 = {};
            var31 = var16.parentMessageContainer;
            var28['style'] = var31;
            var33 = _closure1_slot12;
            var32 = _closure1_slot6;
            var31 = {};
            var34 = var16.border;
            var31['style'] = var34;
            var32 = var33.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var34 = _closure1_slot12;
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 22;
            var32 = var36[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.ThreadCreationStarterMessage;
            var32 = {};
            var36 = var13.id;
            var32['channelId'] = var36;
            var35 = var35.parentMessageId;
            var32['messageId'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var31[1] = var32;
            var28['children'] = var31;
            var27 = var30.bind(var4)(var29, var28);
 1334:
            var26[1] = var27;
            var22['children'] = var26;
            var22 = var25.bind(var4)(var24, var22);
            var12['children'] = var22;
            var12 = var21.bind(var4)(var15, var12);
            var9[1] = var12;
            var12 = var13.rateLimitPerUser;
            var12 = var12 > var14;
            var11 = null;
            if(!var12) { _fun0001_ip = 1468; continue _fun0001 }
 1377:
            var15 = _closure1_slot12;
            var14 = _closure1_slot6;
            var12 = {};
            var16 = var16.typingWrapper;
            var12['style'] = var16;
            var22 = _closure1_slot12;
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 23;
            var16 = var24[var16];
            var21 = var21.bind(var4)(var16);
            var16 = {};
            var24 = var13.id;
            var16['channelId'] = var24;
            var16['hasTypingText'] = var23;
            var23 = _closure1_slot9;
            var23 = var23.CreateThread;
            var16['slowmodeType'] = var23;
            var16 = var22.bind(var4)(var21, var16);
            var12['children'] = var16;
            var11 = var15.bind(var4)(var14, var12);
 1468:
            var9[2] = var11;
            var16 = _closure1_slot12;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 24;
            var12 = var14[var12];
            var15 = var11.bind(var4)(var12);
            var12 = {};
            var12['ref'] = var20;
            var12['channel'] = var13;
            var12['screenIndex'] = var19;
            var12['secondaryTextFieldRef'] = var18;
            var12['threadCreationCallback'] = var17;
            var12 = var16.bind(var4)(var15, var12);
            var9[3] = var12;
            var12 = _closure1_slot12;
            var10 = 25;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = var13.id;
            var10['channelId'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[4] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var15 = 0;
    var4 = var6[var15];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.StyleSheet;
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlowmodeType;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AbortCodes;
    var _closure1_slot10 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 9;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var16;
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {};
    var10['flexGrow'] = var15;
    var4['containerContent'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['expander'] = var10;
    var10 = {'height': 1, 'backgroundColor': null, 'alignSelf': 'stretch', 'marginBottom': 16};
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var11 = 16;
    var4['border'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['marginTop'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['marginBottom'] = var15;
    var4['title'] = var10;
    var10 = {};
    var15 = 12;
    var10['marginHorizontal'] = var15;
    var4['options'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['paddingBottom'] = var15;
    var4['optionsInner'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['paddingTop'] = var15;
    var4['optionPrivateThread'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_64;
    var10['width'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_64;
    var10['height'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10['marginTop'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xxl;
    var10['borderRadius'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_ACCENT;
    var10['backgroundColor'] = var15;
    var15 = 'center';
    var10['justifyContent'] = var15;
    var10['alignItems'] = var15;
    var4['threadIconContainer'] = var10;
    var10 = {};
    var14 = var14.hairlineWidth;
    var10['borderBottomWidth'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['paddingHorizontal'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['paddingVertical'] = var14;
    var14 = 'flex-end';
    var10['justifyContent'] = var14;
    var14 = 'row';
    var10['flexDirection'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CHAT_BORDER;
    var10['borderColor'] = var12;
    var4['typingWrapper'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['parentMessageContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var7 = var1.screenIndex;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 26;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var6 = var1.bind(var5)(var3);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0006_ip = 96; continue _fun0006 }
 53:
            var4 = _closure1_slot12;
            var3 = _closure1_slot15;
            var2 = {};
            var8 = var6.parentChannel;
            var2['parentChannel'] = var8;
            var2['screenIndex'] = var7;
            var6 = var6.threadSettingsDraft;
            var2['threadSettingsDraft'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 96:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/thread_creation/CreateThreadView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CreateThreadView'] = var2;
    return var1;
})();