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
    var14 = var14.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var14;
    var4['textInput'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['startButton'] = var9;
    var9 = {'paddingTop': 8, 'textAlign': 'center'};
    var4['buttonSubtitle'] = var9;
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
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StartStageChannelEventActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
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
            var22 = var5.bind(var6)(var3, var2);
            var _closure2_slot1 = var22;
            var5 = _closure1_slot6;
            var3 = var5.useState;
            var12 = null;
            var2 = var12 == var22;
            var6 = undefined;
            if(var2) { _fun0001_ip = 117; continue _fun0001 }
 111:
            var6 = var22.topic;
 117:
            var7 = var12 != var6;
            var20 = '';
            var2 = var20;
            if(!var7) { _fun0001_ip = 134; continue _fun0001 }
 131:
            var2 = var6;
 134:
            var2 = var3.bind(var5)(var2);
            var7 = _closure1_slot5;
            var6 = 2;
            var2 = var7.bind(var4)(var2, var6);
            var5 = 0;
            var19 = var2[var5];
            _closure2_slot2 = var19;
            var3 = 1;
            var24 = var2[var3];
            var8 = _closure1_slot6;
            var9 = var8.useState;
            var2 = false;
            var2 = var9.bind(var8)(var2);
            var2 = var7.bind(var4)(var2, var6);
            var18 = var2[var5];
            var2 = var2[var3];
            _closure2_slot3 = var2;
            var2 = var8.useState;
            var2 = var2.bind(var8)(var12);
            var2 = var7.bind(var4)(var2, var6);
            var25 = var2[var5];
            var2 = var2[var3];
            _closure2_slot4 = var2;
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 12;
            var2 = var6[var2];
            var3 = var7.bind(var4)(var2);
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 13;
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
                    if(var8) { _fun0002_ip = 69; continue _fun0002 }
 60:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
 69:
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
            var2 = var3.bind(var4)(var2);
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 346; continue _fun0003 }
 10:
                            var4 = _closure2_slot2;
                            var3 = var4.trim;
                            var4 = var3.bind(var4)();
                            var3 = '';
                            if(!(var3 !== var4)) { _fun0003_ip = 341; continue _fun0003 }
 38:
                            var5 = _closure2_slot3;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
                            var3 = _closure2_slot4;
                            var6 = null;
                            var3 = var3.bind(var4)(var6);
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var5 = 14;
                            var5 = var8[var5];
                            var7 = var7.bind(var4)(var5);
                            var5 = var7.dismissGlobalKeyboard;
                            var5 = var5.bind(var7)();
 95: // try_start_0
                            var5 = _closure2_slot1;
                            if(!(var6 == var5)) { _fun0003_ip = 169; continue _fun0003 }
 103:
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 15;
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
 158:
                            return var5;
 160:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0003_ip = 230; continue _fun0003 }
 166: // try_end0
                            return var5;
 169: // try_start_1
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 15;
                            var5 = var7[var5];
                            var9 = var6.bind(var4)(var5);
                            var8 = var9.editStage;
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot2;
                            var5 = _closure1_slot12;
                            var5 = var5.GUILD_ONLY;
                            var5 = var8.bind(var9)(var7, var6, var5);
                            SaveGenerator(address=224);
 222:
                            return var5;
 224:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0003_ip = 267; continue _fun0003 }
 230:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var6 = 16;
                            var6 = var8[var6];
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.hideActionSheet;
                            var6 = _closure1_slot10;
                            var6 = var7.bind(var8)(var6);
 265: // try_end1
                            _fun0003_ip = 341; continue _fun0003;
 267:
                            return var5;
 270: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=5);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 17;
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
 341:
                            var2 = undefined;
                            return var2;
 346:
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
            var21 = var1.bind(var4)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var14.header;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var5 = 18;
            var5 = var6[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var10 = 19;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            var9 = var14.headerTitle;
            var6['style'] = var9;
            if(!(var12 != var22)) { _fun0001_ip = 429; continue _fun0001 }
 372:
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var9 = 20;
            var13 = var17[var9];
            var13 = var16.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var9 = var17[var9];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.5BKP4+;
            var9 = var13.bind(var15)(var9);
            _fun0001_ip = 484; continue _fun0001;
 429:
            var17 = _closure1_slot0;
            var23 = _closure1_slot3;
            var13 = 20;
            var15 = var23[var13];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var23[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.DDF0cH;
            var9 = var15.bind(var16)(var13);
 484:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var9 = var14.headerSubtitle;
            var6['style'] = var9;
            if(!(var12 != var22)) { _fun0001_ip = 611; continue _fun0001 }
 554:
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var9 = 20;
            var13 = var17[var9];
            var13 = var16.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var9 = var17[var9];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.I+9bLy;
            var9 = var13.bind(var15)(var9);
            _fun0001_ip = 666; continue _fun0001;
 611:
            var17 = _closure1_slot0;
            var23 = _closure1_slot3;
            var13 = 20;
            var15 = var23[var13];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var23[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.bqQIwc;
            var9 = var15.bind(var16)(var13);
 666:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var13 = var3.bind(var4)(var2, var1);
            var1 = var12 == var22;
            var9 = undefined;
            if(!var1) { _fun0001_ip = 754; continue _fun0001 }
 699:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 20;
            var2 = var6[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.gR66jY;
            var9 = var2.bind(var3)(var1);
 754:
            var3 = _closure1_slot13;
            var26 = _closure1_slot0;
            var16 = _closure1_slot3;
            var1 = 21;
            var1 = var16[var1];
            var1 = var26.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var7 = _closure1_slot14;
            var5 = 22;
            var5 = var16[var5];
            var5 = var26.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {};
            var23 = true;
            var5['bottom'] = var23;
            var8 = var14.container;
            var5['style'] = var8;
            var8 = new Array(6);
            var8[0] = var13;
            var15 = _closure1_slot1;
            var13 = 23;
            var13 = var16[var13];
            var15 = var15.bind(var4)(var13);
            var13 = {};
            var17 = 20;
            var27 = var16[var17];
            var27 = var26.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var16[var17];
            var27 = var26.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.5FPBOD;
            var27 = var28.bind(var29)(var27);
            var13['children'] = var27;
            var13 = var3.bind(var4)(var15, var13);
            var8[1] = var13;
            var13 = 24;
            var13 = var16[var13];
            var13 = var26.bind(var4)(var13);
            var15 = var13.FormInput;
            var13 = {'inActionSheet': true, 'style': null, 'showTopContainer': false, 'multiline': false, 'showBorder': false};
            var27 = var14.textInput;
            var13['style'] = var27;
            var27 = _closure1_slot9;
            var13['maxLength'] = var27;
            var13['value'] = var19;
            var27 = var16[var17];
            var27 = var26.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var16[var17];
            var27 = var26.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.ZwWrub;
            var27 = var28.bind(var29)(var27);
            var13['placeholder'] = var27;
            var13['onChange'] = var24;
            var13['autoFocus'] = var23;
            var23 = 'done';
            var13['returnKeyType'] = var23;
            var23 = 25;
            var23 = var16[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23.ClearButtonVisibility;
            var23 = var23.WITH_CONTENT;
            var13['clearButtonVisibility'] = var23;
            var23 = var16[var17];
            var23 = var26.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var16 = var16[var17];
            var16 = var26.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.5FPBOD;
            var16 = var23.bind(var24)(var16);
            var13['accessibilityLabel'] = var16;
            var13['onNext'] = var21;
            var13 = var3.bind(var4)(var15, var13);
            var8[2] = var13;
            var15 = var12 != var25;
            var13 = null;
            if(!var15) { _fun0001_ip = 1208; continue _fun0001 }
 1147:
            var23 = _closure1_slot13;
            var16 = _closure1_slot0;
            var24 = _closure1_slot3;
            var15 = 26;
            var15 = var24[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.LegacyText;
            var15 = {};
            var24 = var14.error;
            var15['style'] = var24;
            var24 = var25.getAnyErrorMessage;
            var24 = var24.bind(var25)();
            var15['children'] = var24;
            var13 = var23.bind(var4)(var16, var15);
 1208:
            var8[3] = var13;
            var16 = _closure1_slot13;
            var15 = _closure1_slot1;
            var23 = _closure1_slot3;
            var13 = 27;
            var13 = var23[var13];
            var15 = var15.bind(var4)(var13);
            var13 = {};
            if(!(var12 != var22)) { _fun0001_ip = 1296; continue _fun0001 }
 1242:
            var25 = _closure1_slot0;
            var22 = _closure1_slot3;
            var23 = var22[var17];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var17];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.K344S0;
            var22 = var23.bind(var24)(var22);
            _fun0001_ip = 1348; continue _fun0001;
 1296:
            var26 = _closure1_slot0;
            var23 = _closure1_slot3;
            var24 = var23[var17];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var17];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.s8mM8P;
            var22 = var24.bind(var25)(var23);
 1348:
            var13['text'] = var22;
            var13['onPress'] = var21;
            var21 = var14.startButton;
            var13['style'] = var21;
            var19 = var20 === var19;
            var13['disabled'] = var19;
            var13['loading'] = var18;
            var13['accessibilityHint'] = var9;
            var13 = var16.bind(var4)(var15, var13);
            var8[4] = var13;
            var9 = var12 != var9;
            if(!var9) { _fun0001_ip = 1503; continue _fun0001 }
 1401:
            var12 = _closure1_slot13;
            var16 = _closure1_slot0;
            var13 = _closure1_slot3;
            var10 = var13[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'accessible': false, 'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var14 = var14.buttonSubtitle;
            var10['style'] = var14;
            var14 = var13[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.gR66jY;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1503:
            var8[5] = var9;
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