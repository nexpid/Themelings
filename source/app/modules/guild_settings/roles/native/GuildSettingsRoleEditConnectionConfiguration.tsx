// app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function Header(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var2) { _fun0001_ip = 61; continue _fun0001 }
 56:
            var1 = var18.application;
 61:
            if(!(var19 == var1)) { _fun0001_ip = 197; continue _fun0001 }
 68:
            var1 = var19 != var17;
            var5 = undefined;
            if(!var1) { _fun0001_ip = 295; continue _fun0001 }
 80:
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
            if(var6) { _fun0001_ip = 167; continue _fun0001 }
 159:
            var6 = var13.lightPNG;
            _fun0001_ip = 173; continue _fun0001;
 167:
            var6 = var13.darkPNG;
 173:
            var6 = var7.bind(var12)(var6);
            var1['source'] = var6;
            var6 = true;
            var1['disableColor'] = var6;
            var5 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 295; continue _fun0001;
 197:
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
            if(var7) { _fun0001_ip = 281; continue _fun0001 }
 261:
            var7 = var18.application;
            var12 = var19 == var7;
            var6 = undefined;
            if(var12) { _fun0001_ip = 281; continue _fun0001 }
 275:
            var6 = var7.bot;
 281:
            var1['user'] = var6;
            var1['guildId'] = var4;
            var5 = var3.bind(var4)(var2, var1);
 295:
            var3 = _closure1_slot11;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var1['leading'] = var5;
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
            var13 = var12.Nj0a3t;
            var12 = {};
            var20 = var19 == var17;
            var16 = undefined;
            if(var20) { _fun0001_ip = 433; continue _fun0001 }
 428:
            var16 = var17.name;
 433:
            if(!(var19 == var16)) { _fun0001_ip = 468; continue _fun0001 }
 437:
            var20 = var19 == var18;
            var17 = undefined;
            if(var20) { _fun0001_ip = 465; continue _fun0001 }
 446:
            var18 = var18.application;
            var19 = var19 == var18;
            var17 = undefined;
            if(var19) { _fun0001_ip = 465; continue _fun0001 }
 460:
            var17 = var18.name;
 465:
            var16 = var17;
 468:
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
            var11 = var11.N86XcH;
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
 0:
            var1 = arg1;
            var17 = var1.fieldText;
            var5 = var1.metadataField;
            var _closure2_slot0 = var5;
            var11 = var1.existingPendingConfiguration;
            var _closure2_slot1 = var11;
            var2 = var1.platform;
            var _closure2_slot2 = var2;
            var2 = var1.onConfigurationChange;
            var _closure2_slot3 = var2;
            var10 = var1.locked;
            var2 = var1.applicationId;
            var _closure2_slot4 = var2;
            var1 = var1.operator;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot14;
            var14 = var2.bind(var4)();
            var12 = null;
            if(!(var12 == var1)) { _fun0002_ip = 105; continue _fun0002 }
 95:
            var2 = _closure1_slot8;
            var1 = var2.EQUAL;
 105:
            _closure2_slot5 = var1;
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 12;
            var1 = var13[var6];
            var1 = var7.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var14 = var14.metadataRow;
            var1['style'] = var14;
            var16 = _closure1_slot11;
            var14 = 13;
            var14 = var13[var14];
            var14 = var7.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-md/normal';
            var14['variant'] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var1['label'] = var14;
            var14 = 'switch';
            var1['accessibilityRole'] = var14;
            var8 = _closure1_slot11;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormSwitch;
            var6 = {};
            var13 = var12 == var11;
            var12 = undefined;
            if(var13) { _fun0002_ip = 247; continue _fun0002 }
 236:
            var11 = var11.configuration;
            var12 = var11.value;
 247:
            var11 = '1';
            var11 = var11 === var12;
            var6['value'] = var11;
            var6['disabled'] = var10;
            var10 = true;
            var6['renderIosBackground'] = var10;
            var9 = function onValueChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = null;
                    var1 = arg1;
                    var4 = null;
                    if(!var1) { _fun0003_ip = 92; continue _fun0003 }
 10:
                    var1 = {};
                    var5 = _closure2_slot2;
                    var6 = var2 == var5;
                    var5 = undefined;
                    if(var6) { _fun0003_ip = 37; continue _fun0003 }
 28:
                    var6 = _closure2_slot2;
                    var5 = var6.type;
 37:
                    if(!(var2 == var5)) { _fun0003_ip = 48; continue _fun0003 }
 41:
                    var5 = _closure1_slot10;
 48:
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
 92:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var7 = var2 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 123; continue _fun0003 }
 114:
                    var6 = _closure2_slot1;
                    var5 = var6.index;
 123:
                    var6 = var2 != var5;
                    var2 = -1;
                    if(!var6) { _fun0003_ip = 139; continue _fun0003 }
 136:
                    var2 = var5;
 139:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var6['onValueChange'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function NumericalConfigRule(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var17 = var1.fieldText;
            var12 = var1.fieldTextHook;
            var5 = var1.metadataField;
            var _closure2_slot0 = var5;
            var3 = var1.existingPendingConfiguration;
            var _closure2_slot1 = var3;
            var2 = var1.platform;
            var _closure2_slot2 = var2;
            var2 = var1.onConfigurationChange;
            var _closure2_slot3 = var2;
            var10 = var1.locked;
            var _closure2_slot4 = var10;
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
            var1 = _closure1_slot14;
            var14 = var1.bind(var4)();
            var _closure2_slot7 = var14;
            var2 = null;
            var1 = var2 == var3;
            var6 = undefined;
            if(var1) { _fun0004_ip = 143; continue _fun0004 }
 138:
            var6 = var3.index;
 143:
            var7 = var2 != var6;
            var1 = -1;
            if(!var7) { _fun0004_ip = 159; continue _fun0004 }
 156:
            var1 = var6;
 159:
            _closure2_slot8 = var1;
            if(!(var2 == var15)) { _fun0004_ip = 177; continue _fun0004 }
 167:
            var1 = _closure1_slot8;
            var15 = var1.GREATER_THAN;
 177:
            _closure2_slot9 = var15;
            var7 = global;
            var13 = var7.Math;
            var11 = var13.round;
            var16 = var7.Number;
            var1 = var2 == var3;
            var18 = undefined;
            if(var1) { _fun0004_ip = 229; continue _fun0004 }
 209:
            var1 = var3.configuration;
            var6 = var2 == var1;
            var18 = undefined;
            if(var6) { _fun0004_ip = 229; continue _fun0004 }
 224:
            var18 = var1.value;
 229:
            var19 = var2 != var18;
            var1 = 0;
            var6 = 0;
            if(!var19) { _fun0004_ip = 243; continue _fun0004 }
 240:
            var6 = var18;
 243:
            var6 = var16.bind(var4)(var6);
            var6 = var11.bind(var13)(var6);
            var11 = _closure1_slot8;
            var11 = var11.GREATER_THAN;
            if(!(var15 !== var11)) { _fun0004_ip = 310; continue _fun0004 }
 267:
            var11 = _closure1_slot8;
            var11 = var11.LESS_THAN;
            var13 = var6;
            if(!(var15 === var11)) { _fun0004_ip = 334; continue _fun0004 }
 284:
            var16 = var7.Math;
            var15 = var16.max;
            var11 = 1;
            var11 = var6 - var11;
            var13 = var15.bind(var16)(var1, var11);
            _fun0004_ip = 334; continue _fun0004;
 310:
            var15 = var7.Math;
            var11 = var15.max;
            var7 = 1;
            var6 = var6 + var7;
            var13 = var11.bind(var15)(var7, var6);
 334:
            var11 = _closure1_slot4;
            var7 = var11.useState;
            var6 = var13.toString;
            var6 = var6.bind(var13)();
            var11 = var7.bind(var11)(var6);
            var7 = _closure1_slot3;
            var6 = 2;
            var6 = var7.bind(var4)(var11, var6);
            var23 = var6[var1];
            _closure2_slot10 = var23;
            var1 = 1;
            var1 = var6[var1];
            _closure2_slot11 = var1;
            var22 = function onInputValueChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0005_ip = 256; continue _fun0005 }
 19:
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0005_ip = 245; continue _fun0005 }
 30:
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
                    if(!(var7 !== var5)) { _fun0005_ip = 129; continue _fun0005 }
 82:
                    var10 = _closure2_slot9;
                    var5 = _closure1_slot8;
                    var5 = var5.LESS_THAN;
                    var7 = var4;
                    if(!(var10 === var5)) { _fun0005_ip = 155; continue _fun0005 }
 103:
                    var12 = var2.Math;
                    var11 = var12.max;
                    var10 = 1;
                    var5 = var4 + var10;
                    var7 = var11.bind(var12)(var10, var5);
                    _fun0005_ip = 155; continue _fun0005;
 129:
                    var10 = var2.Math;
                    var5 = var10.max;
                    var2 = 1;
                    var4 = var4 - var2;
                    var2 = 0;
                    var7 = var5.bind(var10)(var2, var4);
 155:
                    var5 = _closure2_slot3;
                    var4 = {};
                    var2 = _closure2_slot2;
                    var10 = var9 == var2;
                    var2 = undefined;
                    if(var10) { _fun0005_ip = 183; continue _fun0005 }
 174:
                    var10 = _closure2_slot2;
                    var2 = var10.type;
 183:
                    if(!(var9 == var2)) { _fun0005_ip = 191; continue _fun0005 }
 187:
                    var2 = _closure1_slot10;
 191:
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
 245:
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 256:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot12 = var22;
            var6 = var2 == var3;
            var1 = undefined;
            if(var6) { _fun0004_ip = 415; continue _fun0004 }
 409:
            var1 = var3.configuration;
 415:
            var11 = var2 != var1;
            if(!(var4 === var12)) { _fun0004_ip = 637; continue _fun0004 }
 426:
            var13 = undefined;
            if(!(var13 !== var17)) { _fun0004_ip = 793; continue _fun0004 }
 435:
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var14.appNumericalInputContainer;
            var1['style'] = var6;
            var19 = _closure1_slot11;
            var16 = _closure1_slot5;
            var7 = {};
            var6 = var14.numericalInputContainer;
            var7['style'] = var6;
            var21 = _closure1_slot11;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 18;
            var6 = var18[var6];
            var6 = var15.bind(var4)(var6);
            var20 = var6.TextInput;
            var6 = {};
            var24 = 'numeric';
            var6['keyboardType'] = var24;
            var24 = var14.appNumericalInput;
            var6['style'] = var24;
            var24 = !var10;
            var6['editable'] = var24;
            var6['value'] = var23;
            var6['onChangeText'] = var22;
            var6 = var21.bind(var4)(var20, var6, var5);
            var7['children'] = var6;
            var6 = '_numericalInputContainer';
            var7 = var19.bind(var4)(var16, var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var16 = _closure1_slot11;
            var7 = 13;
            var7 = var18[var7];
            var7 = var15.bind(var4)(var7);
            var15 = var7.Text;
            var7 = {};
            var18 = 'text-md/normal';
            var7['variant'] = var18;
            var7['children'] = var17;
            var7 = var16.bind(var4)(var15, var7);
            var6[1] = var7;
            var1['children'] = var6;
            var13 = var3.bind(var4)(var2, var1);
            _fun0004_ip = 793; continue _fun0004;
 637:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            if(var1) { _fun0004_ip = 678; continue _fun0004 }
 670:
            var1 = var14.numericalInputContainer;
            _fun0004_ip = 684; continue _fun0004;
 678:
            var1 = var14.numericalInputContainerIOS;
 684:
            _closure2_slot13 = var1;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 14;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.intl;
            var3 = var6.format;
            var1 = {};
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
                var2 = 18;
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
            var1['metadataHook'] = var15;
            var6 = var3.bind(var6)(var12, var1);
            var3 = _closure1_slot11;
            var1 = 13;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 'text-md/normal';
            var1['variant'] = var7;
            var7 = var14.metadataRowText;
            var1['style'] = var7;
            var1['children'] = var6;
            var13 = var3.bind(var4)(var2, var1);
 793:
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 12;
            var1 = var12[var6];
            var1 = var7.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var14 = var14.metadataRow;
            var1['style'] = var14;
            var1['label'] = var13;
            var13 = 'switch';
            var1['accessibilityRole'] = var13;
            var8 = _closure1_slot11;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormSwitch;
            var6 = {};
            var6['value'] = var11;
            var6['disabled'] = var10;
            var10 = true;
            var6['renderIosBackground'] = var10;
            var9 = function onValueChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = null;
                    var1 = arg1;
                    var4 = null;
                    if(!var1) { _fun0006_ip = 239; continue _fun0006 }
 13:
                    var1 = _closure2_slot5;
                    if(!(var2 == var1)) { _fun0006_ip = 39; continue _fun0006 }
 24:
                    var1 = _closure1_slot8;
                    var3 = var1.GREATER_THAN;
                    _fun0006_ip = 43; continue _fun0006;
 39:
                    var3 = _closure2_slot5;
 43:
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
                    if(!(var3 !== var5)) { _fun0006_ip = 138; continue _fun0006 }
 95:
                    var5 = _closure1_slot8;
                    var10 = var5.LESS_THAN;
                    var5 = var9;
                    if(!(var3 === var10)) { _fun0006_ip = 164; continue _fun0006 }
 112:
                    var13 = var1.Math;
                    var12 = var13.max;
                    var11 = 1;
                    var10 = var9 + var11;
                    var5 = var12.bind(var13)(var11, var10);
                    _fun0006_ip = 164; continue _fun0006;
 138:
                    var11 = var1.Math;
                    var10 = var11.max;
                    var1 = 1;
                    var9 = var9 - var1;
                    var1 = 0;
                    var5 = var10.bind(var11)(var1, var9);
 164:
                    var1 = {};
                    var9 = _closure2_slot2;
                    var9 = var2 == var9;
                    var7 = undefined;
                    if(var9) { _fun0006_ip = 188; continue _fun0006 }
 179:
                    var9 = _closure2_slot2;
                    var7 = var9.type;
 188:
                    if(!(var2 == var7)) { _fun0006_ip = 196; continue _fun0006 }
 192:
                    var7 = _closure1_slot10;
 196:
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
 239:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var7 = var2 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0006_ip = 270; continue _fun0006 }
 261:
                    var6 = _closure2_slot1;
                    var5 = var6.index;
 270:
                    var6 = var2 != var5;
                    var2 = -1;
                    if(!var6) { _fun0006_ip = 286; continue _fun0006 }
 283:
                    var2 = var5;
 286:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var6['onValueChange'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function SteamMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var1 = _closure1_slot14;
        var4 = undefined;
        var18 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 19;
        var1 = var16[var1];
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
        var7 = var7.REyUZ2;
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
        var5 = new Array(7);
        var5[0] = var6;
        var19 = _closure1_slot11;
        var6 = 12;
        var7 = var16[var6];
        var7 = var15.bind(var4)(var7);
        var17 = var7.FormDivider;
        var7 = {};
        var20 = var18.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var17, var7);
        var5[1] = var7;
        var17 = _closure1_slot11;
        var7 = {};
        var19 = var16[var13];
        var19 = var15.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.zVJxqq;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.STEAM_GAME_COUNT;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.STEAM_GAME_COUNT;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var17.bind(var4)(var8, var7);
        var5[2] = var7;
        var19 = _closure1_slot11;
        var7 = var16[var6];
        var7 = var15.bind(var4)(var7);
        var17 = var7.FormDivider;
        var7 = {};
        var20 = var18.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var17, var7);
        var5[3] = var7;
        var17 = _closure1_slot11;
        var7 = {};
        var19 = var16[var13];
        var19 = var15.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.ZCNdDw;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.STEAM_ITEM_COUNT_DOTA2;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.STEAM_ITEM_COUNT_DOTA2;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var17.bind(var4)(var8, var7);
        var5[4] = var7;
        var17 = _closure1_slot11;
        var6 = var16[var6];
        var6 = var15.bind(var4)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var18 = var18.divider;
        var6['style'] = var18;
        var6 = var17.bind(var4)(var7, var6);
        var5[5] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var13 = var16[var13];
        var13 = var15.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.MCHnKy;
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
        var5[6] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function TwitterMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var1 = _closure1_slot14;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 19;
        var1 = var18[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.TWITTER;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var16 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var7 = var18[var13];
        var7 = var17.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ2;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var8 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var8.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var16, var5);
        var5 = new Array(7);
        var5[0] = var6;
        var19 = _closure1_slot11;
        var6 = 12;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var20 = var15.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot11;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19./w/EYm;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.TWITTER_FOLLOWERS_COUNT;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.TWITTER_FOLLOWERS_COUNT;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var8.bind(var4)(var16, var7);
        var5[2] = var7;
        var19 = _closure1_slot11;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var20 = var15.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var8, var7);
        var5[3] = var7;
        var8 = _closure1_slot11;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.+NFH7u;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.TWITTER_STATUSES_COUNT;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.TWITTER_STATUSES_COUNT;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var8.bind(var4)(var16, var7);
        var5[4] = var7;
        var8 = _closure1_slot11;
        var6 = var18[var6];
        var6 = var17.bind(var4)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var15 = var15.divider;
        var6['style'] = var15;
        var6 = var8.bind(var4)(var7, var6);
        var5[5] = var6;
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
        var13 = var13.E2iT8P;
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
        var5[6] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function RedditMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var1 = _closure1_slot14;
        var4 = undefined;
        var16 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 19;
        var1 = var18[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.REDDIT;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var15 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var7 = var18[var13];
        var7 = var17.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ2;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var8 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var8.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var15, var5);
        var5 = new Array(7);
        var5[0] = var6;
        var19 = _closure1_slot11;
        var6 = 12;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var20 = var16.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot11;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.TLgZho;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.REDDIT_TOTAL_KARMA;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.REDDIT_TOTAL_KARMA;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var8.bind(var4)(var15, var7);
        var5[2] = var7;
        var15 = _closure1_slot11;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var19 = var16.divider;
        var7['style'] = var19;
        var7 = var15.bind(var4)(var8, var7);
        var5[3] = var7;
        var15 = _closure1_slot11;
        var8 = _closure1_slot16;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.0cKdkZ;
        var19 = var20.bind(var21)(var19);
        var7['fieldText'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.REDDIT_MOD;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.REDDIT_MOD;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var15.bind(var4)(var8, var7);
        var5[4] = var7;
        var15 = _closure1_slot11;
        var6 = var18[var6];
        var6 = var17.bind(var4)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var16 = var16.divider;
        var6['style'] = var16;
        var6 = var15.bind(var4)(var7, var6);
        var5[5] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var15 = var18[var13];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.kCAN5+;
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
        var5[6] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function PaypalMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var1 = _closure1_slot14;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 19;
        var1 = var18[var1];
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
        var8 = var8.REyUZ2;
        var5['fieldTextHook'] = var8;
        var8 = _closure1_slot7;
        var8 = var8.CREATED_AT;
        var5['metadataField'] = var8;
        var16 = var14.get;
        var8 = _closure1_slot7;
        var8 = var8.CREATED_AT;
        var8 = var16.bind(var14)(var8);
        var5['existingPendingConfiguration'] = var8;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var8 = _closure1_slot11;
        var6 = 12;
        var6 = var18[var6];
        var6 = var17.bind(var4)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var15 = var15.divider;
        var6['style'] = var15;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
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
        var13 = var13.0JyE8P;
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
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function EbayMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var1 = _closure1_slot14;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 19;
        var1 = var18[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.get;
        var1 = _closure1_slot6;
        var1 = var1.EBAY;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = _closure1_slot11;
        var16 = _closure1_slot17;
        var5 = {};
        var17 = _closure1_slot0;
        var13 = 14;
        var7 = var18[var13];
        var7 = var17.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.REyUZ2;
        var5['fieldTextHook'] = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var5['metadataField'] = var7;
        var8 = var14.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var8.bind(var14)(var7);
        var5['existingPendingConfiguration'] = var7;
        var5['platform'] = var11;
        var5['onConfigurationChange'] = var10;
        var5['locked'] = var9;
        var6 = var6.bind(var4)(var16, var5);
        var5 = new Array(9);
        var5[0] = var6;
        var19 = _closure1_slot11;
        var6 = 12;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var20 = var15.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot11;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.oTFOe3;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var8.bind(var4)(var16, var7);
        var5[2] = var7;
        var19 = _closure1_slot11;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var20 = var15.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var8, var7);
        var5[3] = var7;
        var8 = _closure1_slot11;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.v5a2+f;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var7 = var8.bind(var4)(var16, var7);
        var5[4] = var7;
        var19 = _closure1_slot11;
        var7 = var18[var6];
        var7 = var17.bind(var4)(var7);
        var8 = var7.FormDivider;
        var7 = {};
        var20 = var15.divider;
        var7['style'] = var20;
        var7 = var19.bind(var4)(var8, var7);
        var5[5] = var7;
        var8 = _closure1_slot11;
        var7 = {};
        var19 = var18[var13];
        var19 = var17.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.yYbR2t;
        var7['fieldTextHook'] = var19;
        var19 = _closure1_slot7;
        var19 = var19.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
        var7['metadataField'] = var19;
        var20 = var14.get;
        var19 = _closure1_slot7;
        var19 = var19.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
        var19 = var20.bind(var14)(var19);
        var7['existingPendingConfiguration'] = var19;
        var7['platform'] = var11;
        var7['onConfigurationChange'] = var10;
        var7['locked'] = var9;
        var19 = _closure1_slot8;
        var19 = var19.LESS_THAN;
        var7['operator'] = var19;
        var7 = var8.bind(var4)(var16, var7);
        var5[6] = var7;
        var8 = _closure1_slot11;
        var6 = var18[var6];
        var6 = var17.bind(var4)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var15 = var15.divider;
        var6['style'] = var15;
        var6 = var8.bind(var4)(var7, var6);
        var5[7] = var6;
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
        var13 = var13.39wASE;
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
        var5[8] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function TikTokMetadataRules(arg1) {
        var1 = arg1;
        var14 = var1.configMetadataMap;
        var10 = var1.onConfigurationChange;
        var9 = var1.locked;
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 19;
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
        var8 = var8.E2iT8P;
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
        var17 = var17./w/EYm;
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
        var17 = var17.JHEsY2;
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
        var13 = var13.tEFCYG;
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
    var _closure1_slot23 = var1;
    var1 = function ApplicationMetadataRules(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(var4) { _fun0007_ip = 94; continue _fun0007 }
 56:
            var4 = var3.role_connections_metadata;
            var4 = var5 == var4;
            var1 = null;
            if(var4) { _fun0007_ip = 94; continue _fun0007 }
 71:
            var4 = var3.role_connections_metadata;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 169; continue _fun0008 }
 28:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 169; continue _fun0008 }
 45:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 157; continue _fun0008 }
 59:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 157; continue _fun0008 }
 73:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 145; continue _fun0008 }
 87:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 145; continue _fun0008 }
 101:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 133; continue _fun0008 }
 115:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 133; continue _fun0008 }
 129:
                    var3 = null;
                    return var3;
 133:
                    var3 = _closure1_slot8;
                    var7 = var3.NOT_EQUAL;
                    _fun0008_ip = 179; continue _fun0008;
 145:
                    var3 = _closure1_slot8;
                    var7 = var3.EQUAL;
                    _fun0008_ip = 179; continue _fun0008;
 157:
                    var3 = _closure1_slot8;
                    var7 = var3.GREATER_THAN;
                    _fun0008_ip = 179; continue _fun0008;
 169:
                    var3 = _closure1_slot8;
                    var7 = var3.LESS_THAN;
 179:
                    var4 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 448; continue _fun0008 }
 201:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 448; continue _fun0008 }
 218:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 448; continue _fun0008 }
 235:
                    var3 = _closure1_slot9;
                    var3 = var3.INTEGER_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 448; continue _fun0008 }
 252:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_LESS_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 448; continue _fun0008 }
 269:
                    var3 = _closure1_slot9;
                    var3 = var3.DATETIME_GREATER_THAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 448; continue _fun0008 }
 286:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 318; continue _fun0008 }
 300:
                    var3 = _closure1_slot9;
                    var3 = var3.BOOLEAN_NOT_EQUAL;
                    if(!(var3 !== var4)) { _fun0008_ip = 318; continue _fun0008 }
 314:
                    var3 = undefined;
                    return var3;
 318:
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
                    if(var10) { _fun0008_ip = 430; continue _fun0008 }
 425:
                    var3 = var9.id;
 430:
                    var5['applicationId'] = var3;
                    var3 = var1.key;
                    var3 = var8.bind(var4)(var6, var5, var3);
                    return var3;
 448:
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
                    if(var8) { _fun0008_ip = 560; continue _fun0008 }
 555:
                    var6 = var7.id;
 560:
                    var3['applicationId'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 94:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var4 = native4;
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
    var10 = 12;
    var9['marginHorizontal'] = var10;
    var11 = 7;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 16;
    var9['marginHorizontal'] = var10;
    var4['divider'] = var9;
    var9 = {};
    var10 = -2;
    var9['marginTop'] = var10;
    var4['numericalInputContainerIOS'] = var9;
    var9 = {};
    var10 = -4;
    var9['marginTop'] = var10;
    var4['numericalInputContainer'] = var9;
    var9 = {};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
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
    var13 = var13.BACKGROUND_TERTIARY;
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
    var11 = var11.HEADER_PRIMARY;
    var9['color'] = var11;
    var4['headerText'] = var9;
    var9 = {'marginTop': 4, 'marginBottom': 4};
    var4['metadataRow'] = var9;
    var9 = {};
    var9['lineHeight'] = var10;
    var4['metadataRowText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditConnectionConfiguration(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var1 = var5.configurationItems;
            var3 = var1;
            var8 = var5.onConfigurationChange;
            var4 = var8;
            var _closure2_slot0 = var8;
            var11 = var5.locked;
            var21 = var5.integrations;
            var5 = undefined;
            var2 = undefined;
            var12 = undefined;
            var16 = undefined;
            var _closure2_slot1 = var5;
            var14 = undefined;
            var15 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var6 = undefined;
            var7 = undefined;
            var8 = _closure1_slot14;
            var12 = var8.bind(var5)();
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 20;
            var8 = var17[var8];
            var8 = var10.bind(var5)(var8);
            var16 = var8.bind(var5)();
            var8 = var1.length;
            var1 = 1;
            if(!(!(var8 < var1))) { _fun0009_ip = 818; continue _fun0009 }
 117:
            var1 = var3;
            var18 = 0;
            var1 = var1[var18];
            var1 = var1.configuration;
            var8 = var1.applicationId;
            _closure2_slot1 = var8;
            var1 = null;
            var17 = var1 != var8;
            var10 = undefined;
            if(!var17) { _fun0009_ip = 181; continue _fun0009 }
 152:
            var19 = var1 == var21;
            var17 = undefined;
            if(var19) { _fun0009_ip = 178; continue _fun0009 }
 161:
            var20 = var21.find;
            var19 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0010_ip = 24; continue _fun0010 }
 19:
                    var2 = var1.id;
 24:
                    var1 = _closure2_slot1;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var17 = var20.bind(var21)(var19);
 178:
            var10 = var17;
 181:
            var14 = var10;
            if(!(var1 != var8)) { _fun0009_ip = 198; continue _fun0009 }
 188:
            var8 = var14;
            if(!(var1 != var8)) { _fun0009_ip = 816; continue _fun0009 }
 198:
            var15 = null;
 200: // try_start_0
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 19;
            var8 = var17[var8];
            var17 = var10.bind(var5)(var8);
            var10 = var17.get;
            var8 = var3;
            var8 = var8[var18];
            var8 = var8.configuration;
            var8 = var8.connectionType;
            var15 = var10.bind(var17)(var8);
 249: // try_end0
            _fun0009_ip = 253; continue _fun0009;
 251: // catch_target0
            CatchBlockStart(arg_register=7);
 253:
            var8 = global;
            var8 = var8.Map;
            var10 = var8.prototype;
            var10 = Object.create(var10, {constructor: {value: var8}});
            var24 = var10;
            var8 = new var24[var8](var23);
            var8 = var8 instanceof Object ? var8 : var10;
            _closure2_slot3 = var8;
            var17 = var3;
            var10 = var17.forEach;
            var3 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = arg1;
                    var1 = var4.configuration;
                    var1 = var1.connectionMetadataField;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0011_ip = 86; continue _fun0011 }
 21:
                    var1 = var4.configuration;
                    var1 = var1.value;
                    var1 = var3 == var1;
                    if(!var1) { _fun0011_ip = 55; continue _fun0011 }
 39:
                    var2 = var4.configuration;
                    var2 = var2.operator;
                    var1 = var3 == var2;
 55:
                    if(!var1) { _fun0011_ip = 74; continue _fun0011 }
 58:
                    var2 = var4.configuration;
                    var2 = var2.connectionMetadataField;
                    var1 = var3 == var2;
 74:
                    if(!var1) { _fun0011_ip = 116; continue _fun0011 }
 77:
                    _closure2_slot2 = var4;
                    _fun0011_ip = 116; continue _fun0011;
 86:
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var1 = var4.configuration;
                    var1 = var1.connectionMetadataField;
                    var1 = var2.bind(var3)(var1, var4);
 116:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var17)(var3);
            var3 = {};
            var3['configMetadataMap'] = var8;
            var3['onConfigurationChange'] = var4;
            var4 = var11;
            var3['locked'] = var4;
            var6 = var3;
            var7 = null;
            var3 = var15;
            var2 = var3;
            var4 = var1 == var3;
            var3 = undefined;
            if(var4) { _fun0009_ip = 350; continue _fun0009 }
 345:
            var3 = var2.type;
 350:
            var2 = _closure1_slot6;
            var2 = var2.STEAM;
            if(!(var2 !== var3)) { _fun0009_ip = 632; continue _fun0009 }
 367:
            var2 = _closure1_slot6;
            var2 = var2.TWITTER;
            if(!(var2 !== var3)) { _fun0009_ip = 604; continue _fun0009 }
 384:
            var2 = _closure1_slot6;
            var2 = var2.REDDIT;
            if(!(var2 !== var3)) { _fun0009_ip = 576; continue _fun0009 }
 401:
            var2 = _closure1_slot6;
            var2 = var2.PAYPAL;
            if(!(var2 !== var3)) { _fun0009_ip = 548; continue _fun0009 }
 418:
            var2 = _closure1_slot6;
            var2 = var2.EBAY;
            if(!(var2 !== var3)) { _fun0009_ip = 520; continue _fun0009 }
 432:
            var2 = _closure1_slot6;
            var2 = var2.TIKTOK;
            if(!(var2 !== var3)) { _fun0009_ip = 489; continue _fun0009 }
 446:
            var4 = _closure1_slot11;
            var3 = _closure1_slot24;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var8 = copyDataProperties(var23, var22);
            var10 = var14;
            var8 = 'integration';
            var2[var8] = var10;
            var7 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 658; continue _fun0009;
 489:
            var4 = _closure1_slot11;
            var3 = _closure1_slot23;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var8 = copyDataProperties(var23, var22);
            var7 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 658; continue _fun0009;
 520:
            var4 = _closure1_slot11;
            var3 = _closure1_slot22;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var8 = copyDataProperties(var23, var22);
            var7 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 658; continue _fun0009;
 548:
            var4 = _closure1_slot11;
            var3 = _closure1_slot21;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var8 = copyDataProperties(var23, var22);
            var7 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 658; continue _fun0009;
 576:
            var4 = _closure1_slot11;
            var3 = _closure1_slot20;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var8 = copyDataProperties(var23, var22);
            var7 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 658; continue _fun0009;
 604:
            var4 = _closure1_slot11;
            var3 = _closure1_slot19;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var8 = copyDataProperties(var23, var22);
            var7 = var4.bind(var5)(var3, var2);
            _fun0009_ip = 658; continue _fun0009;
 632:
            var4 = _closure1_slot11;
            var3 = _closure1_slot18;
            var2 = {};
            var22 = var6;
            var23 = var2;
            var6 = copyDataProperties(var23, var22);
            var7 = var4.bind(var5)(var3, var2);
 658:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var12;
            var6 = var6.container;
            var2['style'] = var6;
            var10 = _closure1_slot11;
            var8 = _closure1_slot15;
            var6 = {};
            var6['theme'] = var16;
            var6['platform'] = var15;
            var6['integration'] = var14;
            var13 = function onRemove() {
                var4 = _closure2_slot0;
                var1 = _closure2_slot2;
                var3 = var1.index;
                var2 = undefined;
                var1 = null;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var6['onRemove'] = var13;
            var6['locked'] = var11;
            var8 = var10.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var10 = var7;
            var10 = var1 != var10;
            var8 = var10;
            if(!var10) { _fun0009_ip = 796; continue _fun0009 }
 748:
            var11 = _closure1_slot11;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 12;
            var9 = var13[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.FormDivider;
            var9 = {};
            var12 = var12.divider;
            var9['style'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 796:
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 816:
            return var1;
 818:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();