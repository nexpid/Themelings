// app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function convertConfigArrayWithOperator(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var2 = var2.ConnectionConfigurationRuleOperator;
            var3 = var2.AND;
            var2 = arg2;
            if(!(var2 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.values;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var6 = var5.bind(var6)(var1);
            var5 = var6.groupBy;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = var1.connectionType;
                var4 = var1.applicationId;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ':';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var3 = var4.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var3 = new Array(0);
            var10 = var3;
            var9 = var4;
            var8 = 0;
            var2 = arraySpread(var10, var9, var8);
            var2 = new Array(1);
            var2[0] = var3;
            _fun0004_ip = 41; continue _fun0004;
case 39:
            var2 = new Array(0);
case 41:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function HeaderSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var21 = var1.clearConnections;
            var20 = var1.locked;
            var15 = var1.hasConnections;
            var5 = var1.hasMembers;
            var1 = _closure1_slot13;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var6 = null;
            if(!var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var8 = _closure1_slot11;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = var12.warningContainer;
            var5['style'] = var9;
            var11 = _closure1_slot10;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 11;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var10 = var9.CircleErrorIcon;
            var9 = {};
            var14 = _closure1_slot1;
            var13 = 8;
            var13 = var22[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            var13 = var13.STATUS_WARNING;
            var9['color'] = var13;
            var13 = 'sm';
            var9['size'] = var13;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var13 = _closure1_slot10;
            var10 = 12;
            var10 = var22[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var14 = 'text-xs/medium';
            var10['variant'] = var14;
            var14 = var12.warningText;
            var10['style'] = var14;
            var14 = 13;
            var16 = var22[var14];
            var16 = var19.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var14 = var22[var14];
            var14 = var19.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["2aFeef"];
            var14 = var16.bind(var18)(var14);
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 42:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var24 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 14;
            var6 = var18[var6];
            var6 = var24.bind(var4)(var6);
            var7 = var6.Stack;
            var6 = {};
            var11 = _closure1_slot11;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var12.headerTitleContainer;
            var9['style'] = var12;
            var16 = _closure1_slot10;
            var19 = 12;
            var12 = var18[var19];
            var12 = var24.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {};
            var13 = 'text-md/semibold';
            var12['variant'] = var13;
            var13 = 13;
            var22 = var18[var13];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var18 = var18[var13];
            var18 = var24.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.nMir27;
            var18 = var22.bind(var23)(var18);
            var12['children'] = var18;
            var14 = var16.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var14 = undefined;
            if(!var15) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var18 = _closure1_slot10;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 15;
            var15 = var22[var15];
            var15 = var25.bind(var4)(var15);
            var16 = var15.PressableOpacity;
            var15 = {};
            var23 = 8;
            var15['hitSlop'] = var23;
            var15['onPress'] = var21;
            var15['disabled'] = var20;
            var21 = _closure1_slot10;
            var19 = var22[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'text-feedback-critical'};
            var23 = var22[var13];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var13];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.ntW1cc;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var15['children'] = var19;
            var14 = var18.bind(var4)(var16, var15);
case 44:
            var12[1] = var14;
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot10;
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 16;
            var10 = var20[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.TextWithIOSLinkWorkaround;
            var10 = {};
            var15 = 'text-sm/medium';
            var10['variant'] = var15;
            var15 = var20[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var20[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.q5f7tK;
            var13 = {};
            var19 = _closure1_slot1;
            var18 = 17;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.getArticleURL;
            var17 = _closure1_slot7;
            var17 = var17.CONNECTION_DETAILS_ADMIN;
            var17 = var18.bind(var19)(var17);
            var13['helpdeskArticleUrl'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function AndOrRadios(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var9 = var1.locked;
            var6 = var1.currentOperator;
            var3 = var1.roleConnectionConfigurations;
            var _closure2_slot0 = var3;
            var1 = var1.setPendingRoleConfigurations;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot16;
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var11 = 9;
            var1 = var12[var11];
            var4 = undefined;
            var1 = var17.bind(var4)(var1);
            var1 = var1.ConnectionConfigurationRuleOperator;
            var1 = var1.OR;
            var13 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot11;
            var1 = 18;
            var1 = var12[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.TableRadioGroup;
            var1 = {};
            var14 = 13;
            var8 = var12[var14];
            var8 = var17.bind(var4)(var8);
            var15 = var8.intl;
            var10 = var15.string;
            var8 = var12[var14];
            var8 = var17.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Xs7PHX;
            var8 = var10.bind(var15)(var8);
            var1['title'] = var8;
            var1['value'] = var6;
            var5 = function onChange(arg1) {
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['onChange'] = var5;
            var5 = false;
            var1['hasIcons'] = var5;
            var10 = _closure1_slot10;
            var6 = 19;
            var5 = var12[var6];
            var5 = var17.bind(var4)(var5);
            var8 = var5.TableRadioRow;
            var5 = {};
            var15 = var12[var11];
            var15 = var17.bind(var4)(var15);
            var15 = var15.ConnectionConfigurationRuleOperator;
            var15 = var15.OR;
            var5['value'] = var15;
            var15 = var12[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var12[var14];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.W3iY58;
            var12 = var15.bind(var16)(var12);
            var5['label'] = var12;
            var12 = var9;
            if(var12) { _fun0006_ip = 46; continue _fun0006 }
case 25:
            var15 = var13.length;
            var13 = 2;
            var12 = var15 < var13;
case 46:
            var5['disabled'] = var12;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = var10[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.TableRadioRow;
            var6 = {};
            var11 = var10[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.ConnectionConfigurationRuleOperator;
            var11 = var11.AND;
            var6['value'] = var11;
            var11 = var10[var14];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.gHXS9A;
            var10 = var11.bind(var12)(var10);
            var6['label'] = var10;
            var6['disabled'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function renderRoleConnectionConfigurations(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var1 = arg5;
            var _closure2_slot3 = var1;
            var1 = function handleConfigurationChange(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var9 = arg1;
                    var8 = arg2;
                    var6 = new Array(0);
                    var5 = _closure1_slot14;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var5 = var7.bind(var1)();
                    var3 = var5.done;
                    if(var3) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var12 = var5.value;
                    var10 = var6.push;
                    var3 = {};
                    var13 = var3;
                    var11 = copyDataProperties(var13, var12);
                    var3 = var10.bind(var6)(var3);
                    var10 = var7.bind(var1)();
                    var3 = var10.done;
                    var5 = var10;
                    if(!var3) { _fun0008_ip = 48; continue _fun0008 }
case 47:
                    var7 = null;
                    if(!(var7 != var9)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var3 = -1;
                    if(!(var3 !== var8)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var5 = 0;
                    var3 = var6;
                    if(!(var8 >= var5)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var6[var8] = var9;
                    var3 = var6;
                    _fun0008_ip = 53; continue _fun0008;
case 51:
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var9);
                    var3 = var6;
                    _fun0008_ip = 53; continue _fun0008;
case 49:
                    var5 = _closure2_slot0;
                    var5 = var5[var8];
                    var _closure3_slot0 = var5;
                    if(!(var7 !== var5)) { _fun0008_ip = 55; continue _fun0008 }
case 41:
                    var9 = var5.connectionMetadataField;
                    if(!(var7 == var9)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var9 = var5.operator;
                    if(!(var7 == var9)) { _fun0008_ip = 55; continue _fun0008 }
case 17:
                    var5 = var5.value;
                    if(!(var7 != var5)) { _fun0008_ip = 57; continue _fun0008 }
case 55:
                    var7 = var6.splice;
                    var5 = 1;
                    var5 = var7.bind(var6)(var8, var5);
                    var3 = var6;
                    _fun0008_ip = 53; continue _fun0008;
case 57:
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = arg1;
                            var1 = _closure3_slot0;
                            var4 = var1.applicationId;
                            var1 = null;
                            if(!(var1 != var4)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                            var4 = var3.connectionType;
                            var1 = _closure3_slot0;
                            var1 = var1.connectionType;
                            var1 = var4 !== var1;
                            if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                            var5 = var3.applicationId;
                            var4 = _closure3_slot0;
                            var4 = var4.applicationId;
                            var1 = var5 !== var4;
case 60:
                            _fun0009_ip = 47; continue _fun0009;
case 58:
                            var3 = var3.connectionType;
                            var2 = _closure3_slot0;
                            var2 = var2.connectionType;
                            var1 = var3 !== var2;
case 47:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var4);
case 53:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var _closure2_slot5 = var1;
            var6 = global;
            var1 = var6.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var21 = var2;
            var1 = new var21[var1](var20);
            var9 = var1 instanceof Object ? var1 : var2;
            var _closure2_slot4 = var9;
            var2 = var14.forEach;
            var1 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var5 = arg2;
                    var7 = var4.connectionType;
                    var6 = var4.applicationId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ':';
                    var3 = var3.bind(var2)(var7, var1, var6);
                    var6 = _closure2_slot4;
                    var1 = var6.has;
                    var1 = var1.bind(var6)(var3);
                    var2 = _closure2_slot4;
                    if(var1) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var6 = var2.set;
                    var7 = {};
                    var7['index'] = var5;
                    var7['configuration'] = var4;
                    var1 = new Array(1);
                    var1[0] = var7;
                    var1 = var6.bind(var2)(var3, var1);
                    _fun0010_ip = 64; continue _fun0010;
case 62:
                    var1 = var2.get;
                    var3 = var1.bind(var2)(var3);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var2 = var3.push;
                    var1 = {};
                    var1['index'] = var5;
                    var1['configuration'] = var4;
                    var1 = var2.bind(var3)(var1);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var14)(var1);
            var2 = _closure1_slot14;
            var1 = var9.values;
            var1 = var1.bind(var9)();
            var4 = undefined;
            var13 = var2.bind(var4)(var1);
            var2 = var13.bind(var4)();
            var1 = var2.done;
            var12 = 0;
            var11 = 'connectionMetadataField';
            var10 = 'operator';
            var8 = 'value';
            var3 = 1;
            if(var1) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var16 = var2.value;
            var15 = var16.some;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.configuration;
                    var1 = var2.connectionMetadataField;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var4 = var2.operator;
                    var1 = var3 == var4;
case 68:
                    if(!var1) { _fun0011_ip = 2; continue _fun0011 }
case 70:
                    var2 = var2.value;
                    var1 = var3 == var2;
case 2:
                    return var1;
                }
            };
            var1 = var15.bind(var16)(var1);
            if(var1) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var17 = {};
            var1 = var16[var12];
            var19 = var1.configuration;
            var20 = var17;
            var1 = copyDataProperties(var20, var19);
            var17[10] = var4;
            var17[9] = var4;
            var17[7] = var4;
            var1 = var14.push;
            var18 = var1.bind(var14)(var17);
            var15 = var16.push;
            var1 = {};
            var18 = var18 - var3;
            var1['index'] = var18;
            var1['configuration'] = var17;
            var1 = var15.bind(var16)(var1);
case 71:
            var15 = var13.bind(var4)();
            var1 = var15.done;
            var2 = var15;
            if(!var1) { _fun0007_ip = 67; continue _fun0007 }
case 66:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 14;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var8 = _closure1_slot1;
            var7 = 8;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.space;
            var7 = var7.PX_24;
            var1['spacing'] = var7;
            var8 = var6.Array;
            var7 = var8.from;
            var6 = var9.values;
            var6 = var6.bind(var9)();
            var7 = var7.bind(var8)(var6);
            var6 = var7.map;
            var5 = function(arg1) {
                var7 = arg1;
                var5 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var2['configurationItems'] = var7;
                var6 = _closure2_slot5;
                var2['onConfigurationChange'] = var6;
                var6 = _closure2_slot2;
                var2['locked'] = var6;
                var1 = _closure2_slot3;
                var2['integrations'] = var1;
                var1 = 0;
                var6 = var7[var1];
                var6 = var6.configuration;
                var8 = var6.connectionType;
                var6 = ':';
                var6 = var8 + var6;
                var1 = var7[var1];
                var1 = var1.index;
                var1 = var6 + var1;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function AddConnectionButton(arg1) {
        var1 = arg1;
        var2 = var1.handleConnectionTapped;
        var _closure2_slot0 = var2;
        var2 = var1.excludedConnections;
        var _closure2_slot1 = var2;
        var2 = var1.excludedApplications;
        var _closure2_slot2 = var2;
        var2 = var1.roleId;
        var _closure2_slot3 = var2;
        var2 = var1.integrations;
        var _closure2_slot4 = var2;
        var2 = var1.gameApplicationIds;
        var _closure2_slot5 = var2;
        var6 = var1.locked;
        var4 = _closure1_slot10;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 21;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {};
        var9 = 13;
        var11 = var10[var9];
        var11 = var8.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var9 = var10[var9];
        var9 = var8.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.OSvW5+;
        var9 = var11.bind(var12)(var9);
        var1['text'] = var9;
        var9 = 'secondary';
        var1['variant'] = var9;
        var9 = _closure1_slot10;
        var7 = 22;
        var7 = var10[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.CirclePlusIcon;
        var7 = {};
        var10 = 'sm';
        var7['size'] = var10;
        var7 = var9.bind(var3)(var8, var7);
        var1['icon'] = var7;
        var1['disabled'] = var6;
        var5 = function onPress() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 25;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 24;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var8 = _closure2_slot3;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'SelectConnectionActionSheet-';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var8 = function addConnection(arg1) {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1, var2);
                    return var1;
                };
                var2['addConnection'] = var8;
                var8 = _closure2_slot1;
                var2['excludedConnections'] = var8;
                var8 = _closure2_slot2;
                var2['excludedApplications'] = var8;
                var8 = _closure2_slot4;
                var2['integrations'] = var8;
                var8 = function onCompleteApplication(arg1) {
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var2['onCompleteApplication'] = var8;
                var10 = _closure2_slot5;
                var8 = null;
                var10 = var8 != var10;
                if(!var10) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                var8 = _closure2_slot5;
case 72:
                var2['gameApplicationIds'] = var8;
                var7 = function onCompleteIdentityApplication(arg1) {
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot9;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var2['onCompleteIdentityApplication'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            }
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot8 = var7;
    var4 = var4.GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingTop': 16, 'paddingBottom': 0};
    var4['formContent'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'backgroundColor': null, 'borderColor': null, 'borderWidth': 1};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_WARNING;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_WARNING;
    var9['borderColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['warningContainer'] = var9;
    var9 = {'flex': 1, 'marginLeft': 10};
    var4['warningText'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between'};
    var4['headerTitleContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRolesEditConnectionsControls(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var14 = var1.guild;
            var _closure2_slot0 = var14;
            var17 = var1.role;
            var _closure2_slot1 = var17;
            var12 = var1.locked;
            var2 = var1.onConnectionsChanged;
            var _closure2_slot2 = var2;
            var16 = var1.integrations;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot13;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 26;
            var1 = var6[var1];
            var8 = var2.bind(var4)(var1);
            var7 = var8.useApplicationIdentityLinkedRolesEnabled;
            var3 = var14.id;
            var1 = 'guild_settings_roles_edit_connections';
            var15 = var7.bind(var8)(var3, var1);
            var1 = 27;
            var3 = var6[var1];
            var11 = var2.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = var17.id;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = var14.id;
            var7[1] = var3;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getRoleMemberCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3[var2];
case 74:
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var8, var3, var7);
            var1 = var6[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStoresArray;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getEditedRoleConnectionConfigurationsMap;
                    var3 = var1.bind(var2)();
                    var2 = var3.get;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0015_ip = 5; continue _fun0015 }
case 48:
                    var1 = new Array(0);
case 5:
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var2, var1);
            var _closure2_slot3 = var1;
            var6 = var1.length;
            var2 = 1;
            if(!(!(var6 > var2))) { _fun0013_ip = 24; continue _fun0013 }
case 76:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ConnectionConfigurationRuleOperator;
            var25 = var2.AND;
            _fun0013_ip = 77; continue _fun0013;
case 24:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ConnectionConfigurationRuleOperator;
            var25 = var2.OR;
case 77:
            _closure2_slot4 = var25;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var25;
            var2[1] = var1;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.ConnectionConfigurationRuleOperator;
                    var1 = var1.OR;
                    if(!(var3 !== var1)) { _fun0016_ip = 78; continue _fun0016 }
case 79:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0016_ip = 80; continue _fun0016 }
case 43:
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var4 = 0;
                    if(!(!(var1 > var4))) { _fun0016_ip = 81; continue _fun0016 }
case 80:
                    var1 = new Array(0);
                    _fun0016_ip = 82; continue _fun0016;
case 81:
                    var3 = _closure2_slot3;
                    var1 = var3[var4];
case 82:
                    _fun0016_ip = 83; continue _fun0016;
case 78:
                    var3 = _closure2_slot3;
                    var2 = var3.flat;
                    var1 = var2.bind(var3)();
case 83:
                    return var1;
                }
            };
            var22 = var6.bind(var7)(var1, var2);
            _closure2_slot5 = var22;
            var6 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var22;
            var1 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = _closure2_slot5;
                var2 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.connectionType;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var19 = var6.bind(var7)(var1, var2);
            var6 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var22;
            var1 = function() {
                var2 = global;
                var3 = var2.Set;
                var5 = _closure2_slot5;
                var4 = var5.map;
                var2 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = '';
                        if(!var3) { _fun0017_ip = 69; continue _fun0017 }
case 59:
                        var1 = var2;
case 69:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.filter;
                var1 = function(arg1) {
                    var2 = '';
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var6 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var18 = var6.bind(var7)(var1, var2);
            var1 = var19.size;
            var2 = 0;
            var11 = var1 > var2;
            var13 = null;
            var6 = var13 != var3;
            var1 = 0;
            if(!var6) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var1 = var3;
case 84:
            var23 = var1 > var2;
            var3 = _closure1_slot10;
            var6 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 28;
            var1 = var21[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Form;
            var1 = {};
            var5 = var5.formContent;
            var1['contentContainerStyle'] = var5;
            var5 = 'handled';
            var1['keyboardShouldPersistTaps'] = var5;
            var7 = _closure1_slot11;
            var5 = 14;
            var5 = var21[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var10 = _closure1_slot1;
            var8 = 8;
            var8 = var21[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.space;
            var8 = var8.PX_24;
            var5['spacing'] = var8;
            var21 = _closure1_slot10;
            var10 = _closure1_slot17;
            var8 = {};
            var24 = function clearConnections() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.updateRoleConnectionConfigurations;
                var3 = _closure2_slot1;
                var4 = var3.id;
                var3 = new Array(0);
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8['clearConnections'] = var24;
            var8['locked'] = var12;
            var8['hasConnections'] = var11;
            var8['hasMembers'] = var23;
            var10 = var21.bind(var4)(var10, var8);
            var8 = new Array(4);
            var8[0] = var10;
            var10 = null;
            if(!var11) { _fun0013_ip = 86; continue _fun0013 }
case 87:
            var24 = _closure1_slot10;
            var23 = _closure1_slot18;
            var21 = {};
            var21['locked'] = var12;
            var21['currentOperator'] = var25;
            var21['roleConnectionConfigurations'] = var22;
            var25 = function setPendingRoleConfigurations(arg1, arg2) {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.updateRoleConnectionConfigurations;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var8 = _closure1_slot16;
                var7 = arg1;
                var3 = arg2;
                var3 = var8.bind(var1)(var7, var3);
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var21['setPendingRoleConfigurations'] = var25;
            var10 = var24.bind(var4)(var23, var21);
case 86:
            var8[1] = var10;
            var10 = null;
            if(!var11) { _fun0013_ip = 88; continue _fun0013 }
case 89:
            var21 = _closure1_slot19;
            var11 = var17.id;
            var30 = function(arg1) {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.updateRoleConnectionConfigurations;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var8 = _closure1_slot16;
                var7 = _closure2_slot4;
                var3 = arg1;
                var3 = var8.bind(var1)(var3, var7);
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var32 = undefined;
            var31 = var22;
            var29 = var12;
            var28 = undefined;
            var27 = var16;
            var10 = var32[var21](var31, var30, var29, var28, var27, var26);
case 88:
            var8[2] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot20;
            var9 = {};
            var20 = function handleConnectionTapped(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var5 = arguments[1];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0018_ip = 90; continue _fun0018 }
case 91:
                    var5 = undefined;
case 90:
                    var10 = _closure2_slot5;
                    var8 = new Array(0);
                    var9 = 0;
                    var11 = var8;
                    var3 = arraySpread(var11, var10, var9);
                    var4 = var8.push;
                    var3 = {};
                    var6 = arg1;
                    var3['connectionType'] = var6;
                    var3['connectionMetadataField'] = var1;
                    var3['applicationId'] = var5;
                    var3['operator'] = var1;
                    var3['value'] = var1;
                    var3 = var4.bind(var8)(var3);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 29;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.updateRoleConnectionConfigurations;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var7 = _closure1_slot16;
                    var3 = _closure2_slot4;
                    var3 = var7.bind(var1)(var8, var3);
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var9['handleConnectionTapped'] = var20;
            var9['excludedConnections'] = var19;
            var9['excludedApplications'] = var18;
            var17 = var17.id;
            var9['roleId'] = var17;
            var9['integrations'] = var16;
            var13 = null;
            if(!var15) { _fun0013_ip = 92; continue _fun0013 }
case 93:
            var13 = var14.gameApplicationIds;
case 92:
            var9['gameApplicationIds'] = var13;
            var9['locked'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
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