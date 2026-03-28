// app/modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
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
    var1 = function YouStatusRadioGroup() {
        var1 = function useStatusRadioRowProps() {
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = function() {
                var2 = {};
                var8 = _closure1_slot18;
                var5 = _closure1_slot0;
                var10 = _closure1_slot3;
                var4 = 12;
                var1 = var10[var4];
                var7 = undefined;
                var1 = var5.bind(var7)(var1);
                var6 = var1.TableRowIcon;
                var1 = {};
                var9 = _closure1_slot1;
                var11 = 13;
                var11 = var10[var11];
                var11 = var9.bind(var7)(var11);
                var1['source'] = var11;
                var11 = 'text-status-online';
                var1['variant'] = var11;
                var1 = var8.bind(var7)(var6, var1);
                var2['icon'] = var1;
                var1 = _closure1_slot16;
                var1 = var1.ONLINE;
                var2['value'] = var1;
                var1 = new Array(4);
                var1[0] = var2;
                var2 = {};
                var11 = _closure1_slot18;
                var6 = var10[var4];
                var6 = var5.bind(var7)(var6);
                var8 = var6.TableRowIcon;
                var6 = {};
                var12 = 14;
                var12 = var10[var12];
                var12 = var9.bind(var7)(var12);
                var6['source'] = var12;
                var12 = 'text-status-idle';
                var6['variant'] = var12;
                var6 = var11.bind(var7)(var8, var6);
                var2['icon'] = var6;
                var6 = _closure1_slot16;
                var6 = var6.IDLE;
                var2['value'] = var6;
                var1[1] = var2;
                var2 = {};
                var11 = _closure1_slot18;
                var6 = var10[var4];
                var6 = var5.bind(var7)(var6);
                var8 = var6.TableRowIcon;
                var6 = {};
                var12 = 15;
                var12 = var10[var12];
                var12 = var9.bind(var7)(var12);
                var6['source'] = var12;
                var12 = 'text-status-dnd';
                var6['variant'] = var12;
                var6 = var11.bind(var7)(var8, var6);
                var2['icon'] = var6;
                var6 = _closure1_slot16;
                var6 = var6.DND;
                var2['value'] = var6;
                var1[2] = var2;
                var2 = {};
                var6 = _closure1_slot18;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.TableRowIcon;
                var4 = {};
                var8 = 16;
                var8 = var10[var8];
                var8 = var9.bind(var7)(var8);
                var4['source'] = var8;
                var8 = 'text-status-offline';
                var4['variant'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['icon'] = var4;
                var3 = _closure1_slot16;
                var3 = var3.INVISIBLE;
                var2['value'] = var3;
                var1[3] = var2;
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = undefined;
        var7 = var1.bind(var4)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot3;
        var2 = 17;
        var3 = var13[var2];
        var3 = var12.bind(var4)(var3);
        var6 = var3.StatusSetting;
        var3 = var6.useSetting;
        var6 = var3.bind(var6)();
        var _closure2_slot0 = var6;
        var2 = var13[var2];
        var2 = var12.bind(var4)(var2);
        var3 = var2.StatusExpiresAtSetting;
        var2 = var3.useSetting;
        var2 = var2.bind(var3)();
        var _closure2_slot1 = var2;
        var9 = _closure1_slot4;
        var8 = var9.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 18;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = {};
            var6 = _closure2_slot0;
            var2['prevStatus'] = var6;
            var6 = arg1;
            var2['nextStatus'] = var6;
            var2 = var5.bind(var1)(var2);
            var2 = 19;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var8 = var8.bind(var9)(var2, var3);
        var3 = _closure1_slot18;
        var1 = 20;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.TableRadioGroup;
        var1 = {};
        var9 = 21;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9["0DPAZH"];
        var9 = var10.bind(var11)(var9);
        var1['title'] = var9;
        var1['onChange'] = var8;
        var1['defaultValue'] = var6;
        var6 = var7.map;
        var5 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var5 = _closure1_slot18;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 22;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.TableRadioRow;
                var2 = {};
                var19 = var2;
                var18 = var1;
                var7 = copyDataProperties(var19, var18);
                var7 = 23;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.getStatusLabel;
                var7 = var1.value;
                var8 = var8.bind(var9)(var7);
                var7 = 'label';
                var2[var7] = var8;
                var9 = var1.value;
                var8 = _closure2_slot0;
                var7 = undefined;
                if(!(var9 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var9 = _closure2_slot1;
                var8 = null;
                var8 = var8 != var9;
                var7 = undefined;
                if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var9 = _closure2_slot1;
                var8 = '0';
                var7 = undefined;
                if(!(var8 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
                var12 = _closure1_slot0;
                var15 = _closure1_slot3;
                var11 = 21;
                var6 = var15[var11];
                var6 = var12.bind(var4)(var6);
                var10 = var6.intl;
                var9 = var10.formatToPlainString;
                var6 = var15[var11];
                var6 = var12.bind(var4)(var6);
                var6 = var6.t;
                var8 = var6.BWD8fs;
                var6 = {};
                var14 = global;
                var16 = var14.Date;
                var14 = var14.Number;
                var13 = _closure2_slot1;
                var19 = var14.bind(var4)(var13);
                var14 = var16.prototype;
                var14 = Object.create(var14, {constructor: {value: var16}});
                var20 = var14;
                var13 = new var20[var16](var19, var18);
                var14 = var13 instanceof Object ? var13 : var14;
                var13 = var14.toLocaleString;
                var11 = var15[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.intl;
                var12 = var11.currentLocale;
                var11 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
                var11 = var13.bind(var14)(var12, var11);
                var6['endTime'] = var11;
                var7 = var9.bind(var10)(var8, var6);
case 2:
                var6 = 'subLabel';
                var2[var6] = var7;
                var1 = var1.value;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function ThemeRadioGroup() {
        var16 = _closure1_slot0;
        var17 = _closure1_slot3;
        var2 = 24;
        var2 = var17[var2];
        var4 = undefined;
        var6 = var16.bind(var4)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot9;
            var1 = var1.theme;
            return var1;
        };
        var8 = var5.bind(var6)(var3, var2);
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = function(arg1) {
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 25;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var3 = var6.resetBackgroundGradientPreset;
            var3 = var3.bind(var6)();
            var3 = 26;
            var3 = var4[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.resetCustomTheme;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot1;
            var2 = 27;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateTheme;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = new Array(0);
        var9 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot18;
        var2 = _closure1_slot5;
        var1 = {};
        var7 = _closure1_slot19;
        var5 = 20;
        var5 = var17[var5];
        var5 = var16.bind(var4)(var5);
        var6 = var5.TableRadioGroup;
        var5 = {};
        var13 = 21;
        var10 = var17[var13];
        var10 = var16.bind(var4)(var10);
        var14 = var10.intl;
        var11 = var14.string;
        var10 = var17[var13];
        var10 = var16.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.Ksh3ik;
        var10 = var11.bind(var14)(var10);
        var5['title'] = var10;
        var5['onChange'] = var9;
        var5['defaultValue'] = var8;
        var11 = _closure1_slot18;
        var9 = 22;
        var8 = var17[var9];
        var8 = var16.bind(var4)(var8);
        var10 = var8.TableRadioRow;
        var8 = {};
        var18 = _closure1_slot18;
        var14 = 28;
        var14 = var17[var14];
        var14 = var16.bind(var4)(var14);
        var15 = var14.ThemeLightIcon;
        var14 = {};
        var14 = var18.bind(var4)(var15, var14);
        var8['icon'] = var14;
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var18 = var14.intl;
        var15 = var18.string;
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.K2sFfo;
        var14 = var15.bind(var18)(var14);
        var8['label'] = var14;
        var14 = _closure1_slot17;
        var14 = var14.LIGHT;
        var8['value'] = var14;
        var10 = var11.bind(var4)(var10, var8);
        var8 = new Array(3);
        var8[0] = var10;
        var14 = _closure1_slot18;
        var10 = var17[var9];
        var10 = var16.bind(var4)(var10);
        var11 = var10.TableRadioRow;
        var10 = {};
        var19 = _closure1_slot18;
        var15 = 29;
        var15 = var17[var15];
        var15 = var16.bind(var4)(var15);
        var18 = var15.ThemeDarkIcon;
        var15 = {};
        var15 = var19.bind(var4)(var18, var15);
        var10['icon'] = var15;
        var15 = var17[var13];
        var15 = var16.bind(var4)(var15);
        var19 = var15.intl;
        var18 = var19.string;
        var15 = var17[var13];
        var15 = var16.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.b8Cei3;
        var15 = var18.bind(var19)(var15);
        var10['label'] = var15;
        var15 = _closure1_slot17;
        var15 = var15.DARKER;
        var10['value'] = var15;
        var10 = var14.bind(var4)(var11, var10);
        var8[1] = var10;
        var11 = _closure1_slot18;
        var9 = var17[var9];
        var9 = var16.bind(var4)(var9);
        var10 = var9.TableRadioRow;
        var9 = {};
        var18 = _closure1_slot18;
        var14 = 30;
        var14 = var17[var14];
        var14 = var16.bind(var4)(var14);
        var15 = var14.ThemeMidnightIcon;
        var14 = {};
        var14 = var18.bind(var4)(var15, var14);
        var9['icon'] = var14;
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.pQwSpQ;
        var13 = var14.bind(var15)(var13);
        var9['label'] = var13;
        var12 = _closure1_slot17;
        var12 = var12.MIDNIGHT;
        var9['value'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[2] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function YouAccountRadioGroup() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 33;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = 'YouAccountRadioGroup';
            var17 = var2.bind(var5)(var1);
            var1 = _closure1_slot20;
            var14 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = 24;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var6.bind(var8)(var4, var1);
            var _closure2_slot0 = var11;
            var1 = 34;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useMultiAccountUsers;
            var1 = var1.bind(var2)();
            var1 = var1.multiAccountUsers;
            var _closure2_slot1 = var1;
            var2 = function useAccountRadioRowProps(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 24;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var5 = var7.useStateFromStores;
                var3 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.hidePersonalInformation;
                    return var1;
                };
                var5 = var5.bind(var7)(var4, var3);
                var _closure3_slot1 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = arg1;
                            var1 = _closure1_slot10;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {constructor: {value: var1}});
                            var14 = var2;
                            var13 = var3;
                            var1 = new var14[var1](var13, var12);
                            var9 = var1 instanceof Object ? var1 : var2;
                            var1 = _closure3_slot1;
                            var2 = null;
                            if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var1 = var9.hasUniqueUsername;
                            var1 = var1.bind(var9)();
                            var2 = null;
                            if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                            var5 = var9.discriminator;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var1 = '#';
                            var2 = var4.bind(var1)(var5);
case 6:
                            var1 = {};
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var4 = 31;
                            var4 = var5[var4];
                            var5 = undefined;
                            var8 = var6.bind(var5)(var4);
                            var6 = var8.getUserTag;
                            var4 = {};
                            var11 = 'username';
                            var4['mode'] = var11;
                            var11 = _closure3_slot1;
                            var10 = 'always';
                            if(!var11) { _fun0003_ip = 5; continue _fun0003 }
case 9:
                            var10 = 'never';
case 5:
                            var4['identifiable'] = var10;
                            var4 = var6.bind(var8)(var9, var4);
                            var1['label'] = var4;
                            var3 = var3.id;
                            var1['value'] = var3;
                            var1['subLabel'] = var2;
                            var4 = _closure1_slot18;
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var6 = 32;
                            var2 = var8[var6];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var2['user'] = var9;
                            var2['guildId'] = var5;
                            var7 = _closure1_slot0;
                            var6 = var8[var6];
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.AvatarSizes;
                            var6 = var6.REFRESH_MEDIUM_32;
                            var2['size'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var1['icon'] = var2;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var12 = var2.bind(var5)(var1);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = null;
            var8 = var1 == var11;
            var2 = undefined;
            if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var11.id;
case 10:
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var7 = var2 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var7 = _closure2_slot0;
                    var5 = var7.id;
case 12:
                    if(!(var6 !== var5)) { _fun0004_ip = 14; continue _fun0004 }
case 7:
                    var5 = _closure2_slot1;
                    var4 = var5.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    if(!(var2 != var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = var3.tokenStatus;
                    var4 = _closure1_slot8;
                    var4 = var4.INVALID;
                    if(!(var5 !== var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 36;
                    var4 = var6[var4];
                    var9 = var5.bind(var1)(var4);
                    var8 = var9.track;
                    var4 = _closure1_slot14;
                    var7 = var4.MULTI_ACCOUNT_SWITCH_ATTEMPT;
                    var4 = {};
                    var10 = 37;
                    var10 = var6[var10];
                    var10 = var5.bind(var1)(var10);
                    var10 = var10.YOU_ACCOUNT_ACTION_SHEET;
                    var4['location'] = var10;
                    var4 = var8.bind(var9)(var7, var4);
                    var4 = 19;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.hideActionSheet;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot2;
                    var4 = 38;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.switchAccount;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 14; continue _fun0004;
case 16:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 35;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var3 = _closure1_slot15;
                    var3 = var3.LOGIN;
                    var3 = var6.bind(var1)(var3);
                    var3 = 36;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot14;
                    var3 = var2.LOGIN_VIEWED;
                    var2 = {};
                    var6 = 'you_account_action_sheet';
                    var2['source'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 14:
                    return var1;
                }
            };
            var13 = var4.bind(var6)(var2, var3);
            var2 = var1 == var11;
            var1 = null;
            if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = _closure1_slot19;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var14.account;
            var2['style'] = var6;
            var9 = _closure1_slot18;
            var8 = _closure1_slot5;
            var6 = {};
            var14 = var14.manage;
            var6['style'] = var14;
            var19 = _closure1_slot18;
            var18 = _closure1_slot0;
            var20 = _closure1_slot3;
            var14 = 39;
            var14 = var20[var14];
            var14 = var18.bind(var5)(var14);
            var16 = var14.PressableOpacity;
            var15 = {};
            var14 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 35;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            };
            var15['onPress'] = var14;
            var22 = _closure1_slot18;
            var14 = 40;
            var14 = var20[var14];
            var14 = var18.bind(var5)(var14);
            var21 = var14.Text;
            var20 = {};
            var14 = 'text-sm/semibold';
            var20['variant'] = var14;
            var14 = 'text-link';
            if(!var17) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var14 = 'text-brand';
case 20:
            var20['color'] = var14;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var14 = 21;
            var23 = var18[var14];
            var23 = var17.bind(var5)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var18[var14];
            var23 = var17.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.HxrBOZ;
            var23 = var24.bind(var25)(var23);
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var15['children'] = var20;
            var15 = var19.bind(var5)(var16, var15);
            var6['children'] = var15;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot18;
            var7 = 20;
            var7 = var18[var7];
            var7 = var17.bind(var5)(var7);
            var8 = var7.TableRadioGroup;
            var7 = {};
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.oMNyYN;
            var14 = var15.bind(var16)(var14);
            var7['title'] = var14;
            var7['onChange'] = var13;
            var11 = var11.id;
            var7['defaultValue'] = var11;
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot18;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 22;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRadioRow;
                var2 = {};
                var9 = var2;
                var8 = var1;
                var6 = copyDataProperties(var9, var8);
                var1 = var1.value;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function FocusModeSetting() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot20;
            var5 = undefined;
            var19 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 41;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useFocusModeEnabled;
            var12 = var1.bind(var4)();
            var1 = 17;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.FocusModeExpiresAtSetting;
            var1 = var2.useSetting;
            var17 = var1.bind(var2)();
            var9 = null;
            var1 = null;
            if(!var12) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var4 = _closure1_slot18;
            var14 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 42;
            var2 = var11[var2];
            var2 = var14.bind(var5)(var2);
            var3 = var2.TableRowGroup;
            var2 = {};
            var8 = _closure1_slot18;
            var6 = 43;
            var6 = var11[var6];
            var6 = var14.bind(var5)(var6);
            var7 = var6.TableSwitchRow;
            var6 = {};
            var18 = 21;
            var13 = var11[var18];
            var13 = var14.bind(var5)(var13);
            var16 = var13.intl;
            var15 = var16.string;
            var13 = var11[var18];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.wCxBOc;
            var13 = var15.bind(var16)(var13);
            var6['accessibilityLabel'] = var13;
            var13 = var11[var18];
            var13 = var14.bind(var5)(var13);
            var16 = var13.intl;
            var15 = var16.string;
            var13 = var11[var18];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.wCxBOc;
            var13 = var15.bind(var16)(var13);
            var6['accessibilityHint'] = var13;
            var16 = _closure1_slot18;
            var13 = 44;
            var13 = var11[var13];
            var13 = var14.bind(var5)(var13);
            var15 = var13.BellSlashIcon;
            var13 = {};
            var19 = var19.leadingIcon;
            var13['style'] = var19;
            var13 = var16.bind(var5)(var15, var13);
            var6['icon'] = var13;
            var13 = function onValueChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 41;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.setFocusMode;
                    var1 = false;
                    var1 = var3.bind(var4)(var1);
                    _fun0006_ip = 26; continue _fun0006;
case 24:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 19;
                    var3 = var1[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 46;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 45;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var6)(var2, var1);
                    var2 = {};
                    var1 = function onSelect(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 41;
                        var5 = var4[var1];
                        var1 = undefined;
                        var8 = var3.bind(var1)(var5);
                        var7 = var8.setFocusMode;
                        var6 = arg1;
                        var5 = arg2;
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = _closure1_slot1;
                        var2 = 19;
                        var2 = var4[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.hideActionSheet;
                        var2 = var2.bind(var5)();
                        var2 = 47;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.showYouAccountActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2['onSelect'] = var1;
                    var1 = 'FocusModeOptionsActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onValueChange'] = var13;
            var6['value'] = var12;
            var12 = var11[var18];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var18];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.wCxBOc;
            var11 = var12.bind(var13)(var11);
            var6['label'] = var11;
            if(!(var9 != var17)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var9 = '0';
            if(!(var9 === var17)) { _fun0005_ip = 29; continue _fun0005 }
case 27:
            var13 = _closure1_slot0;
            var9 = _closure1_slot3;
            var11 = var9[var18];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var18];
            var9 = var13.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.i0nsoY;
            var9 = var11.bind(var12)(var9);
            _fun0005_ip = 30; continue _fun0005;
case 29:
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var10 = var14[var18];
            var10 = var15.bind(var5)(var10);
            var13 = var10.intl;
            var12 = var13.formatToPlainString;
            var10 = var14[var18];
            var10 = var15.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.BWD8fs;
            var10 = {};
            var16 = global;
            var19 = var16.Date;
            var16 = var16.Number;
            var21 = var16.bind(var5)(var17);
            var17 = var19.prototype;
            var17 = Object.create(var17, {constructor: {value: var19}});
            var22 = var17;
            var16 = new var22[var19](var21, var20);
            var17 = var16 instanceof Object ? var16 : var17;
            var16 = var17.toLocaleString;
            var14 = var14[var18];
            var14 = var15.bind(var5)(var14);
            var14 = var14.intl;
            var15 = var14.currentLocale;
            var14 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
            var14 = var16.bind(var17)(var15, var14);
            var10['endTime'] = var14;
            var9 = var12.bind(var13)(var11, var10);
case 30:
            var6['subLabel'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 22:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function CustomStatus() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 48;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useCustomStatusActivity;
            var11 = var1.bind(var3)();
            var1 = 49;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useToken;
            var5 = _closure1_slot1;
            var1 = 11;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_ICON_SIZE;
            var24 = var2.bind(var3)(var1);
            var9 = null;
            var2 = var9 == var11;
            var1 = undefined;
            if(var2) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var1 = var11.state;
case 31:
            var23 = var9 != var1;
            if(!var23) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var2 = var11.state;
            var1 = '';
            var23 = var1 !== var2;
case 33:
            var2 = var9 == var11;
            var1 = undefined;
            if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var1 = var11.emoji;
case 35:
            var1 = var9 != var1;
            if(var23) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var23 = var1;
case 37:
            var3 = _closure1_slot18;
            var12 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 42;
            var1 = var8[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var7 = _closure1_slot19;
            var5 = 50;
            var5 = var8[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.Card;
            var5 = {'shadow': 'none', 'border': 'none'};
            var10 = var17.customStatusRow;
            var5['style'] = var10;
            var18 = _closure1_slot19;
            var10 = 39;
            var8 = var8[var10];
            var8 = var12.bind(var4)(var8);
            var12 = var8.PressableOpacity;
            var8 = {};
            var13 = var17.customStatusEditButton;
            var8['style'] = var13;
            var14 = 'button';
            var8['accessibilityRole'] = var14;
            var20 = _closure1_slot0;
            var19 = _closure1_slot3;
            var13 = 21;
            var21 = var19[var13];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var19[var13];
            var19 = var20.bind(var4)(var19);
            var20 = var19.t;
            if(var23) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var19 = var20["/UonHN"];
            var19 = var21.bind(var22)(var19);
            _fun0007_ip = 41; continue _fun0007;
case 39:
            var20 = var20["2p9FMw"];
            var19 = var21.bind(var22)(var20);
case 41:
            var8['accessibilityLabel'] = var19;
            var19 = undefined;
            if(!var23) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var21 = _closure1_slot0;
            var20 = _closure1_slot3;
            var22 = var20[var13];
            var22 = var21.bind(var4)(var22);
            var25 = var22.intl;
            var22 = var25.formatToPlainString;
            var20 = var20[var13];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.GE7QzY;
            var20 = {};
            var26 = var11.emoji;
            var28 = var9 == var26;
            var27 = undefined;
            if(var28) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var27 = var26.name;
case 44:
            var28 = var9 != var27;
            var26 = '';
            if(!var28) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var26 = var27;
case 46:
            var20['emoji'] = var26;
            var26 = var11.state;
            var20['status'] = var26;
            var19 = var22.bind(var25)(var21, var20);
case 42:
            var8['accessibilityHint'] = var19;
            var19 = function onPress() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 19;
                var3 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot0;
                var2 = 51;
                var2 = var7[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var5 = 37;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var6 = var5.YOU_ACCOUNT_ACTION_SHEET;
                var5 = new Array(1);
                var5[0] = var6;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8['onPress'] = var19;
            var20 = var9 == var11;
            var19 = undefined;
            if(var20) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var19 = var11.emoji;
case 48:
            if(!(var9 == var19)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var21 = _closure1_slot18;
            var20 = _closure1_slot0;
            var22 = _closure1_slot3;
            var19 = 53;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.ReactionIcon;
            var19 = {};
            var22 = 'md';
            var19['size'] = var22;
            var22 = var17.leadingIcon;
            var19['style'] = var22;
            var20 = var21.bind(var4)(var20, var19);
            _fun0007_ip = 52; continue _fun0007;
case 50:
            var22 = _closure1_slot18;
            var21 = _closure1_slot1;
            var25 = _closure1_slot3;
            var19 = 52;
            var19 = var25[var19];
            var21 = var21.bind(var4)(var19);
            var19 = {};
            var25 = var11.emoji;
            var19['emoji'] = var25;
            var19['size'] = var24;
            var20 = var22.bind(var4)(var21, var19);
case 52:
            var19 = new Array(2);
            var19[0] = var20;
            var22 = _closure1_slot18;
            var21 = _closure1_slot0;
            var24 = _closure1_slot3;
            var20 = 40;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 2};
            if(var23) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var26 = _closure1_slot0;
            var23 = _closure1_slot3;
            var24 = var23[var13];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var13];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23["/UonHN"];
            var23 = var24.bind(var25)(var23);
            _fun0007_ip = 55; continue _fun0007;
case 53:
            var23 = var11.state;
case 55:
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var8['children'] = var19;
            var12 = var18.bind(var4)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var11 = var9 != var11;
            var9 = null;
            if(!var11) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var12 = _closure1_slot18;
            var19 = _closure1_slot0;
            var18 = _closure1_slot3;
            var10 = var18[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var15 = function onPress(arg1) {
                var2 = arg1;
                var1 = var2.stopPropagation;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 54;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var10['onPress'] = var15;
            var10['accessibilityRole'] = var14;
            var14 = var18[var13];
            var14 = var19.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var18[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.wfYTHe;
            var13 = var14.bind(var15)(var13);
            var10['accessibilityLabel'] = var13;
            var13 = var17.customStatusRemoveButton;
            var10['style'] = var13;
            var15 = _closure1_slot18;
            var14 = _closure1_slot6;
            var13 = {};
            var17 = var17.trailingIcon;
            var13['style'] = var17;
            var17 = _closure1_slot1;
            var16 = 55;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var13['source'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 56:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
    var7 = var7.bind(var1)(var4);
    var _closure1_slot4 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MultiAccountTokenStatus;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot14 = var8;
    var8 = var4.AuthStates;
    var _closure1_slot15 = var8;
    var8 = var4.StatusTypes;
    var _closure1_slot16 = var8;
    var4 = var4.ThemeTypes;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot18 = var8;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'relative';
    var10['position'] = var11;
    var4['account'] = var10;
    var10 = {'position': 'absolute', 'right': 0, 'zIndex': 100};
    var4['manage'] = var10;
    var10 = {'width': 24, 'height': 24, 'margin': 4};
    var4['leadingIcon'] = var10;
    var10 = {'tintColor': null, 'width': 16, 'height': 16};
    var12 = 11;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var10['tintColor'] = var11;
    var4['trailingIcon'] = var10;
    var10 = {'padding': 0, 'flexDirection': 'row', 'alignItems': 'center'};
    var11 = 'center';
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.TABLE_ROW_PADDING;
    var10['gap'] = var14;
    var4['customStatusRow'] = var10;
    var10 = {'minHeight': null, 'padding': null, 'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.TABLE_ROW_HEIGHT;
    var10['minHeight'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.TABLE_ROW_PADDING;
    var10['padding'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.TABLE_ROW_PADDING;
    var10['gap'] = var14;
    var4['customStatusEditButton'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.TABLE_ROW_HEIGHT;
    var10['height'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.modules;
    var12 = var12.mobile;
    var12 = var12.TABLE_ROW_PADDING;
    var10['paddingHorizontal'] = var12;
    var10['alignItems'] = var11;
    var10['justifyContent'] = var11;
    var4['customStatusRemoveButton'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var9 = var2.statusOnly;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var9 = false;
case 58:
            var6 = _closure1_slot0;
            var14 = _closure1_slot3;
            var12 = 24;
            var2 = var14[var12];
            var7 = var6.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCanUseMultiAccountMobile;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 56;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'theme_setting_in_account_sheet';
            var8 = var3.bind(var4)(var2);
            var2 = var14[var12];
            var5 = var6.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var7 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var1 = _closure1_slot11;
                var1 = var1.isDeveloper;
                return var1;
            };
            var11 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot18;
            var1 = 57;
            var1 = var14[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var1['startExpanded'] = var13;
            var7 = _closure1_slot18;
            var5 = 58;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var15 = _closure1_slot0;
            var18 = _closure1_slot3;
            var14 = 21;
            var16 = var18[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.t;
            if(var9) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            if(var13) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var14 = var15.qP/i6k;
            var14 = var16.bind(var17)(var14);
            _fun0008_ip = 64; continue _fun0008;
case 62:
            var18 = var15.ldCE/p;
            var14 = var16.bind(var17)(var18);
case 64:
            _fun0008_ip = 65; continue _fun0008;
case 60:
            var15 = var15["3Uj+2p"];
            var14 = var16.bind(var17)(var15);
case 65:
            var5['title'] = var14;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var5 = true;
            var1['showGradient'] = var5;
            var7 = _closure1_slot19;
            var6 = _closure1_slot0;
            var14 = _closure1_slot3;
            var5 = 59;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var5['spacing'] = var12;
            var12 = var8;
            if(!var12) { _fun0008_ip = 27; continue _fun0008 }
case 66:
            var15 = _closure1_slot18;
            var14 = _closure1_slot22;
            var8 = {};
            var12 = var15.bind(var4)(var14, var8);
case 27:
            var8 = new Array(6);
            var8[0] = var12;
            var15 = _closure1_slot18;
            var14 = _closure1_slot21;
            var12 = {};
            var12 = var15.bind(var4)(var14, var12);
            var8[1] = var12;
            var15 = _closure1_slot18;
            var14 = _closure1_slot24;
            var12 = {};
            var12 = var15.bind(var4)(var14, var12);
            var8[2] = var12;
            var15 = _closure1_slot18;
            var14 = _closure1_slot25;
            var12 = {};
            var12 = var15.bind(var4)(var14, var12);
            var8[3] = var12;
            var12 = !var9;
            if(!var12) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var12 = var13;
case 67:
            if(!var12) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var15 = _closure1_slot18;
            var14 = _closure1_slot23;
            var13 = {};
            var12 = var15.bind(var4)(var14, var13);
case 69:
            var8[4] = var12;
            var9 = !var9;
            if(!var9) { _fun0008_ip = 42; continue _fun0008 }
case 71:
            var9 = var11;
case 42:
            if(!var9) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var12 = _closure1_slot18;
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var10 = 60;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'title': 'Developer Tools', 'embedded': true};
            var9 = var12.bind(var4)(var11, var10);
case 72:
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 61;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();