// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var6;
    var1 = function DeleteButton(arg1) {
        var1 = arg1;
        var5 = var1.onDelete;
        var1 = _closure1_slot13;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var11 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 11;
        var1 = var13[var1];
        var1 = var11.bind(var4)(var1);
        var7 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var12 = _closure1_slot0;
        var1 = 12;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var8 = var7.textInput;
        var7 = new Array(2);
        var7[0] = var8;
        var8 = var9.deleteButton;
        var7[1] = var8;
        var1['style'] = var7;
        var7 = 'button';
        var1['accessibilityRole'] = var7;
        var1['onPress'] = var5;
        var8 = _closure1_slot11;
        var5 = 13;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var7 = var5.TrashIcon;
        var5 = {};
        var10 = var9.deleteIcon;
        var5['style'] = var10;
        var10 = 9;
        var10 = var13[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.unsafe_rawColors;
        var10 = var10.RED_400;
        var5['color'] = var10;
        var10 = 'custom';
        var5['size'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot11;
        var6 = 14;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.LegacyText;
        var6 = {};
        var9 = var9.deleteLabel;
        var6['style'] = var9;
        var9 = 15;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.p4Bh7e;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var17.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var7 = var8.bind(var1)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot8 = var8;
    var8 = var4.MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH;
    var _closure1_slot9 = var8;
    var4 = var4.MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var13 = 8;
    var4 = var6[var13];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between', 'height': '100%'};
    var11 = 9;
    var15 = var6[var11];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var15;
    var4['container'] = var10;
    var10 = {};
    var10['flexGrow'] = var12;
    var4['scrollContainer'] = var10;
    var16 = 16;
    var10 = {'flexDirection': 'row', 'marginTop': 16, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['deleteButton'] = var10;
    var12 = 20;
    var10 = {'width': 20, 'height': 20};
    var4['deleteIcon'] = var10;
    var10 = {};
    var15 = 10;
    var15 = var6[var15];
    var15 = var17.bind(var1)(var15);
    var14 = var14.PRIMARY_SEMIBOLD;
    var11 = var6[var11];
    var11 = var17.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var19 = var15.bind(var1)(var14, var11, var16);
    var20 = var10;
    var11 = copyDataProperties(var20, var19);
    var11 = 'marginStart';
    var10[var11] = var13;
    var11 = 'lineHeight';
    var10[var11] = var12;
    var4['deleteLabel'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var1 = _closure1_slot13;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 11;
            var2 = var1[var2];
            var2 = var3.bind(var4)(var2);
            var20 = var2.bind(var4)();
            var13 = _closure1_slot7;
            var2 = var13.useNameState;
            var2 = var2.bind(var13)();
            var10 = _closure1_slot4;
            var7 = 2;
            var5 = var10.bind(var4)(var2, var7);
            var2 = 0;
            var16 = var5[var2];
            var _closure2_slot1 = var16;
            var8 = 1;
            var6 = var5[var8];
            var _closure2_slot2 = var6;
            var5 = var13.useEmojiIdState;
            var5 = var5.bind(var13)();
            var5 = var10.bind(var4)(var5, var7);
            var29 = var5[var2];
            var _closure2_slot3 = var29;
            var5 = var5[var8];
            var _closure2_slot4 = var5;
            var5 = var13.useEmojiNameState;
            var5 = var5.bind(var13)();
            var5 = var10.bind(var4)(var5, var7);
            var28 = var5[var2];
            var _closure2_slot5 = var28;
            var5 = var5[var8];
            var _closure2_slot6 = var5;
            var5 = var13.useDescriptionState;
            var5 = var5.bind(var13)();
            var5 = var10.bind(var4)(var5, var7);
            var19 = var5[var2];
            var _closure2_slot7 = var19;
            var18 = var5[var8];
            var5 = var13.useRefIdState;
            var5 = var5.bind(var13)();
            var7 = var10.bind(var4)(var5, var7);
            var5 = var7[var2];
            var _closure2_slot8 = var5;
            var7 = var7[var8];
            var _closure2_slot9 = var7;
            var23 = 16;
            var1 = var1[var23];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var25 = var1.bottom;
            var10 = null;
            var1 = var10 == var29;
            var3 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var29.length;
case 2:
            var7 = var10 != var3;
            var1 = 0;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3;
case 4:
            var13 = var1 > var2;
            if(var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var10 == var28;
            var3 = undefined;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var28.length;
case 8:
            var7 = var10 != var3;
            var1 = 0;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var3;
case 10:
            var13 = var1 > var2;
case 6:
            if(!var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var12.benefitType;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL;
            if(!(var3 !== var1)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var10 == var16;
            var3 = undefined;
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var16.length;
case 16:
            var7 = var10 != var3;
            var1 = 0;
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var3;
case 18:
            var1 = var1 > var2;
            _fun0001_ip = 20; continue _fun0001;
case 14:
            var1 = var10 != var5;
case 20:
            var13 = var1;
case 12:
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                            var2 = _closure2_slot3;
                            var4 = null;
                            if(!(var4 == var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                            var2 = _closure2_slot5;
                            if(!(var4 != var2)) { _fun0002_ip = 25; continue _fun0002 }
case 23:
                            var2 = _closure2_slot0;
                            var5 = var2.benefitType;
                            var2 = _closure1_slot8;
                            var2 = var2.CHANNEL;
                            if(!(var5 === var2)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                            var2 = _closure2_slot8;
                            if(!(var4 != var2)) { _fun0002_ip = 25; continue _fun0002 }
case 26: // try_start_0
                            var5 = {};
                            var2 = _closure2_slot1;
                            var5['name'] = var2;
                            var2 = _closure2_slot3;
                            var5['emoji_id'] = var2;
                            var2 = _closure2_slot5;
                            var5['emoji_name'] = var2;
                            var6 = _closure2_slot7;
                            var4 = '';
                            var2 = undefined;
                            if(!(var4 !== var6)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                            var2 = _closure2_slot7;
case 28:
                            var5['description'] = var2;
                            var4 = _closure2_slot0;
                            var2 = var4.benefitType;
                            var5['ref_type'] = var2;
                            var2 = _closure2_slot8;
                            var5['ref_id'] = var2;
                            var2 = var4.onSave;
                            var2 = var2.bind(var4)(var5);
                            SaveGenerator(address=158);
case 30:
                            return var2;
case 31:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                            var4 = _closure2_slot0;
                            var3 = var4.onClose;
                            var3 = var3.bind(var4)();
case 34: // try_end0
                            _fun0002_ip = 25; continue _fun0002;
case 32:
                            return var2;
case 35: // catch_target0
                            CatchBlockStart(arg_register=1);
case 25:
                            var2 = undefined;
                            return var2;
case 21:
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
            var8 = var1.bind(var4)();
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 36; continue _fun0003 }
case 37: // try_start_0
                            var2 = _closure2_slot0;
                            var4 = var2.onDelete;
                            var2 = null;
                            var4 = var2 == var4;
                            var2 = undefined;
                            if(var4) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                            var5 = _closure2_slot0;
                            var4 = var5.onDelete;
                            var2 = var4.bind(var5)();
case 38:
                            SaveGenerator(address=49);
case 40:
                            return var2;
case 41:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                            var4 = _closure2_slot0;
                            var3 = var4.onClose;
                            var3 = var3.bind(var4)();
case 26: // try_end0
                            _fun0003_ip = 44; continue _fun0003;
case 42:
                            return var2;
case 45: // catch_target0
                            CatchBlockStart(arg_register=1);
case 44:
                            var2 = undefined;
                            return var2;
case 36:
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
            var14 = var1.bind(var4)();
            var2 = var12.benefitType;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL;
            if(!(var2 !== var1)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.0rVUnJ;
            var22 = var2.bind(var3)(var1);
            _fun0001_ip = 48; continue _fun0001;
case 46:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Odqwp6;
            var22 = var2.bind(var3)(var1);
case 48:
            var2 = var12.benefitType;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL;
            if(!(var2 !== var1)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.kV54/f;
            var24 = var2.bind(var3)(var1);
            _fun0001_ip = 51; continue _fun0001;
case 49:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.GK18KC;
            var24 = var2.bind(var3)(var1);
case 51:
            var2 = var12.benefitType;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL;
            if(!(var2 !== var1)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.NNqncX;
            var17 = var2.bind(var3)(var1);
            _fun0001_ip = 54; continue _fun0001;
case 52:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.DDUpp6;
            var17 = var2.bind(var3)(var1);
case 54:
            var2 = var12.benefitType;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL;
            if(!(var2 !== var1)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 18;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.FormInput;
            var1 = {'style': null, 'showTopContainer': false, 'multiline': false};
            var21 = var20.textInput;
            var1['style'] = var21;
            var21 = _closure1_slot10;
            var1['maxLength'] = var21;
            var1['value'] = var16;
            var16 = 15;
            var21 = var15[var16];
            var21 = var7.bind(var4)(var21);
            var27 = var21.intl;
            var21 = var27.string;
            var16 = var15[var16];
            var16 = var7.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.kV54/f;
            var16 = var21.bind(var27)(var16);
            var1['placeholder'] = var16;
            var1['onChange'] = var6;
            var6 = true;
            var1['autoFocus'] = var6;
            var6 = 19;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.ClearButtonVisibility;
            var6 = var6.WITH_CONTENT;
            var1['clearButtonVisibility'] = var6;
            var15 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 57; continue _fun0001;
case 55:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 17;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['channelId'] = var5;
            var5 = var12.guildId;
            var1['guildId'] = var5;
            var5 = function onChange(arg1) {
                var2 = arg1;
                var5 = _closure2_slot9;
                var4 = var2.id;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var3 = _closure2_slot2;
                var2 = var2.name;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onChange'] = var5;
            var15 = var3.bind(var4)(var2, var1);
case 57:
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var16 = _closure1_slot1;
            var21 = _closure1_slot2;
            var5 = 20;
            var5 = var21[var5];
            var6 = var16.bind(var4)(var5);
            var5 = {};
            var5['title'] = var22;
            var22 = var12.onClose;
            var5['onClose'] = var22;
            var5['canSave'] = var13;
            var5['onSave'] = var8;
            var8 = var12.listingId;
            var5['listingId'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot6;
            var6 = {'keyboardShouldPersistTaps': 'handled', 'showsVerticalScrollIndicator': false, 'alwaysBounceVertical': false};
            var13 = var9.scrollContainer;
            var9 = new Array(2);
            var9[0] = var13;
            var13 = {};
            var22 = 32;
            var22 = var25 + var22;
            var22 = var22 + var23;
            var13['paddingBottom'] = var22;
            var9[1] = var13;
            var6['contentContainerStyle'] = var9;
            var23 = _closure1_slot11;
            var13 = 21;
            var9 = var21[var13];
            var22 = var16.bind(var4)(var9);
            var9 = {};
            var25 = var20.header;
            var9['style'] = var25;
            var9['children'] = var24;
            var22 = var23.bind(var4)(var22, var9);
            var9 = new Array(7);
            var9[0] = var22;
            var9[1] = var15;
            var25 = _closure1_slot11;
            var15 = var21[var13];
            var24 = var16.bind(var4)(var15);
            var22 = {};
            var15 = var20.header;
            var22['style'] = var15;
            var15 = _closure1_slot0;
            var23 = 15;
            var27 = var21[var23];
            var27 = var15.bind(var4)(var27);
            var31 = var27.intl;
            var30 = var31.string;
            var27 = var21[var23];
            var27 = var15.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.sMOuub;
            var27 = var30.bind(var31)(var27);
            var22['children'] = var27;
            var22 = var25.bind(var4)(var24, var22);
            var9[2] = var22;
            var25 = _closure1_slot11;
            var22 = 22;
            var22 = var21[var22];
            var24 = var16.bind(var4)(var22);
            var22 = {};
            var27 = {};
            var27['emojiId'] = var29;
            var27['emojiName'] = var28;
            var22['emoji'] = var27;
            var27 = var12.guildId;
            var22['guildId'] = var27;
            var26 = function onChange(arg1) {
                var2 = arg1;
                var5 = _closure2_slot4;
                var4 = var2.emojiId;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var3 = _closure2_slot6;
                var2 = var2.emojiName;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22['onChange'] = var26;
            var22 = var25.bind(var4)(var24, var22);
            var9[3] = var22;
            var22 = _closure1_slot11;
            var13 = var21[var13];
            var16 = var16.bind(var4)(var13);
            var13 = {};
            var24 = var20.header;
            var13['style'] = var24;
            var24 = var21[var23];
            var24 = var15.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var21[var23];
            var23 = var15.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.74Jctb;
            var23 = var24.bind(var25)(var23);
            var13['children'] = var23;
            var13 = var22.bind(var4)(var16, var13);
            var9[4] = var13;
            var16 = _closure1_slot11;
            var13 = 18;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.FormInput;
            var13 = {'style': null, 'showTopContainer': false, 'multiline': true, 'maxLength': null, 'numberOfLines': 3};
            var20 = var20.textInput;
            var13['style'] = var20;
            var20 = _closure1_slot9;
            var13['maxLength'] = var20;
            var13['value'] = var19;
            var13['onChange'] = var18;
            var13['placeholder'] = var17;
            var13 = var16.bind(var4)(var15, var13);
            var9[5] = var13;
            var12 = var12.onDelete;
            var12 = var10 == var12;
            var10 = null;
            if(var12) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var13 = _closure1_slot11;
            var12 = _closure1_slot14;
            var11 = {};
            var11['onDelete'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 58:
            var9[6] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();