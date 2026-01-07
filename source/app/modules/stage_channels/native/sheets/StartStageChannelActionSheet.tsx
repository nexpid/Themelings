// app/modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_STAGE_TOPIC_LENGTH;
    var _closure1_slot9 = var7;
    var4 = var4.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var12 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventPrivacyLevel;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = 16;
    var9['padding'] = var13;
    var4['container'] = var9;
    var10 = 'center';
    var9 = {'alignItems': 'center', 'paddingBottom': 24};
    var4['header'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 8};
    var4['headerTitle'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['headerSubtitle'] = var9;
    var9 = {'padding': 12, 'width': '100%'};
    var10 = 10;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var14;
    var4['textInput'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['startButton'] = var9;
    var9 = {'paddingTop': 8, 'textAlign': 'center'};
    var4['buttonSubtitle'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginBottom'] = var13;
    var4['ageVerificationNotice'] = var9;
    var9 = {'paddingTop': 8, 'fontSize': 12};
    var12 = var12.PRIMARY_MEDIUM;
    var9['fontFamily'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9['color'] = var10;
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StartStageChannelEventActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot15;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 11;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var5.bind(var6)(var3, var2);
            var _closure2_slot1 = var23;
            var5 = _closure1_slot6;
            var3 = var5.useState;
            var13 = null;
            var2 = var13 == var23;
            var6 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var23.topic;
case 2:
            var7 = var13 != var6;
            var21 = '';
            var2 = var21;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6;
case 4:
            var2 = var3.bind(var5)(var2);
            var7 = _closure1_slot5;
            var6 = 2;
            var2 = var7.bind(var4)(var2, var6);
            var5 = 0;
            var20 = var2[var5];
            _closure2_slot2 = var20;
            var3 = 1;
            var25 = var2[var3];
            var8 = _closure1_slot6;
            var9 = var8.useState;
            var2 = false;
            var2 = var9.bind(var8)(var2);
            var2 = var7.bind(var4)(var2, var6);
            var19 = var2[var5];
            var2 = var2[var3];
            _closure2_slot3 = var2;
            var2 = var8.useState;
            var2 = var2.bind(var8)(var13);
            var2 = var7.bind(var4)(var2, var6);
            var26 = var2[var5];
            var2 = var2[var3];
            _closure2_slot4 = var2;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 12;
            var2 = var6[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useShouldAgeVerifyToSpeakForCurrentUser;
            var1 = var1.id;
            var12 = var2.bind(var3)(var1);
            var9 = _closure1_slot1;
            var1 = 13;
            var1 = var6[var1];
            var2 = var9.bind(var4)(var1);
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.START_STAGE_OPENED;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 6:
                    var2['stage_instance_id'] = var7;
                    var7 = false;
                    var2['can_start_public_stage'] = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.guild_id;
                    var2['guild_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var4 = _closure2_slot2;
                            var3 = var4.trim;
                            var4 = var3.bind(var4)();
                            var3 = '';
                            if(!(var3 !== var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var5 = _closure2_slot3;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
                            var3 = _closure2_slot4;
                            var6 = null;
                            var3 = var3.bind(var4)(var6);
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var5 = 15;
                            var5 = var8[var5];
                            var7 = var7.bind(var4)(var5);
                            var5 = var7.dismissGlobalKeyboard;
                            var5 = var5.bind(var7)();
case 12: // try_start_0
                            var5 = _closure2_slot1;
                            if(!(var6 == var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 16;
                            var5 = var7[var5];
                            var10 = var6.bind(var4)(var5);
                            var9 = var10.startStage;
                            var14 = _closure2_slot0;
                            var13 = _closure2_slot2;
                            var5 = _closure1_slot12;
                            var12 = var5.GUILD_ONLY;
                            var11 = false;
                            var15 = var10;
                            var5 = var15[var9](var14, var13, var12, var11, var10);
                            SaveGenerator(address=160);
case 15:
                            return var5;
case 16:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 18: // try_end0
                            return var5;
case 13: // try_start_1
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 16;
                            var5 = var7[var5];
                            var9 = var6.bind(var4)(var5);
                            var8 = var9.editStage;
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot2;
                            var5 = _closure1_slot12;
                            var5 = var5.GUILD_ONLY;
                            var5 = var8.bind(var9)(var7, var6, var5);
                            SaveGenerator(address=224);
case 19:
                            return var5;
case 20:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0003_ip = 21; continue _fun0003 }
case 17:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var6 = 17;
                            var6 = var8[var6];
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.hideActionSheet;
                            var6 = _closure1_slot10;
                            var6 = var7.bind(var8)(var6);
case 22: // try_end1
                            _fun0003_ip = 10; continue _fun0003;
case 21:
                            return var5;
case 23: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=5);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 18;
                            var3 = var7[var3];
                            var3 = var5.bind(var4)(var3);
                            var3 = var3.APIError;
                            var5 = var3.prototype;
                            var5 = Object.create(var5, {constructor: {value: var3}});
                            var15 = var5;
                            var14 = var6;
                            var3 = new var15[var3](var14, var13);
                            var5 = var3 instanceof Object ? var3 : var5;
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var5);
                            var3 = _closure2_slot3;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
case 10:
                            var2 = undefined;
                            return var2;
case 8:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var22 = var1.bind(var4)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var14.header;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var5 = 19;
            var5 = var6[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var9 = var8.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var10 = 20;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/semibold', 'color': 'mobile-text-heading-primary'};
            var9 = var14.headerTitle;
            var6['style'] = var9;
            if(!(var13 != var23)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var9 = 21;
            var15 = var18[var9];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.5BKP4y;
            var9 = var15.bind(var16)(var9);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var18 = _closure1_slot0;
            var24 = _closure1_slot3;
            var15 = 21;
            var16 = var24[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var24[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.DDF0cJ;
            var9 = var16.bind(var17)(var15);
case 26:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var9 = var14.headerSubtitle;
            var6['style'] = var9;
            if(!(var13 != var23)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var9 = 21;
            var15 = var18[var9];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.I+9bLx;
            var9 = var15.bind(var16)(var9);
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var18 = _closure1_slot0;
            var24 = _closure1_slot3;
            var15 = 21;
            var16 = var24[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var24[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.bqQIwa;
            var9 = var16.bind(var17)(var15);
case 29:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var15 = var3.bind(var4)(var2, var1);
            var1 = var13 == var23;
            var9 = undefined;
            if(!var1) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 21;
            var2 = var6[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.gR66jX;
            var9 = var2.bind(var3)(var1);
case 30:
            var3 = _closure1_slot13;
            var27 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 22;
            var1 = var18[var1];
            var1 = var27.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var7 = _closure1_slot14;
            var5 = 23;
            var5 = var18[var5];
            var5 = var27.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {};
            var24 = true;
            var5['bottom'] = var24;
            var8 = var14.container;
            var5['style'] = var8;
            var8 = new Array(7);
            var8[0] = var15;
            var16 = _closure1_slot1;
            var15 = 24;
            var15 = var18[var15];
            var17 = var16.bind(var4)(var15);
            var15 = {};
            var28 = function onConfirmPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.hideActionSheet;
                var1 = _closure1_slot10;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15['onConfirmPress'] = var28;
            var28 = var14.ageVerificationNotice;
            var15['style'] = var28;
            var15 = var3.bind(var4)(var17, var15);
            var8[1] = var15;
            var15 = 25;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var17 = 21;
            var28 = var18[var17];
            var28 = var27.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var18[var17];
            var28 = var27.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.5FPBOB;
            var28 = var29.bind(var30)(var28);
            var15['children'] = var28;
            var15 = var3.bind(var4)(var16, var15);
            var8[2] = var15;
            var15 = 26;
            var15 = var18[var15];
            var15 = var27.bind(var4)(var15);
            var16 = var15.FormInput;
            var15 = {'inActionSheet': true, 'style': null, 'showTopContainer': false, 'multiline': false, 'showBorder': false};
            var28 = var14.textInput;
            var15['style'] = var28;
            var28 = _closure1_slot9;
            var15['maxLength'] = var28;
            var15['value'] = var20;
            var28 = var18[var17];
            var28 = var27.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var18[var17];
            var28 = var27.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.ZwWruY;
            var28 = var29.bind(var30)(var28);
            var15['placeholder'] = var28;
            var15['onChange'] = var25;
            var15['autoFocus'] = var24;
            var24 = 'done';
            var15['returnKeyType'] = var24;
            var24 = 27;
            var24 = var18[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.ClearButtonVisibility;
            var24 = var24.WITH_CONTENT;
            var15['clearButtonVisibility'] = var24;
            var24 = var18[var17];
            var24 = var27.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var18 = var18[var17];
            var18 = var27.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.5FPBOB;
            var18 = var24.bind(var25)(var18);
            var15['accessibilityLabel'] = var18;
            var15['onNext'] = var22;
            var15 = var3.bind(var4)(var16, var15);
            var8[3] = var15;
            var16 = var13 != var26;
            var15 = null;
            if(!var16) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var24 = _closure1_slot13;
            var18 = _closure1_slot0;
            var25 = _closure1_slot3;
            var16 = 28;
            var16 = var25[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.LegacyText;
            var16 = {};
            var25 = var14.error;
            var16['style'] = var25;
            var25 = var26.getAnyErrorMessage;
            var25 = var25.bind(var26)();
            var16['children'] = var25;
            var15 = var24.bind(var4)(var18, var16);
case 32:
            var8[4] = var15;
            var18 = _closure1_slot13;
            var16 = _closure1_slot1;
            var24 = _closure1_slot3;
            var15 = 29;
            var15 = var24[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            if(!(var13 != var23)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var26 = _closure1_slot0;
            var23 = _closure1_slot3;
            var24 = var23[var17];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var17];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.K344S7;
            var23 = var24.bind(var25)(var23);
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var27 = _closure1_slot0;
            var24 = _closure1_slot3;
            var25 = var24[var17];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var17];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.s8mM8A;
            var23 = var25.bind(var26)(var24);
case 36:
            var15['text'] = var23;
            var15['onPress'] = var22;
            var22 = var14.startButton;
            var15['style'] = var22;
            var20 = var21 === var20;
            var15['disabled'] = var20;
            var15['loading'] = var19;
            var15['accessibilityHint'] = var9;
            var15 = var18.bind(var4)(var16, var15);
            var8[5] = var15;
            var9 = var13 != var9;
            if(!var9) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var9 = !var12;
case 37:
            if(!var9) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var12 = _closure1_slot13;
            var16 = _closure1_slot0;
            var13 = _closure1_slot3;
            var10 = var13[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'accessible': false, 'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var14 = var14.buttonSubtitle;
            var10['style'] = var14;
            var14 = var13[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.gR66jX;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 39:
            var8[6] = var9;
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