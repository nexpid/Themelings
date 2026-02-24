// app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function Header(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.theme;
            var17 = var1.platform;
            var18 = var1.integration;
            var10 = var1.onRemove;
            var9 = var1.locked;
            var1 = _closure1_slot14;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var19 = null;
            var2 = var19 == var18;
            var1 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var18.application;
case 2:
            if(!(var19 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var19 != var17;
            var5 = undefined;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 9;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = _closure1_slot0;
            var6 = 10;
            var6 = var15[var6];
            var12 = var13.bind(var4)(var6);
            var7 = var12.makeSource;
            var6 = 11;
            var6 = var15[var6];
            var13 = var13.bind(var4)(var6);
            var6 = var13.isThemeDark;
            var6 = var6.bind(var13)(var14);
            var13 = var17.icon;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var13.lightPNG;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var6 = var13.darkPNG;
case 10:
            var6 = var7.bind(var12)(var6);
            var1['source'] = var6;
            var6 = true;
            var1['disableColor'] = var6;
            var5 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 8;
            var1 = var12[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.AvatarSizes;
            var6 = var6.XSMALL;
            var1['size'] = var6;
            var7 = var19 == var18;
            var6 = undefined;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var18.application;
            var12 = var19 == var7;
            var6 = undefined;
            if(var12) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var6 = var7.bot;
case 11:
            var1['user'] = var6;
            var1['guildId'] = var4;
            var5 = var3.bind(var4)(var2, var1);
case 6:
            var3 = _closure1_slot11;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['icon'] = var5;
            var7 = _closure1_slot11;
            var5 = 13;
            var5 = var12[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var14 = 'text-md/medium';
            var5['variant'] = var14;
            var11 = var11.headerText;
            var5['style'] = var11;
            var11 = 14;
            var14 = var12[var11];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var12 = var12[var11];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.Nj0a3j;
            var12 = {};
            var20 = var19 == var17;
            var16 = undefined;
            if(var20) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var16 = var17.name;
case 14:
            if(!(var19 == var16)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var20 = var19 == var18;
            var17 = undefined;
            if(var20) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = var18.application;
            var19 = var19 == var18;
            var17 = undefined;
            if(var19) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var17 = var18.name;
case 18:
            var16 = var17;
case 16:
            var12['platformName'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var5['children'] = var12;
            var5 = var7.bind(var4)(var6, var5);
            var1['label'] = var5;
            var7 = _closure1_slot11;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 15;
            var5 = var13[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var12 = var13[var11];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var13[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.N86XcP;
            var11 = var12.bind(var14)(var11);
            var5['aria-label'] = var11;
            var5['onPress'] = var10;
            var5['disabled'] = var9;
            var10 = _closure1_slot11;
            var12 = _closure1_slot1;
            var8 = 9;
            var8 = var13[var8];
            var9 = var12.bind(var4)(var8);
            var8 = {};
            var11 = 16;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var8['source'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function BooleanConfigRule(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.fieldText;
            var5 = var1.metadataField;
            var _closure2_slot0 = var5;
            var8 = var1.existingPendingConfiguration;
            var _closure2_slot1 = var8;
            var2 = var1.platform;
            var _closure2_slot2 = var2;
            var2 = var1.onConfigurationChange;
            var _closure2_slot3 = var2;
            var7 = var1.locked;
            var2 = var1.applicationId;
            var _closure2_slot4 = var2;
            var1 = var1.operator;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var9 = null;
            if(!(var9 == var1)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = _closure1_slot8;
            var1 = var2.EQUAL;
case 21:
            _closure2_slot5 = var1;
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 17;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableSwitchRow;
            var1 = {};
            var1['label'] = var10;
            var10 = var9 == var8;
            var9 = undefined;
            if(var10) { _fun0002_ip = 9; continue _fun0002 }
case 23:
            var8 = var8.configuration;
            var9 = var8.value;
case 9:
            var8 = '1';
            var8 = var8 === var9;
            var1['value'] = var8;
            var1['disabled'] = var7;
            var6 = function onValueChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = null;
                    var1 = arg1;
                    var4 = null;
                    if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var1 = {};
                    var5 = _closure2_slot2;
                    var6 = var2 == var5;
                    var5 = undefined;
                    if(var6) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var6 = _closure2_slot2;
                    var5 = var6.type;
case 26:
                    if(!(var2 == var5)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure1_slot10;
case 28:
                    var1['connectionType'] = var5;
                    var5 = _closure2_slot4;
                    var1['applicationId'] = var5;
                    var5 = _closure2_slot0;
                    var1['connectionMetadataField'] = var5;
                    var3 = _closure2_slot5;
                    var1['operator'] = var3;
                    var3 = '1';
                    var1['value'] = var3;
                    var4 = var1;
case 24:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var7 = var2 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var6 = _closure2_slot1;
                    var5 = var6.index;
case 30:
                    var6 = var2 != var5;
                    var2 = -1;
                    if(!var6) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var2 = var5;
case 32:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var1['onValueChange'] = var6;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function NumericalConfigRule(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var17 = var1.fieldText;
            var14 = var1.fieldTextHook;
            var5 = var1.metadataField;
            var _closure2_slot0 = var5;
            var8 = var1.existingPendingConfiguration;
            var _closure2_slot1 = var8;
            var2 = var1.platform;
            var _closure2_slot2 = var2;
            var2 = var1.onConfigurationChange;
            var _closure2_slot3 = var2;
            var7 = var1.locked;
            var _closure2_slot4 = var7;
            var15 = var1.operator;
            var _closure2_slot5 = var15;
            var1 = var1.applicationId;
            var _closure2_slot6 = var1;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var2 = _closure1_slot14;
            var12 = var2.bind(var4)();
            var _closure2_slot7 = var12;
            var3 = null;
            var2 = var3 == var8;
            var9 = undefined;
            if(var2) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var9 = var8.index;
case 34:
            var10 = var3 != var9;
            var2 = -1;
            if(!var10) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var9;
case 36:
            _closure2_slot8 = var2;
            if(!(var3 == var15)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = _closure1_slot8;
            var15 = var2.GREATER_THAN;
case 38:
            _closure2_slot9 = var15;
            var10 = global;
            var13 = var10.Math;
            var11 = var13.round;
            var16 = var10.Number;
            var2 = var3 == var8;
            var18 = undefined;
            if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = var8.configuration;
            var9 = var3 == var2;
            var18 = undefined;
            if(var9) { _fun0004_ip = 40; continue _fun0004 }
case 42:
            var18 = var2.value;
case 40:
            var19 = var3 != var18;
            var2 = 0;
            var9 = 0;
            if(!var19) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var9 = var18;
case 43:
            var9 = var16.bind(var4)(var9);
            var9 = var11.bind(var13)(var9);
            var11 = _closure1_slot8;
            var11 = var11.GREATER_THAN;
            if(!(var15 !== var11)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var11 = _closure1_slot8;
            var11 = var11.LESS_THAN;
            var13 = var9;
            if(!(var15 === var11)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var16 = var10.Math;
            var15 = var16.max;
            var11 = 1;
            var11 = var9 - var11;
            var13 = var15.bind(var16)(var2, var11);
            _fun0004_ip = 47; continue _fun0004;
case 45:
            var15 = var10.Math;
            var11 = var15.max;
            var10 = 1;
            var9 = var9 + var10;
            var13 = var11.bind(var15)(var10, var9);
case 47:
            var11 = _closure1_slot4;
            var10 = var11.useState;
            var9 = var13.toString;
            var9 = var9.bind(var13)();
            var11 = var10.bind(var11)(var9);
            var10 = _closure1_slot3;
            var9 = 2;
            var9 = var10.bind(var4)(var11, var9);
            var23 = var9[var2];
            _closure2_slot10 = var23;
            var2 = 1;
            var2 = var9[var2];
            _closure2_slot11 = var2;
            var22 = function onInputValueChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var2 = global;
                    var7 = var2.Math;
                    var5 = var7.round;
                    var4 = var2.Number;
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var4 = var5.bind(var7)(var4);
                    var7 = _closure2_slot9;
                    var5 = _closure1_slot8;
                    var5 = var5.GREATER_THAN;
                    if(!(var7 !== var5)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var10 = _closure2_slot9;
                    var5 = _closure1_slot8;
                    var5 = var5.LESS_THAN;
                    var7 = var4;
                    if(!(var10 === var5)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var12 = var2.Math;
                    var11 = var12.max;
                    var10 = 1;
                    var5 = var4 + var10;
                    var7 = var11.bind(var12)(var10, var5);
                    _fun0005_ip = 55; continue _fun0005;
case 53:
                    var10 = var2.Math;
                    var5 = var10.max;
                    var2 = 1;
                    var4 = var4 - var2;
                    var2 = 0;
                    var7 = var5.bind(var10)(var2, var4);
case 55:
                    var5 = _closure2_slot3;
                    var4 = {};
                    var2 = _closure2_slot2;
                    var10 = var9 == var2;
                    var2 = undefined;
                    if(var10) { _fun0005_ip = 57; continue _fun0005 }
case 10:
                    var10 = _closure2_slot2;
                    var2 = var10.type;
case 57:
                    if(!(var9 == var2)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var2 = _closure1_slot10;
case 58:
                    var4['connectionType'] = var2;
                    var2 = _closure2_slot6;
                    var4['applicationId'] = var2;
                    var2 = _closure2_slot0;
                    var4['connectionMetadataField'] = var2;
                    var2 = _closure2_slot9;
                    var4['operator'] = var2;
                    var2 = var7.toString;
                    var2 = var2.bind(var7)();
                    var4['value'] = var2;
                    var2 = _closure2_slot8;
                    var2 = var5.bind(var6)(var4, var2);
case 51:
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 49:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot12 = var22;
            var9 = var3 == var8;
            var2 = undefined;
            if(var9) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var2 = var8.configuration;
case 60:
            var8 = var3 != var2;
            if(!(var4 === var14)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var9 = undefined;
            if(!(var9 !== var17)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var10 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var11 = var12.appNumericalInputContainer;
            var2['style'] = var11;
            var19 = _closure1_slot11;
            var16 = _closure1_slot5;
            var13 = {};
            var11 = var12.numericalInputContainer;
            var13['style'] = var11;
            var21 = _closure1_slot11;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 19;
            var11 = var18[var11];
            var11 = var15.bind(var4)(var11);
            var20 = var11.TextInput;
            var11 = {};
            var24 = 'numeric';
            var11['keyboardType'] = var24;
            var24 = var12.appNumericalInput;
            var11['style'] = var24;
            var24 = !var7;
            var11['editable'] = var24;
            var11['value'] = var23;
            var11['onChangeText'] = var22;
            var11 = var21.bind(var4)(var20, var11, var5);
            var13['children'] = var11;
            var11 = '_numericalInputContainer';
            var13 = var19.bind(var4)(var16, var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var16 = _closure1_slot11;
            var13 = 13;
            var13 = var18[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {};
            var18 = 'text-md/normal';
            var13['variant'] = var18;
            var13['children'] = var17;
            var13 = var16.bind(var4)(var15, var13);
            var11[1] = var13;
            var2['children'] = var11;
            var9 = var10.bind(var4)(var3, var2);
            _fun0004_ip = 64; continue _fun0004;
case 62:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 18;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(var2) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var2 = var12.numericalInputContainer;
            _fun0004_ip = 68; continue _fun0004;
case 66:
            var2 = var12.numericalInputContainerIOS;
case 68:
            _closure2_slot13 = var2;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 14;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var11 = var2.intl;
            var10 = var11.format;
            var2 = {};
            var15 = function metadataHook() {
                var5 = _closure1_slot11;
                var4 = _closure1_slot5;
                var3 = {};
                var7 = _closure2_slot13;
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure2_slot7;
                var7 = var9.numericalInputContainerBase;
                var6[1] = var7;
                var3['style'] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 19;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var7 = var6.TextInput;
                var6 = {};
                var10 = 'numeric';
                var6['keyboardType'] = var10;
                var9 = var9.numericalInput;
                var6['style'] = var9;
                var9 = _closure2_slot4;
                var9 = !var9;
                var6['editable'] = var9;
                var9 = _closure2_slot10;
                var6['value'] = var9;
                var9 = _closure2_slot12;
                var6['onChangeText'] = var9;
                var1 = _closure2_slot0;
                var1 = var8.bind(var2)(var7, var6, var1);
                var3['children'] = var1;
                var1 = '_numericalInputContainer';
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var2['metadataHook'] = var15;
            var11 = var10.bind(var11)(var14, var2);
            var10 = _closure1_slot11;
            var2 = 13;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var13 = 'text-md/normal';
            var2['variant'] = var13;
            var12 = var12.metadataRowText;
            var2['style'] = var12;
            var2['children'] = var11;
            var9 = var10.bind(var4)(var3, var2);
case 64:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableSwitchRow;
            var1 = {};
            var1['label'] = var9;
            var1['value'] = var8;
            var1['disabled'] = var7;
            var6 = function onValueChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = null;
                    var1 = arg1;
                    var4 = null;
                    if(!var1) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                    var1 = _closure2_slot5;
                    if(!(var2 == var1)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                    var1 = _closure1_slot8;
                    var3 = var1.GREATER_THAN;
                    _fun0006_ip = 73; continue _fun0006;
case 71:
                    var3 = _closure2_slot5;
case 73:
                    var1 = global;
                    var9 = var1.Math;
                    var8 = var9.round;
                    var10 = var1.Number;
                    var5 = _closure2_slot10;
                    var7 = undefined;
                    var5 = var10.bind(var7)(var5);
                    var9 = var8.bind(var9)(var5);
                    var5 = _closure1_slot8;
                    var5 = var5.GREATER_THAN;
                    if(!(var3 !== var5)) { _fun0006_ip = 35; continue _fun0006 }
case 74:
                    var5 = _closure1_slot8;
                    var10 = var5.LESS_THAN;
                    var5 = var9;
                    if(!(var3 === var10)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                    var13 = var1.Math;
                    var12 = var13.max;
                    var11 = 1;
                    var10 = var9 + var11;
                    var5 = var12.bind(var13)(var11, var10);
                    _fun0006_ip = 75; continue _fun0006;
case 35:
                    var11 = var1.Math;
                    var10 = var11.max;
                    var1 = 1;
                    var9 = var9 - var1;
                    var1 = 0;
                    var5 = var10.bind(var11)(var1, var9);
case 75:
                    var1 = {};
                    var9 = _closure2_slot2;
                    var9 = var2 == var9;
                    var7 = undefined;
                    if(var9) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var9 = _closure2_slot2;
                    var7 = var9.type;
case 77:
                    if(!(var2 == var7)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                    var7 = _closure1_slot10;
case 79:
                    var1['connectionType'] = var7;
                    var7 = _closure2_slot6;
                    var1['applicationId'] = var7;
                    var6 = _closure2_slot0;
                    var1['connectionMetadataField'] = var6;
                    var1['operator'] = var3;
                    var3 = var5.toString;
                    var3 = var3.bind(var5)();
                    var1['value'] = var3;
                    var4 = var1;
case 69:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var7 = var2 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var6 = _closure2_slot1;
                    var5 = var6.index;
case 81:
                    var6 = var2 != var5;
                    var2 = -1;
                    if(!var6) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                    var2 = var5;
case 83:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var1['onValueChange'] = var6;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function BlueskyMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 20;
        var1 = var16[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.BLUESKY;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var8 = _closure1_slot17;
        var5 = {};
        var15 = _closure1_slot0;
        var13 = 14;
        var7 = var16[var13];
        var7 = var15.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ/;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var17 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var17.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var8, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17./w/EYk;
        var6['fieldTextHook'] = var17;
        var17 = _closure1_slot7;
        var17 = var17.BLUESKY_FOLLOWERS_COUNT;
        var6['metadataField'] = var17;
        var18 = var14.get;
        var17 = _closure1_slot7;
        var17 = var17.BLUESKY_FOLLOWERS_COUNT;
        var17 = var18.bind(var14)(var17);
        var6['existingPendingConfiguration'] = var17;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var13 = var16[var13];
        var13 = var15.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.5I4mVS;
        var6['fieldTextHook'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.BLUESKY_STATUSES_COUNT;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.BLUESKY_STATUSES_COUNT;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function SteamMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 20;
        var1 = var16[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.STEAM;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var8 = _closure1_slot17;
        var5 = {};
        var15 = _closure1_slot0;
        var13 = 14;
        var7 = var16[var13];
        var7 = var15.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ/;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var17 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var17.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var8, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.zVJxqj;
        var6['fieldTextHook'] = var17;
        var17 = _closure1_slot7;
        var17 = var17.STEAM_GAME_COUNT;
        var6['metadataField'] = var17;
        var18 = var14.get;
        var17 = _closure1_slot7;
        var17 = var17.STEAM_GAME_COUNT;
        var17 = var18.bind(var14)(var17);
        var6['existingPendingConfiguration'] = var17;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.ZCNdD/;
        var6['fieldTextHook'] = var17;
        var17 = _closure1_slot7;
        var17 = var17.STEAM_ITEM_COUNT_DOTA2;
        var6['metadataField'] = var17;
        var18 = var14.get;
        var17 = _closure1_slot7;
        var17 = var17.STEAM_ITEM_COUNT_DOTA2;
        var17 = var18.bind(var14)(var17);
        var6['existingPendingConfiguration'] = var17;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[2] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var13 = var16[var13];
        var13 = var15.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.MCHnK+;
        var6['fieldTextHook'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.STEAM_ITEM_COUNT_TF2;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.STEAM_ITEM_COUNT_TF2;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function TwitterMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 20;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.TWITTER;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var8 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var7 = var18[var13];
        var7 = var17.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ/;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var15 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var15.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var8, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15./w/EYk;
        var6['fieldTextHook'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.TWITTER_FOLLOWERS_COUNT;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.TWITTER_FOLLOWERS_COUNT;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.+NFH7k;
        var6['fieldTextHook'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.TWITTER_STATUSES_COUNT;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.TWITTER_STATUSES_COUNT;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[2] = var6;
        var8 = _closure1_slot11;
        var7 = _closure1_slot16;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.E2iT8K;
        var13 = var15.bind(var16)(var13);
        var6['fieldText'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.TWITTER_VERIFIED;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.TWITTER_VERIFIED;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function RedditMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 20;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.REDDIT;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var8 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var7 = var18[var13];
        var7 = var17.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ/;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var15 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var15.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var8, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.TLgZhv;
        var6['fieldTextHook'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.REDDIT_TOTAL_KARMA;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.REDDIT_TOTAL_KARMA;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[1] = var6;
        var7 = _closure1_slot11;
        var8 = _closure1_slot16;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var19 = var15.intl;
        var16 = var19.string;
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.0cKdka;
        var15 = var16.bind(var19)(var15);
        var6['fieldText'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.REDDIT_MOD;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.REDDIT_MOD;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[2] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.kCAN58;
        var13 = var15.bind(var16)(var13);
        var6['fieldText'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.REDDIT_GOLD;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.REDDIT_GOLD;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function PaypalMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 20;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.PAYPAL;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var7 = _closure1_slot11;
        var6 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var8 = var18[var13];
        var8 = var17.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.REyUZ/;
        var5['fieldTextHook'] = var8;
        var8 = _closure1_slot7;
        var8 = var8.CREATED_AT;
        var5['metadataField'] = var8;
        var15 = var14.get;
        var8 = _closure1_slot7;
        var8 = var8.CREATED_AT;
        var8 = var15.bind(var14)(var8);
        var5['existingPendingConfiguration'] = var8;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot11;
        var7 = _closure1_slot16;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.0JyE8I;
        var13 = var15.bind(var16)(var13);
        var6['fieldText'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.PAYPAL_VERIFIED;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.PAYPAL_VERIFIED;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function EbayMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 20;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.EBAY;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var8 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var7 = var18[var13];
        var7 = var17.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ/;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var15 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var15.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var8, var5);
        var5 = new Array(5);
        var5[0] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.oTFOe5;
        var6['fieldTextHook'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.v5a2+Q;
        var6['fieldTextHook'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[2] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.yYbR2r;
        var6['fieldTextHook'] = var15;
        var15 = _closure1_slot7;
        var15 = var15.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
        var6['metadataField'] = var15;
        var16 = var14.get;
        var15 = _closure1_slot7;
        var15 = var15.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
        var15 = var16.bind(var14)(var15);
        var6['existingPendingConfiguration'] = var15;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var15 = _closure1_slot8;
        var15 = var15.LESS_THAN;
        var6['operator'] = var15;
        var6 = var7.bind(var4)(var8, var6);
        var5[3] = var6;
        var8 = _closure1_slot11;
        var7 = _closure1_slot16;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.39wASN;
        var13 = var15.bind(var16)(var13);
        var6['fieldText'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.EBAY_TOP_RATED_SELLER;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.EBAY_TOP_RATED_SELLER;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[4] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function TikTokMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 20;
        var1 = var16[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.TIKTOK;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var7 = _closure1_slot11;
        var6 = _closure1_slot16;
        var5 = {};
        var15 = _closure1_slot0;
        var13 = 14;
        var8 = var16[var13];
        var8 = var15.bind(var4)(var8);
        var18 = var8.intl;
        var17 = var18.string;
        var8 = var16[var13];
        var8 = var15.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.E2iT8K;
        var8 = var17.bind(var18)(var8);
        var5['fieldText'] = var8;
        var8 = _closure1_slot7;
        var8 = var8.TIKTOK_VERIFIED;
        var5['metadataField'] = var8;
        var17 = var14.get;
        var8 = _closure1_slot7;
        var8 = var8.TIKTOK_VERIFIED;
        var8 = var17.bind(var14)(var8);
        var5['existingPendingConfiguration'] = var8;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var7 = _closure1_slot11;
        var8 = _closure1_slot17;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17./w/EYk;
        var6['fieldTextHook'] = var17;
        var17 = _closure1_slot7;
        var17 = var17.TIKTOK_FOLLOWER_COUNT;
        var6['metadataField'] = var17;
        var18 = var14.get;
        var17 = _closure1_slot7;
        var17 = var17.TIKTOK_FOLLOWER_COUNT;
        var17 = var18.bind(var14)(var17);
        var6['existingPendingConfiguration'] = var17;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.JHEsYw;
        var6['fieldTextHook'] = var17;
        var17 = _closure1_slot7;
        var17 = var17.TIKTOK_FOLLOWING_COUNT;
        var6['metadataField'] = var17;
        var18 = var14.get;
        var17 = _closure1_slot7;
        var17 = var17.TIKTOK_FOLLOWING_COUNT;
        var17 = var18.bind(var14)(var17);
        var6['existingPendingConfiguration'] = var17;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[2] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var13 = var16[var13];
        var13 = var15.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.tEFCYA;
        var6['fieldTextHook'] = var13;
        var13 = _closure1_slot7;
        var13 = var13.TIKTOK_LIKES_COUNT;
        var6['metadataField'] = var13;
        var13 = var14.get;
        var12 = _closure1_slot7;
        var12 = var12.TIKTOK_LIKES_COUNT;
        var12 = var13.bind(var14)(var12);
        var6['existingPendingConfiguration'] = var12;
        var6['platform'] = var11;
        var6['onConfigurationChange'] = var10;
        var6['locked'] = var9;
        var6 = var7.bind(var4)(var8, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function ApplicationMetadataRules(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.configMetadataMap;
            var _closure2_slot0 = var3;
            var3 = var1.onConfigurationChange;
            var _closure2_slot1 = var3;
            var3 = var1.locked;
            var _closure2_slot2 = var3;
            var3 = var1.integration;
            var _closure2_slot3 = var3;
            var5 = null;
            var4 = var5 == var3;
            var1 = null;
            if(var4) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var4 = var3.role_connections_metadata;
            var4 = var5 == var4;
            var1 = null;
            if(var4) { _fun0007_ip = 85; continue _fun0007 }
case 87:
            var4 = var3.role_connections_metadata;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 88; continue _fun0008 }
case 27:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 90; continue _fun0008 }
case 92:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 93; continue _fun0008 }
case 94:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 93; continue _fun0008 }
case 95:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 96; continue _fun0008 }
case 97:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 96; continue _fun0008 }
case 53:
                    var3 = null;
                    return var3;
case 96:
                    var3 = _closure1_slot8;
                    var7 = var3.NOT_EQUAL;
                    _fun0008_ip = 78; continue _fun0008;
case 93:
                    var3 = _closure1_slot8;
                    var7 = var3.EQUAL;
                    _fun0008_ip = 78; continue _fun0008;
case 90:
                    var3 = _closure1_slot8;
                    var7 = var3.GREATER_THAN;
                    _fun0008_ip = 78; continue _fun0008;
case 88:
                    var3 = _closure1_slot8;
                    var7 = var3.LESS_THAN;
case 78:
                    var4 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 98; continue _fun0008 }
case 100:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 98; continue _fun0008 }
case 101:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 98; continue _fun0008 }
case 102:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 98; continue _fun0008 }
case 103:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 98; continue _fun0008 }
case 83:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 104; continue _fun0008 }
case 105:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 104; continue _fun0008 }
case 106:
                    var3 = undefined;
                    return var3;
case 104:
                    var8 = _closure1_slot11;
                    var6 = _closure1_slot16;
                    var5 = {};
                    var3 = var1.description;
                    var5['fieldText'] = var3;
                    var3 = var1.key;
                    var5['metadataField'] = var3;
                    var10 = _closure2_slot0;
                    var9 = var10.get;
                    var3 = var1.key;
                    var3 = var9.bind(var10)(var3);
                    var5['existingPendingConfiguration'] = var3;
                    var3 = null;
                    var5['platform'] = var3;
                    var9 = _closure2_slot1;
                    var5['onConfigurationChange'] = var9;
                    var9 = _closure2_slot2;
                    var5['locked'] = var9;
                    var5['operator'] = var7;
                    var4 = _closure2_slot3;
                    var9 = var4.application;
                    var10 = var3 == var9;
                    var4 = undefined;
                    var3 = undefined;
                    if(var10) { _fun0008_ip = 107; continue _fun0008 }
case 108:
                    var3 = var9.id;
case 107:
                    var5['applicationId'] = var3;
                    var3 = var1.key;
                    var3 = var8.bind(var4)(var6, var5, var3);
                    return var3;
case 98:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot17;
                    var3 = {};
                    var2 = var1.description;
                    var3['fieldText'] = var2;
                    var2 = var1.key;
                    var3['metadataField'] = var2;
                    var9 = _closure2_slot0;
                    var8 = var9.get;
                    var2 = var1.key;
                    var2 = var8.bind(var9)(var2);
                    var3['existingPendingConfiguration'] = var2;
                    var2 = null;
                    var3['platform'] = var2;
                    var8 = _closure2_slot1;
                    var3['onConfigurationChange'] = var8;
                    var8 = _closure2_slot2;
                    var3['locked'] = var8;
                    var3['operator'] = var7;
                    var6 = _closure2_slot3;
                    var7 = var6.application;
                    var8 = var2 == var7;
                    var2 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 109; continue _fun0008 }
case 110:
                    var6 = var7.id;
case 109:
                    var3['applicationId'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 85:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MetadataFields;
    var _closure1_slot7 = var7;
    var7 = var4.OperatorTypes;
    var _closure1_slot8 = var7;
    var7 = var4.MetadataItemTypes;
    var _closure1_slot9 = var7;
    var4 = var4.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = -2;
    var9['marginTop'] = var10;
    var4['numericalInputContainerIOS'] = var9;
    var9 = {};
    var10 = -4;
    var9['marginTop'] = var10;
    var4['numericalInputContainer'] = var9;
    var9 = {};
    var11 = 7;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['numericalInputContainerBase'] = var9;
    var9 = {'width': 54, 'height': 32, 'borderRadius': null, 'paddingHorizontal': 4, 'marginTop': 4294967292};
    var10 = 32;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['numericalInput'] = var9;
    var9 = {'width': 54, 'height': 32, 'backgroundColor': null, 'borderRadius': null, 'padding': 8, 'marginRight': 8};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['appNumericalInput'] = var9;
    var9 = {'flexDirection': 'row', 'marginRight': 22, 'alignItems': 'center'};
    var4['appNumericalInputContainer'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var11;
    var4['headerText'] = var9;
    var9 = {};
    var9['lineHeight'] = var10;
    var4['metadataRowText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditConnectionConfiguration(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var1 = var5.configurationItems;
            var3 = var1;
            var7 = var5.onConfigurationChange;
            var4 = var7;
            var _closure2_slot0 = var7;
            var17 = var5.locked;
            var15 = var5.integrations;
            var5 = undefined;
            var2 = undefined;
            var21 = undefined;
            var _closure2_slot1 = var5;
            var19 = undefined;
            var20 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var6 = undefined;
            var10 = undefined;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 21;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var21 = var7.bind(var5)();
            var7 = var1.length;
            var1 = 1;
            if(!(!(var7 < var1))) { _fun0009_ip = 111; continue _fun0009 }
case 112:
            var1 = var3;
            var12 = 0;
            var1 = var1[var12];
            var1 = var1.configuration;
            var7 = var1.applicationId;
            _closure2_slot1 = var7;
            var1 = null;
            var11 = var1 != var7;
            var8 = undefined;
            if(!var11) { _fun0009_ip = 113; continue _fun0009 }
case 114:
            var13 = var1 == var15;
            var11 = undefined;
            if(var13) { _fun0009_ip = 8; continue _fun0009 }
case 115:
            var14 = var15.find;
            var13 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0010_ip = 72; continue _fun0010 }
case 50:
                    var2 = var1.id;
case 72:
                    var1 = _closure2_slot1;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var11 = var14.bind(var15)(var13);
case 8:
            var8 = var11;
case 113:
            var19 = var8;
            if(!(var1 != var7)) { _fun0009_ip = 77; continue _fun0009 }
case 116:
            var7 = var19;
            if(!(var1 != var7)) { _fun0009_ip = 117; continue _fun0009 }
case 77:
            var20 = null;
case 118: // try_start_0
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 20;
            var7 = var11[var7];
            var11 = var8.bind(var5)(var7);
            var8 = var11.get;
            var7 = var3;
            var7 = var7[var12];
            var7 = var7.configuration;
            var7 = var7.connectionType;
            var20 = var8.bind(var11)(var7);
case 69: // try_end0
            _fun0009_ip = 43; continue _fun0009;
case 119: // catch_target0
            CatchBlockStart(arg_register=6);
case 43:
            var7 = global;
            var7 = var7.Map;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var24 = var8;
            var7 = new var24[var7](var23);
            var7 = var7 instanceof Object ? var7 : var8;
            _closure2_slot3 = var7;
            var11 = var3;
            var8 = var11.forEach;
            var3 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.configuration;
                    var1 = var1.connectionMetadataField;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                    var1 = var4.configuration;
                    var1 = var1.value;
                    var1 = var3 == var1;
                    if(!var1) { _fun0011_ip = 122; continue _fun0011 }
case 71:
                    var2 = var4.configuration;
                    var2 = var2.operator;
                    var1 = var3 == var2;
case 122:
                    if(!var1) { _fun0011_ip = 123; continue _fun0011 }
case 124:
                    var2 = var4.configuration;
                    var2 = var2.connectionMetadataField;
                    var1 = var3 == var2;
case 123:
                    if(!var1) { _fun0011_ip = 125; continue _fun0011 }
case 126:
                    _closure2_slot2 = var4;
                    _fun0011_ip = 125; continue _fun0011;
case 120:
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var1 = var4.configuration;
                    var1 = var1.connectionMetadataField;
                    var1 = var2.bind(var3)(var1, var4);
case 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var3);
            var3 = {};
            var3['configMetadataMap'] = var7;
            var3['onConfigurationChange'] = var4;
            var4 = var17;
            var3['locked'] = var4;
            var6 = var3;
            var10 = null;
            var3 = var20;
            var2 = var3;
            var4 = var1 == var3;
            var3 = undefined;
            if(var4) { _fun0009_ip = 127; continue _fun0009 }
case 128:
            var3 = var2.type;
case 127:
            var2 = _closure1_slot6;
            var2 = var2.STEAM;
            if(!(var2 !== var3)) { _fun0009_ip = 67; continue _fun0009 }
case 129:
            var2 = _closure1_slot6;
            var2 = var2.TWITTER;
            if(!(var2 !== var3)) { _fun0009_ip = 130; continue _fun0009 }
case 131:
            var2 = _closure1_slot6;
            var2 = var2.REDDIT;
            if(!(var2 !== var3)) { _fun0009_ip = 132; continue _fun0009 }
case 133:
            var2 = _closure1_slot6;
            var2 = var2.BLUESKY;
            if(!(var2 !== var3)) { _fun0009_ip = 134; continue _fun0009 }
case 135:
            var2 = _closure1_slot6;
            var2 = var2.PAYPAL;
            if(!(var2 !== var3)) { _fun0009_ip = 136; continue _fun0009 }
case 108:
            var2 = _closure1_slot6;
            var2 = var2.EBAY;
            if(!(var2 !== var3)) { _fun0009_ip = 137; continue _fun0009 }
case 138:
            var2 = _closure1_slot6;
            var2 = var2.TIKTOK;
            if(!(var2 !== var3)) { _fun0009_ip = 139; continue _fun0009 }
case 140:
            var4 = _closure1_slot11;
            var3 = _closure1_slot25;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var8 = var19;
            var7 = 'integration';
            var2[var7] = var8;
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 139:
            var4 = _closure1_slot11;
            var3 = _closure1_slot24;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 137:
            var4 = _closure1_slot11;
            var3 = _closure1_slot23;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 136:
            var4 = _closure1_slot11;
            var3 = _closure1_slot22;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 134:
            var4 = _closure1_slot11;
            var3 = _closure1_slot18;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 132:
            var4 = _closure1_slot11;
            var3 = _closure1_slot21;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 130:
            var4 = _closure1_slot11;
            var3 = _closure1_slot20;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var7 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 141; continue _fun0009;
case 67:
            var4 = _closure1_slot11;
            var3 = _closure1_slot19;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var6 = copyDataProperties(var23, var22);
            var10 = var4.bind(var5)(var3, var2);
case 141:
            var4 = _closure1_slot12;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 22;
            var2 = var11[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = 7;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_24;
            var2['spacing'] = var6;
            var13 = _closure1_slot11;
            var7 = 23;
            var6 = var11[var7];
            var6 = var8.bind(var5)(var6);
            var12 = var6.TableRowGroup;
            var6 = {};
            var16 = _closure1_slot11;
            var15 = _closure1_slot15;
            var14 = {};
            var14['theme'] = var21;
            var14['platform'] = var20;
            var14['integration'] = var19;
            var18 = function onRemove() {
                var4 = _closure2_slot0;
                var1 = _closure2_slot2;
                var3 = var1.index;
                var2 = undefined;
                var1 = null;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var14['onRemove'] = var18;
            var14['locked'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var6['children'] = var14;
            var12 = var13.bind(var5)(var12, var6);
            var6 = new Array(2);
            var6[0] = var12;
            var9 = _closure1_slot11;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 117:
            return var1;
case 111:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();