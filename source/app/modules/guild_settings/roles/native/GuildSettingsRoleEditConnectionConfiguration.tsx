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
            var3 = arg1;
            var16 = var3.platform;
            var1 = var3.integration;
            var2 = var3.applicationId;
            var12 = var3.onRemove;
            var10 = var3.locked;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var18 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = 9;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useGetOrFetchApplicationBatched;
            var15 = null;
            var7 = var15 == var1;
            var3 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.application;
case 2:
            var7 = var15 == var3;
            var3 = undefined;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var5 = var5.bind(var6)(var3);
            var6 = var15 == var1;
            var3 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1.application;
case 6:
            if(!(var15 == var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var15 == var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var15 != var16;
            var7 = undefined;
            var11 = undefined;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot12;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 10;
            var2 = var19[var2];
            var2 = var17.bind(var4)(var2);
            var3 = var2.Icon;
            var2 = {};
            var9 = 11;
            var9 = var19[var9];
            var14 = var17.bind(var4)(var9);
            var13 = var14.makeSource;
            var9 = 12;
            var9 = var19[var9];
            var17 = var17.bind(var4)(var9);
            var9 = var17.isThemeDark;
            var9 = var9.bind(var17)(var18);
            var17 = var16.icon;
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var17.lightPNG;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var9 = var17.darkPNG;
case 16:
            var9 = var13.bind(var14)(var9);
            var2['source'] = var9;
            var9 = true;
            var2['disableColor'] = var9;
            var7 = var6.bind(var4)(var3, var2);
            var11 = undefined;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            if(!(var4 !== var5)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = var15 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var5.bot;
case 19:
            var2 = var15 != var2;
            var3 = undefined;
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = _closure1_slot12;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 10;
            var2 = var17[var13];
            var2 = var14.bind(var4)(var2);
            var6 = var2.Avatar;
            var2 = {};
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.XSMALL;
            var2['size'] = var13;
            var13 = var5.bot;
            var2['user'] = var13;
            var2['guildId'] = var4;
            var3 = var9.bind(var4)(var6, var2);
case 21:
            var6 = var15 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var2 = var5.name;
case 23:
            var11 = var2;
            var7 = var3;
            _fun0001_ip = 12; continue _fun0001;
case 17:
            return var15;
case 8:
            var5 = _closure1_slot12;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 10;
            var2 = var13[var6];
            var2 = var9.bind(var4)(var2);
            var3 = var2.Avatar;
            var2 = {};
            var6 = var13[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AvatarSizes;
            var6 = var6.XSMALL;
            var2['size'] = var6;
            var9 = var15 == var1;
            var6 = undefined;
            if(var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = var1.application;
            var13 = var15 == var9;
            var6 = undefined;
            if(var13) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var6 = var9.bot;
case 25:
            var2['user'] = var6;
            var2['guildId'] = var4;
            var7 = var5.bind(var4)(var3, var2);
            var1 = var1.application;
            var11 = var1.name;
case 12:
            var3 = _closure1_slot12;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['icon'] = var7;
            var13 = 14;
            var7 = var5[var13];
            var7 = var6.bind(var4)(var7);
            var9 = var7.intl;
            var7 = var9.format;
            var5 = var5[var13];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.Nj0a3j;
            var5 = {};
            var17 = var15 == var16;
            var14 = undefined;
            if(var17) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var14 = var16.name;
case 28:
            if(!(var15 != var14)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var11 = var14;
case 30:
            var5['platformName'] = var11;
            var5 = var7.bind(var9)(var6, var5);
            var1['label'] = var5;
            var7 = _closure1_slot12;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var5 = var11[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var14 = var11[var13];
            var14 = var9.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var11[var13];
            var13 = var9.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.N86XcP;
            var13 = var14.bind(var15)(var13);
            var5['aria-label'] = var13;
            var5['onPress'] = var12;
            var5['disabled'] = var10;
            var10 = _closure1_slot12;
            var8 = 16;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.XSmallIcon;
            var8 = {};
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
            if(!(var9 == var1)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var2 = _closure1_slot8;
            var1 = var2.EQUAL;
case 32:
            _closure2_slot5 = var1;
            var3 = _closure1_slot12;
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
            if(var10) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var8 = var8.configuration;
            var9 = var8.value;
case 34:
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
                    if(!var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var1 = {};
                    var5 = _closure2_slot2;
                    var6 = var2 == var5;
                    var5 = undefined;
                    if(var6) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var6 = _closure2_slot2;
                    var5 = var6.type;
case 38:
                    if(!(var2 == var5)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var5 = _closure1_slot10;
case 40:
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
case 36:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var7 = var2 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var6 = _closure2_slot1;
                    var5 = var6.index;
case 42:
                    var6 = var2 != var5;
                    var2 = -1;
                    if(!var6) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var2 = var5;
case 44:
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
    var1 = function NumericalConfigRule(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var17 = var1.fieldText;
            var12 = var1.fieldTextHook;
            var5 = var1.metadataField;
            var _closure2_slot0 = var5;
            var8 = var1.existingPendingConfiguration;
            var _closure2_slot1 = var8;
            var2 = var1.platform;
            var _closure2_slot2 = var2;
            var2 = var1.onConfigurationChange;
            var _closure2_slot3 = var2;
            var7 = var1.locked;
            var10 = var1.operator;
            var1 = var1.applicationId;
            var _closure2_slot4 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var19 = function onInputValueChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var8 = arg1;
                    var3 = _closure2_slot10;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var8);
                    var3 = _closure2_slot1;
                    var6 = null;
                    var3 = var6 != var3;
                    if(!var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var4 = '';
                    var3 = var4 !== var8;
case 46:
                    if(!var3) { _fun0005_ip = 48; continue _fun0005 }
case 41:
                    var4 = global;
                    var7 = var4.Number;
                    var5 = var7.isFinite;
                    var4 = var4.Number;
                    var4 = var4.bind(var1)(var8);
                    var3 = var5.bind(var7)(var4);
case 48:
                    if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var4 = _closure2_slot3;
                    var3 = {};
                    var5 = _closure2_slot2;
                    var7 = var6 == var5;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var7 = _closure2_slot2;
                    var5 = var7.type;
case 51:
                    if(!(var6 == var5)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var5 = _closure1_slot10;
case 53:
                    var3['connectionType'] = var5;
                    var5 = _closure2_slot4;
                    var3['applicationId'] = var5;
                    var5 = _closure2_slot0;
                    var3['connectionMetadataField'] = var5;
                    var5 = _closure2_slot7;
                    var3['operator'] = var5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 18;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.storedValueFor;
                    var5 = _closure2_slot7;
                    var5 = var6.bind(var7)(var8, var5);
                    var3['value'] = var5;
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var1)(var3, var2);
case 49:
                    return var1;
                }
            };
            var _closure2_slot13 = var19;
            var2 = _closure1_slot15;
            var11 = var2.bind(var4)();
            var _closure2_slot5 = var11;
            var3 = null;
            var2 = var3 == var8;
            var9 = undefined;
            if(var2) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var9 = var8.index;
case 55:
            var13 = var3 != var9;
            var2 = -1;
            if(!var13) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var2 = var9;
case 57:
            _closure2_slot6 = var2;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var14 = 18;
            var2 = var2[var14];
            var9 = var9.bind(var4)(var2);
            var2 = var9.realizedOperatorFor;
            var13 = var2.bind(var9)(var10);
            _closure2_slot7 = var13;
            var2 = var3 == var8;
            var10 = undefined;
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var2 = var8.configuration;
            var9 = var3 == var2;
            var10 = undefined;
            if(var9) { _fun0004_ip = 59; continue _fun0004 }
case 61:
            var10 = var2.value;
case 59:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var9 = var9.bind(var4)(var2);
            var2 = var9.displayedValueFor;
            var9 = var2.bind(var9)(var10, var13);
            var2 = var9.toString;
            var9 = var2.bind(var9)();
            _closure2_slot8 = var9;
            var13 = _closure1_slot4;
            var2 = var13.useState;
            var14 = var2.bind(var13)(var9);
            var13 = _closure1_slot3;
            var2 = 2;
            var13 = var13.bind(var4)(var14, var2);
            var2 = 0;
            var20 = var13[var2];
            _closure2_slot9 = var20;
            var2 = 1;
            var2 = var13[var2];
            _closure2_slot10 = var2;
            var10 = var3 != var10;
            if(!var10) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var13 = '';
            var10 = var13 !== var20;
case 62:
            if(!var10) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var10 = var20 !== var9;
case 64:
            if(!var10) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var2 = var2.bind(var4)(var9);
case 66:
            var9 = var3 == var8;
            var2 = undefined;
            if(var9) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var2 = var8.configuration;
case 68:
            var8 = var3 != var2;
            var21 = var7;
            if(var21) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var21 = !var8;
case 70:
            _closure2_slot11 = var21;
            if(!(var4 === var12)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var9 = undefined;
            if(!(var9 !== var17)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var10 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var11.appNumericalInputContainer;
            var2['style'] = var13;
            var16 = _closure1_slot12;
            var15 = _closure1_slot5;
            var14 = {};
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 10;
            var13 = var22[var13];
            var13 = var18.bind(var4)(var13);
            var18 = var13.TextInput;
            var13 = {};
            var22 = 'number-pad';
            var13['keyboardType'] = var22;
            var23 = var11.appNumericalInput;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = var21;
            if(!var23) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var23 = var11.numericalInputDisabled;
case 76:
            var22[1] = var23;
            var13['style'] = var22;
            var21 = !var21;
            var13['editable'] = var21;
            var13['value'] = var20;
            var13['onChangeText'] = var19;
            var13 = var16.bind(var4)(var18, var13, var5);
            var14['children'] = var13;
            var13 = '_numericalInputContainer';
            var14 = var16.bind(var4)(var15, var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 20;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-md/semibold';
            var14['variant'] = var18;
            var18 = var11.appNumericalInputText;
            var14['style'] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var2['children'] = var13;
            var9 = var10.bind(var4)(var3, var2);
            _fun0004_ip = 74; continue _fun0004;
case 72:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 19;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(var2) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var2 = var11.numericalInputContainerAndroidInline;
            _fun0004_ip = 80; continue _fun0004;
case 78:
            var2 = var11.numericalInputContainerIOSInline;
case 80:
            _closure2_slot12 = var2;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.intl;
            var3 = var10.format;
            var2 = {};
            var13 = function metadataHook() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var7 = _closure2_slot12;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure2_slot5;
                    var7 = var9.numericalInputContainerBase;
                    var6[1] = var7;
                    var3['style'] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 10;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.TextInput;
                    var6 = {};
                    var10 = 'number-pad';
                    var6['keyboardType'] = var10;
                    var10 = var9.numericalInput;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = _closure2_slot11;
                    if(!var10) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var11 = _closure2_slot5;
                    var10 = var11.numericalInputDisabled;
case 81:
                    var9[1] = var10;
                    var6['style'] = var9;
                    var9 = _closure2_slot11;
                    var9 = !var9;
                    var6['editable'] = var9;
                    var9 = _closure2_slot9;
                    var6['value'] = var9;
                    var9 = _closure2_slot13;
                    var6['onChangeText'] = var9;
                    var9 = 8;
                    var6['hitSlop'] = var9;
                    var1 = _closure2_slot0;
                    var1 = var8.bind(var2)(var7, var6, var1);
                    var3['children'] = var1;
                    var1 = '_numericalInputContainer';
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var2['metadataHook'] = var13;
            var14 = var3.bind(var10)(var12, var2);
            var10 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var11 = var11.metadataRow;
            var2['style'] = var11;
            var11 = _closure1_slot4;
            var13 = var11.Children;
            var12 = var13.map;
            var11 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var4 = 'string';
                    var3 = typeof var2;
                    var1 = var2;
                    if(!(var4 === var3)) { _fun0007_ip = 53; continue _fun0007 }
case 83:
                    var6 = _closure1_slot12;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 20;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {};
                    var7 = 'text-md/semibold';
                    var3['variant'] = var7;
                    var7 = _closure2_slot5;
                    var7 = var7.metadataRowText;
                    var3['style'] = var7;
                    var3['children'] = var2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var8 = var2.concat;
                    var7 = 't-';
                    var2 = arg2;
                    var2 = var8.bind(var7)(var2);
                    var1 = var6.bind(var5)(var4, var3, var2);
case 53:
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var14, var11);
            var2['children'] = var11;
            var9 = var10.bind(var4)(var3, var2);
case 74:
            var3 = _closure1_slot12;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = '';
                    if(!(var1 === var2)) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                    var4 = _closure2_slot8;
                    _fun0008_ip = 86; continue _fun0008;
case 84:
                    var4 = _closure2_slot9;
case 86:
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4);
                    var2 = null;
                    var3 = arg1;
                    var9 = var4;
                    var4 = null;
                    if(!var3) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var3 = {};
                    var5 = _closure2_slot2;
                    var7 = var2 == var5;
                    var5 = undefined;
                    if(var7) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                    var7 = _closure2_slot2;
                    var5 = var7.type;
case 89:
                    if(!(var2 == var5)) { _fun0008_ip = 33; continue _fun0008 }
case 50:
                    var5 = _closure1_slot10;
case 33:
                    var3['connectionType'] = var5;
                    var5 = _closure2_slot4;
                    var3['applicationId'] = var5;
                    var5 = _closure2_slot0;
                    var3['connectionMetadataField'] = var5;
                    var5 = _closure2_slot7;
                    var3['operator'] = var5;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var8 = var7.bind(var1)(var5);
                    var7 = var8.storedValueFor;
                    var5 = _closure2_slot7;
                    var5 = var7.bind(var8)(var9, var5);
                    var3['value'] = var5;
                    var4 = var3;
case 87:
                    var3 = _closure2_slot3;
                    var5 = _closure2_slot1;
                    var7 = var2 == var5;
                    var5 = undefined;
                    if(var7) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    var6 = _closure2_slot1;
                    var5 = var6.index;
case 91:
                    var6 = var2 != var5;
                    var2 = -1;
                    if(!var6) { _fun0008_ip = 93; continue _fun0008 }
case 49:
                    var2 = var5;
case 93:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var1['onValueChange'] = var6;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function BlueskyMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 21;
        var1 = var16[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.BLUESKY;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var6 = _closure1_slot12;
        var8 = _closure1_slot18;
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
        var7 = _closure1_slot12;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17["/w/EYk"];
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
        var7 = _closure1_slot12;
        var6 = {};
        var13 = var16[var13];
        var13 = var15.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13["5I4mVS"];
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
    var _closure1_slot19 = var1;
    var1 = function SteamMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 21;
        var1 = var16[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.STEAM;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var6 = _closure1_slot12;
        var8 = _closure1_slot18;
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
        var7 = _closure1_slot12;
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
        var7 = _closure1_slot12;
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
        var7 = _closure1_slot12;
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
    var _closure1_slot20 = var1;
    var1 = function TwitterMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 21;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.TWITTER;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var6 = _closure1_slot12;
        var8 = _closure1_slot18;
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
        var7 = _closure1_slot12;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15["/w/EYk"];
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
        var7 = _closure1_slot12;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15["+NFH7k"];
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
        var8 = _closure1_slot12;
        var7 = _closure1_slot17;
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
    var _closure1_slot21 = var1;
    var1 = function RedditMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 21;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.REDDIT;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var6 = _closure1_slot12;
        var8 = _closure1_slot18;
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
        var7 = _closure1_slot12;
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
        var7 = _closure1_slot12;
        var8 = _closure1_slot17;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var19 = var15.intl;
        var16 = var19.string;
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15["0cKdka"];
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
        var7 = _closure1_slot12;
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
    var _closure1_slot22 = var1;
    var1 = function PaypalMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 21;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.PAYPAL;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var7 = _closure1_slot12;
        var6 = _closure1_slot18;
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
        var8 = _closure1_slot12;
        var7 = _closure1_slot17;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13["0JyE8I"];
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
    var _closure1_slot23 = var1;
    var1 = function EbayMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 21;
        var1 = var18[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.EBAY;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var6 = _closure1_slot12;
        var8 = _closure1_slot18;
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
        var7 = _closure1_slot12;
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
        var7 = _closure1_slot12;
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
        var7 = _closure1_slot12;
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
        var8 = _closure1_slot12;
        var7 = _closure1_slot17;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13["39wASN"];
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
    var _closure1_slot24 = var1;
    var1 = function TikTokMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 21;
        var1 = var16[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.TIKTOK;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var7 = _closure1_slot12;
        var6 = _closure1_slot17;
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
        var7 = _closure1_slot12;
        var8 = _closure1_slot18;
        var6 = {};
        var17 = var16[var13];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17["/w/EYk"];
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
        var7 = _closure1_slot12;
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
        var7 = _closure1_slot12;
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
    var _closure1_slot25 = var1;
    var1 = function ApplicationMetadataRules(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            if(var4) { _fun0009_ip = 3; continue _fun0009 }
case 94:
            var4 = var3.role_connections_metadata;
            var4 = var5 == var4;
            var1 = null;
            if(var4) { _fun0009_ip = 3; continue _fun0009 }
case 48:
            var4 = var3.role_connections_metadata;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 95; continue _fun0010 }
case 39:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 95; continue _fun0010 }
case 96:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 97; continue _fun0010 }
case 89:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 56; continue _fun0010 }
case 99:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 56; continue _fun0010 }
case 100:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 101; continue _fun0010 }
case 103:
                    var3 = null;
                    return var3;
case 101:
                    var3 = _closure1_slot8;
                    var7 = var3.NOT_EQUAL;
                    _fun0010_ip = 104; continue _fun0010;
case 56:
                    var3 = _closure1_slot8;
                    var7 = var3.EQUAL;
                    _fun0010_ip = 104; continue _fun0010;
case 97:
                    var3 = _closure1_slot8;
                    var7 = var3.GREATER_THAN;
                    _fun0010_ip = 104; continue _fun0010;
case 95:
                    var3 = _closure1_slot8;
                    var7 = var3.LESS_THAN;
case 104:
                    var4 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 105; continue _fun0010 }
case 107:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 105; continue _fun0010 }
case 108:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 105; continue _fun0010 }
case 16:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 105; continue _fun0010 }
case 109:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 105; continue _fun0010 }
case 110:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 111; continue _fun0010 }
case 112:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0010_ip = 111; continue _fun0010 }
case 113:
                    var3 = undefined;
                    return var3;
case 111:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot17;
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
                    if(var10) { _fun0010_ip = 114; continue _fun0010 }
case 115:
                    var3 = var9.id;
case 114:
                    var5['applicationId'] = var3;
                    var3 = var1.key;
                    var3 = var8.bind(var4)(var6, var5, var3);
                    return var3;
case 105:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot18;
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
                    if(var8) { _fun0010_ip = 116; continue _fun0010 }
case 117:
                    var6 = var7.id;
case 116:
                    var3['applicationId'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 3:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var13 = 1;
    var7 = var6[var13];
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
    var7 = var4.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot10 = var7;
    var4 = var4.GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = -2;
    var9['marginTop'] = var10;
    var4['numericalInputContainerIOSInline'] = var9;
    var9 = {};
    var11 = {};
    var10 = 10;
    var11['translateY'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var9['transform'] = var10;
    var4['numericalInputContainerAndroidInline'] = var9;
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
    var9 = {'width': 54, 'height': 32, 'borderRadius': null, 'paddingHorizontal': 4, 'paddingVertical': 0, 'marginTop': 4294967292};
    var10 = 32;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['numericalInput'] = var9;
    var9 = {'width': 54, 'height': 32, 'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 0, 'marginRight': 8};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['appNumericalInput'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['appNumericalInputContainer'] = var9;
    var9 = {};
    var9['flexShrink'] = var13;
    var4['appNumericalInputText'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var9['color'] = var11;
    var4['numericalInputDisabled'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center'};
    var4['metadataRow'] = var9;
    var9 = {};
    var9['lineHeight'] = var10;
    var4['metadataRowText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditConnectionConfiguration(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var5 = var4.configurationItems;
            var2 = var5;
            var _closure2_slot0 = var5;
            var10 = var4.onConfigurationChange;
            var3 = var10;
            var _closure2_slot1 = var10;
            var8 = var4.locked;
            var19 = var4.integrations;
            var4 = undefined;
            var1 = undefined;
            var _closure2_slot2 = var4;
            var14 = undefined;
            var15 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var6 = undefined;
            var7 = undefined;
            var10 = var5.length;
            var5 = 1;
            if(!(!(var10 < var5))) { _fun0011_ip = 118; continue _fun0011 }
case 119:
            var5 = var2;
            var17 = 0;
            var10 = var5[var17];
            var10 = var10.configuration;
            var12 = var10.connectionType;
            var5 = var5[var17];
            var5 = var5.configuration;
            var10 = var5.applicationId;
            _closure2_slot2 = var10;
            var11 = _closure1_slot11;
            var12 = var12 === var11;
            var11 = null;
            var16 = var11 == var10;
            var13 = undefined;
            if(var16) { _fun0011_ip = 120; continue _fun0011 }
case 11:
            var13 = undefined;
            if(var12) { _fun0011_ip = 120; continue _fun0011 }
case 35:
            var16 = var11 == var19;
            var13 = undefined;
            if(var16) { _fun0011_ip = 120; continue _fun0011 }
case 13:
            var18 = var19.find;
            var16 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0012_ip = 121; continue _fun0012 }
case 122:
                    var2 = var1.id;
case 121:
                    var1 = _closure2_slot2;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var13 = var18.bind(var19)(var16);
case 120:
            var14 = var13;
            if(!(var11 != var10)) { _fun0011_ip = 123; continue _fun0011 }
case 124:
            if(var12) { _fun0011_ip = 123; continue _fun0011 }
case 125:
            var13 = var14;
            if(!(var11 == var13)) { _fun0011_ip = 123; continue _fun0011 }
case 126:
            return var11;
case 123:
            if(var12) { _fun0011_ip = 127; continue _fun0011 }
case 106:
            var15 = null;
case 93: // try_start_0
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 21;
            var12 = var16[var12];
            var16 = var13.bind(var4)(var12);
            var13 = var16.get;
            var12 = var2;
            var12 = var12[var17];
            var12 = var12.configuration;
            var12 = var12.connectionType;
            var15 = var13.bind(var16)(var12);
case 16: // try_end0
            _fun0011_ip = 128; continue _fun0011;
case 129: // catch_target0
            CatchBlockStart(arg_register=11);
case 128:
            var12 = global;
            var12 = var12.Map;
            var13 = var12.prototype;
            var13 = Object.create(var13, {constructor: {value: var12}});
            var22 = var13;
            var12 = new var22[var12](var21);
            var12 = var12 instanceof Object ? var12 : var13;
            _closure2_slot4 = var12;
            var16 = var2;
            var13 = var16.forEach;
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.configuration;
                    var1 = var1.connectionMetadataField;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0013_ip = 130; continue _fun0013 }
case 84:
                    var1 = var4.configuration;
                    var1 = var1.value;
                    var1 = var3 == var1;
                    if(!var1) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                    var2 = var4.configuration;
                    var2 = var2.operator;
                    var1 = var3 == var2;
case 131:
                    if(!var1) { _fun0013_ip = 32; continue _fun0013 }
case 133:
                    _closure2_slot3 = var4;
                    _fun0013_ip = 32; continue _fun0013;
case 130:
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var1 = var4.configuration;
                    var1 = var1.connectionMetadataField;
                    var1 = var2.bind(var3)(var1, var4);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var13.bind(var16)(var2);
            var2 = {};
            var2['configMetadataMap'] = var12;
            var2['onConfigurationChange'] = var3;
            var3 = var8;
            var2['locked'] = var3;
            var6 = var2;
            var7 = null;
            var2 = var15;
            var1 = var2;
            var3 = var11 == var2;
            var2 = undefined;
            if(var3) { _fun0011_ip = 134; continue _fun0011 }
case 135:
            var2 = var1.type;
case 134:
            var1 = _closure1_slot6;
            var1 = var1.STEAM;
            if(!(var1 !== var2)) { _fun0011_ip = 136; continue _fun0011 }
case 137:
            var1 = _closure1_slot6;
            var1 = var1.TWITTER;
            if(!(var1 !== var2)) { _fun0011_ip = 138; continue _fun0011 }
case 139:
            var1 = _closure1_slot6;
            var1 = var1.REDDIT;
            if(!(var1 !== var2)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
            var1 = _closure1_slot6;
            var1 = var1.BLUESKY;
            if(!(var1 !== var2)) { _fun0011_ip = 142; continue _fun0011 }
case 143:
            var1 = _closure1_slot6;
            var1 = var1.PAYPAL;
            if(!(var1 !== var2)) { _fun0011_ip = 144; continue _fun0011 }
case 145:
            var1 = _closure1_slot6;
            var1 = var1.EBAY;
            if(!(var1 !== var2)) { _fun0011_ip = 146; continue _fun0011 }
case 147:
            var1 = _closure1_slot6;
            var1 = var1.TIKTOK;
            if(!(var1 !== var2)) { _fun0011_ip = 148; continue _fun0011 }
case 149:
            var3 = _closure1_slot12;
            var2 = _closure1_slot26;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var13 = var14;
            var12 = 'integration';
            var1[11] = var13;
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 148:
            var3 = _closure1_slot12;
            var2 = _closure1_slot25;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 146:
            var3 = _closure1_slot12;
            var2 = _closure1_slot24;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 144:
            var3 = _closure1_slot12;
            var2 = _closure1_slot23;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 142:
            var3 = _closure1_slot12;
            var2 = _closure1_slot19;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 140:
            var3 = _closure1_slot12;
            var2 = _closure1_slot22;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 138:
            var3 = _closure1_slot12;
            var2 = _closure1_slot21;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var12 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
            _fun0011_ip = 150; continue _fun0011;
case 136:
            var3 = _closure1_slot12;
            var2 = _closure1_slot20;
            var1 = {};
            var20 = var6;
            var21 = var1;
            var6 = copyDataProperties(var21, var20);
            var7 = var3.bind(var4)(var2, var1);
case 150:
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 22;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var6 = true;
            var1['hasIcons'] = var6;
            var13 = _closure1_slot12;
            var12 = _closure1_slot16;
            var6 = {};
            var6['platform'] = var15;
            var6['integration'] = var14;
            var14 = function onRemove() {
                var4 = _closure2_slot1;
                var1 = _closure2_slot3;
                var3 = var1.index;
                var2 = undefined;
                var1 = null;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var6['onRemove'] = var14;
            var14 = var8;
            var6['locked'] = var14;
            var12 = var13.bind(var4)(var12, var6);
            var6 = new Array(2);
            var6[0] = var12;
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 127:
            var3 = _closure1_slot12;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 22;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var6 = true;
            var1['hasIcons'] = var6;
            var7 = _closure1_slot12;
            var6 = _closure1_slot16;
            var5 = {};
            var5['platform'] = var11;
            var5['integration'] = var4;
            var5['applicationId'] = var10;
            var9 = function onRemove() {
                var4 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = 0;
                var1 = var2[var1];
                var3 = var1.index;
                var2 = undefined;
                var1 = null;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var5['onRemove'] = var9;
            var5['locked'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 118:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();