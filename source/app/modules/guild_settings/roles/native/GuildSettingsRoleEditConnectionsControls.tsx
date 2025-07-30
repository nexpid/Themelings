// app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function convertConfigArrayWithOperator(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!(var2 !== var3)) { _fun0004_ip = 108; continue _fun0004 }
 47:
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
            _fun0004_ip = 152; continue _fun0004;
 108:
            var3 = var4.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0004_ip = 145; continue _fun0004 }
 119:
            var3 = new Array(0);
            var10 = var3;
            var9 = var4;
            var8 = 0;
            var2 = arraySpread(var10, var9, var8);
            var2 = new Array(1);
            var2[0] = var3;
            _fun0004_ip = 149; continue _fun0004;
 145:
            var2 = new Array(0);
 149:
            var1 = var2;
 152:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function HeaderSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var21 = var1.clearConnections;
            var20 = var1.locked;
            var16 = var1.hasConnections;
            var5 = var1.hasMembers;
            var1 = _closure1_slot12;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var6 = null;
            if(!var5) { _fun0005_ip = 277; continue _fun0005 }
 58:
            var8 = _closure1_slot10;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = var11.warningContainer;
            var5['style'] = var9;
            var12 = _closure1_slot9;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 11;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var10 = var9.CircleErrorIcon;
            var9 = {};
            var15 = _closure1_slot1;
            var14 = 8;
            var14 = var22[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.STATUS_WARNING;
            var9['color'] = var14;
            var14 = 'sm';
            var9['size'] = var14;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var14 = _closure1_slot9;
            var10 = 12;
            var10 = var22[var10];
            var10 = var19.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {};
            var15 = 'text-xs/medium';
            var10['variant'] = var15;
            var15 = var11.warningText;
            var10['style'] = var15;
            var15 = 13;
            var17 = var22[var15];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var22[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.2aFeeX;
            var15 = var17.bind(var18)(var15);
            var10['children'] = var15;
            var10 = var14.bind(var4)(var12, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 277:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var9 = 14;
            var6 = var25[var9];
            var6 = var28.bind(var4)(var6);
            var7 = var6.FormSection;
            var6 = {};
            var14 = _closure1_slot9;
            var9 = var25[var9];
            var9 = var28.bind(var4)(var9);
            var12 = var9.FormRow;
            var10 = {};
            var18 = _closure1_slot9;
            var17 = _closure1_slot4;
            var15 = {};
            var9 = var11.headingContainer;
            var15['style'] = var9;
            var24 = _closure1_slot9;
            var19 = 12;
            var9 = var25[var19];
            var9 = var28.bind(var4)(var9);
            var23 = var9.Text;
            var22 = {};
            var9 = 'eyebrow';
            var22['variant'] = var9;
            var9 = 13;
            var26 = var25[var9];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var9];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.nMir29;
            var25 = var26.bind(var27)(var25);
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var15['children'] = var22;
            var15 = var18.bind(var4)(var17, var15);
            var10['label'] = var15;
            var15 = undefined;
            if(!var16) { _fun0005_ip = 618; continue _fun0005 }
 472:
            var18 = _closure1_slot9;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 15;
            var16 = var22[var16];
            var16 = var25.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var23 = 8;
            var16['hitSlop'] = var23;
            var16['onPress'] = var21;
            var16['disabled'] = var20;
            var21 = _closure1_slot9;
            var19 = var22[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'text-link'};
            var23 = var22[var9];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var9];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.ntW1cX;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 618:
            var10['trailing'] = var15;
            var10 = var14.bind(var4)(var12, var10);
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot9;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 16;
            var6 = var16[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.TextWithIOSLinkWorkaround;
            var6 = {};
            var12 = 'text-sm/medium';
            var6['variant'] = var12;
            var11 = var11.description;
            var6['style'] = var11;
            var11 = var16[var9];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.q5f7tL;
            var9 = {};
            var15 = _closure1_slot1;
            var14 = 17;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.getArticleURL;
            var13 = _closure1_slot7;
            var13 = var13.CONNECTION_DETAILS_ADMIN;
            var13 = var14.bind(var15)(var13);
            var9['helpdeskArticleUrl'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function AndOrRadios(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var15 = var1.locked;
            var12 = var1.currentOperator;
            var3 = var1.roleConnectionConfigurations;
            var _closure2_slot0 = var3;
            var1 = var1.setPendingRoleConfigurations;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot12;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot15;
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 9;
            var1 = var17[var14];
            var1 = var21.bind(var4)(var1);
            var1 = var1.ConnectionConfigurationRuleOperator;
            var1 = var1.OR;
            var18 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot10;
            var6 = 14;
            var1 = var17[var6];
            var1 = var21.bind(var4)(var1);
            var2 = var1.FormSection;
            var1 = {};
            var10 = _closure1_slot9;
            var5 = var17[var6];
            var5 = var21.bind(var4)(var5);
            var8 = var5.FormRow;
            var5 = {};
            var20 = _closure1_slot9;
            var13 = 12;
            var13 = var17[var13];
            var13 = var21.bind(var4)(var13);
            var19 = var13.Text;
            var13 = {};
            var16 = 'eyebrow';
            var13['variant'] = var16;
            var16 = 13;
            var22 = var17[var16];
            var22 = var21.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var17[var16];
            var22 = var21.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.Xs7PHR;
            var22 = var23.bind(var24)(var22);
            var13['children'] = var22;
            var13 = var20.bind(var4)(var19, var13);
            var5['label'] = var13;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var13 = _closure1_slot9;
            var8 = var17[var6];
            var8 = var21.bind(var4)(var8);
            var10 = var8.FormRadioRow;
            var8 = {};
            var19 = var17[var16];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var17[var16];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.W3iY5+;
            var17 = var19.bind(var20)(var17);
            var8['label'] = var17;
            var17 = var15;
            if(var17) { _fun0006_ip = 336; continue _fun0006 }
 324:
            var19 = var18.length;
            var18 = 2;
            var17 = var19 < var18;
 336:
            var8['disabled'] = var17;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var14];
            var19 = var18.bind(var4)(var19);
            var19 = var19.ConnectionConfigurationRuleOperator;
            var19 = var19.OR;
            var19 = var12 === var19;
            var8['selected'] = var19;
            var17 = var17[var14];
            var17 = var18.bind(var4)(var17);
            var17 = var17.ConnectionConfigurationRuleOperator;
            var17 = var17.OR;
            if(!(var12 !== var17)) { _fun0006_ip = 411; continue _fun0006 }
 403:
            var17 = var11.andOrRowUnselected;
            _fun0006_ip = 417; continue _fun0006;
 411:
            var17 = var11.andOrRowSelected;
 417:
            var8['style'] = var17;
            var17 = function onPress() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ConnectionConfigurationRuleOperator;
                var1 = var1.OR;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var8['onPress'] = var17;
            var8 = var13.bind(var4)(var10, var8);
            var5[1] = var8;
            var8 = _closure1_slot9;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = var10[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.FormRadioRow;
            var6 = {};
            var17 = var10[var16];
            var17 = var13.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var10[var16];
            var16 = var13.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.gHXS9P;
            var16 = var17.bind(var18)(var16);
            var6['label'] = var16;
            var6['disabled'] = var15;
            var15 = var10[var14];
            var15 = var13.bind(var4)(var15);
            var15 = var15.ConnectionConfigurationRuleOperator;
            var15 = var15.AND;
            var15 = var12 === var15;
            var6['selected'] = var15;
            var10 = var10[var14];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ConnectionConfigurationRuleOperator;
            var10 = var10.AND;
            if(!(var12 !== var10)) { _fun0006_ip = 588; continue _fun0006 }
 580:
            var10 = var11.andOrRowUnselected;
            _fun0006_ip = 594; continue _fun0006;
 588:
            var10 = var11.andOrRowSelected;
 594:
            var6['style'] = var10;
            var9 = function onPress() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ConnectionConfigurationRuleOperator;
                var1 = var1.AND;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function renderRoleConnectionConfigurations(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
 0:
                    var9 = arg1;
                    var8 = arg2;
                    var6 = new Array(0);
                    var5 = _closure1_slot13;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var5 = var7.bind(var1)();
                    var3 = var5.done;
                    if(var3) { _fun0008_ip = 84; continue _fun0008 }
 45:
                    var12 = var5.value;
                    var10 = var6.push;
                    var3 = {};
                    var13 = var3;
                    var11 = copyDataProperties(var13, var12);
                    var3 = var10.bind(var6)(var3);
                    var10 = var7.bind(var1)();
                    var3 = var10.done;
                    var5 = var10;
                    if(!var3) { _fun0008_ip = 45; continue _fun0008 }
 84:
                    var7 = null;
                    if(!(var7 != var9)) { _fun0008_ip = 133; continue _fun0008 }
 90:
                    var3 = -1;
                    if(!(var3 !== var8)) { _fun0008_ip = 118; continue _fun0008 }
 100:
                    var5 = 0;
                    var3 = var6;
                    if(!(var8 >= var5)) { _fun0008_ip = 215; continue _fun0008 }
 109:
                    var6[var8] = var9;
                    var3 = var6;
                    _fun0008_ip = 215; continue _fun0008;
 118:
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var9);
                    var3 = var6;
                    _fun0008_ip = 215; continue _fun0008;
 133:
                    var5 = _closure2_slot0;
                    var5 = var5[var8];
                    var _closure3_slot0 = var5;
                    if(!(var7 !== var5)) { _fun0008_ip = 178; continue _fun0008 }
 149:
                    var9 = var5.connectionMetadataField;
                    if(!(var7 == var9)) { _fun0008_ip = 178; continue _fun0008 }
 159:
                    var9 = var5.operator;
                    if(!(var7 == var9)) { _fun0008_ip = 178; continue _fun0008 }
 169:
                    var5 = var5.value;
                    if(!(var7 != var5)) { _fun0008_ip = 198; continue _fun0008 }
 178:
                    var7 = var6.splice;
                    var5 = 1;
                    var5 = var7.bind(var6)(var8, var5);
                    var3 = var6;
                    _fun0008_ip = 215; continue _fun0008;
 198:
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = arg1;
                            var1 = _closure3_slot0;
                            var4 = var1.applicationId;
                            var1 = null;
                            if(!(var1 != var4)) { _fun0009_ip = 64; continue _fun0009 }
 21:
                            var4 = var3.connectionType;
                            var1 = _closure3_slot0;
                            var1 = var1.connectionType;
                            var1 = var4 !== var1;
                            if(!var1) { _fun0009_ip = 62; continue _fun0009 }
 44:
                            var5 = var3.applicationId;
                            var4 = _closure3_slot0;
                            var4 = var4.applicationId;
                            var1 = var5 !== var4;
 62:
                            _fun0009_ip = 84; continue _fun0009;
 64:
                            var3 = var3.connectionType;
                            var2 = _closure3_slot0;
                            var2 = var2.connectionType;
                            var1 = var3 !== var2;
 84:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var4);
 215:
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
 0:
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
                    if(var1) { _fun0010_ip = 101; continue _fun0010 }
 69:
                    var6 = var2.set;
                    var7 = {};
                    var7['index'] = var5;
                    var7['configuration'] = var4;
                    var1 = new Array(1);
                    var1[0] = var7;
                    var1 = var6.bind(var2)(var3, var1);
                    _fun0010_ip = 138; continue _fun0010;
 101:
                    var1 = var2.get;
                    var3 = var1.bind(var2)(var3);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 138; continue _fun0010 }
 117:
                    var2 = var3.push;
                    var1 = {};
                    var1['index'] = var5;
                    var1['configuration'] = var4;
                    var1 = var2.bind(var3)(var1);
 138:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var14)(var1);
            var3 = _closure1_slot13;
            var2 = var9.values;
            var2 = var2.bind(var9)();
            var4 = undefined;
            var13 = var3.bind(var4)(var2);
            var3 = var13.bind(var4)();
            var2 = var3.done;
            var12 = 0;
            var11 = 'connectionMetadataField';
            var10 = 'operator';
            var8 = 'value';
            var7 = 1;
            if(var2) { _fun0007_ip = 252; continue _fun0007 }
 142:
            var16 = var3.value;
            var15 = var16.some;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.configuration;
                    var1 = var2.connectionMetadataField;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0011_ip = 34; continue _fun0011 }
 24:
                    var4 = var2.operator;
                    var1 = var3 == var4;
 34:
                    if(!var1) { _fun0011_ip = 46; continue _fun0011 }
 37:
                    var2 = var2.value;
                    var1 = var3 == var2;
 46:
                    return var1;
                }
            };
            var2 = var15.bind(var16)(var2);
            if(var2) { _fun0007_ip = 237; continue _fun0007 }
 168:
            var17 = {};
            var2 = var16[var12];
            var19 = var2.configuration;
            var20 = var17;
            var2 = copyDataProperties(var20, var19);
            var17[var11] = var4;
            var17[var10] = var4;
            var17[var8] = var4;
            var2 = var14.push;
            var18 = var2.bind(var14)(var17);
            var15 = var16.push;
            var2 = {};
            var18 = var18 - var7;
            var2['index'] = var18;
            var2['configuration'] = var17;
            var2 = var15.bind(var16)(var2);
 237:
            var15 = var13.bind(var4)();
            var2 = var15.done;
            var3 = var15;
            if(!var2) { _fun0007_ip = 142; continue _fun0007 }
 252:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var6.Array;
            var7 = var8.from;
            var6 = var9.values;
            var6 = var6.bind(var9)();
            var7 = var7.bind(var8)(var6);
            var6 = var7.map;
            var5 = function(arg1) {
                var7 = arg1;
                var5 = _closure1_slot9;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
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
    var _closure1_slot18 = var1;
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
        var7 = var1.locked;
        var1 = _closure1_slot12;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 15;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var1['disabled'] = var7;
        var7 = var9.addConnectionButton;
        var1['style'] = var7;
        var5 = function onPress() {
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 19;
            var4 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var4 = _closure1_slot0;
            var3 = 21;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 20;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var1)(var3, var2);
            var9 = _closure2_slot3;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'SelectConnectionActionSheet-';
            var3 = var3.bind(var2)(var9);
            var2 = {};
            var9 = function addConnection(arg1) {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var2);
                return var1;
            };
            var2['addConnection'] = var9;
            var9 = _closure2_slot1;
            var2['excludedConnections'] = var9;
            var9 = _closure2_slot2;
            var2['excludedApplications'] = var9;
            var8 = _closure2_slot4;
            var2['integrations'] = var8;
            var7 = function onCompleteApplication(arg1) {
                var4 = _closure2_slot0;
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var2['onCompleteApplication'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var1['onPress'] = var5;
        var8 = _closure1_slot9;
        var5 = 22;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var7 = var5.CirclePlusIcon;
        var5 = {};
        var10 = 'sm';
        var5['size'] = var10;
        var11 = _closure1_slot1;
        var10 = 8;
        var10 = var13[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.TEXT_LINK;
        var5['color'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot9;
        var6 = 12;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-md/medium', 'color': 'text-link'};
        var9 = var9.addConnectionText;
        var6['style'] = var9;
        var9 = 13;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.OSvW5+;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
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
    var4 = native4;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'backgroundColor': null, 'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'marginHorizontal': 12, 'marginBottom': 8};
    var10 = 8;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INFO_WARNING_BACKGROUND;
    var9['backgroundColor'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_WARNING;
    var9['borderColor'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9['borderRadius'] = var11;
    var4['warningContainer'] = var9;
    var9 = {'flex': 1, 'marginLeft': 10};
    var4['warningText'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['headingContainer'] = var9;
    var9 = {'paddingHorizontal': 16, 'paddingBottom': 12};
    var4['description'] = var9;
    var9 = {'borderRadius': null, 'marginHorizontal': 8, 'marginBottom': 8};
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9['borderRadius'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var11;
    var4['andOrRowUnselected'] = var9;
    var9 = {'borderRadius': null, 'marginHorizontal': 8, 'marginBottom': 8};
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9['borderRadius'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var11;
    var4['andOrRowSelected'] = var9;
    var9 = {};
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var9['color'] = var11;
    var4['andOrRowLabelUnselected'] = var9;
    var9 = {};
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_ACTIVE;
    var9['color'] = var11;
    var4['andOrRowLabelSelected'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'padding': 16, 'borderRadius': null, 'borderColor': null, 'borderWidth': 2, 'borderStyle': 'dashed', 'marginHorizontal': 8, 'marginTop': 16};
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9['borderRadius'] = var11;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_MUTED;
    var9['borderColor'] = var11;
    var4['addConnectionButton'] = var9;
    var9 = {};
    var9['paddingLeft'] = var10;
    var4['addConnectionText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRolesEditConnectionsControls(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.guild;
            var _closure2_slot0 = var3;
            var11 = var1.role;
            var _closure2_slot1 = var11;
            var9 = var1.locked;
            var2 = var1.onConnectionsChanged;
            var _closure2_slot2 = var2;
            var10 = var1.integrations;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 23;
            var7 = var5[var1];
            var13 = var2.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var15 = var11.id;
            var7 = new Array(2);
            var7[0] = var15;
            var3 = var3.id;
            var7[1] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getRoleMemberCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0013_ip = 54; continue _fun0013 }
 41:
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3[var2];
 54:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var8, var3, var7);
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var5 = var7.useStateFromStoresArray;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getEditedRoleConnectionConfigurationsMap;
                    var3 = var1.bind(var2)();
                    var2 = var3.get;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0014_ip = 49; continue _fun0014 }
 45:
                    var1 = new Array(0);
 49:
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var2, var1);
            var _closure2_slot3 = var1;
            var5 = var1.length;
            var2 = 1;
            if(!(!(var5 > var2))) { _fun0012_ip = 222; continue _fun0012 }
 188:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ConnectionConfigurationRuleOperator;
            var20 = var2.AND;
            _fun0012_ip = 254; continue _fun0012;
 222:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ConnectionConfigurationRuleOperator;
            var20 = var2.OR;
 254:
            _closure2_slot4 = var20;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var1;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.ConnectionConfigurationRuleOperator;
                    var1 = var1.OR;
                    if(!(var3 !== var1)) { _fun0015_ip = 89; continue _fun0015 }
 48:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0015_ip = 73; continue _fun0015 }
 58:
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var4 = 0;
                    if(!(!(var1 > var4))) { _fun0015_ip = 79; continue _fun0015 }
 73:
                    var1 = new Array(0);
                    _fun0015_ip = 87; continue _fun0015;
 79:
                    var3 = _closure2_slot3;
                    var1 = var3[var4];
 87:
                    _fun0015_ip = 103; continue _fun0015;
 89:
                    var3 = _closure2_slot3;
                    var2 = var3.flat;
                    var1 = var2.bind(var3)();
 103:
                    return var1;
                }
            };
            var16 = var5.bind(var7)(var1, var2);
            _closure2_slot5 = var16;
            var5 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var16;
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
            var13 = var5.bind(var7)(var1, var2);
            var5 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                var2 = global;
                var3 = var2.Set;
                var5 = _closure2_slot5;
                var4 = var5.map;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = '';
                        if(!var3) { _fun0016_ip = 24; continue _fun0016 }
 21:
                        var1 = var2;
 24:
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
            var12 = var5.bind(var7)(var1, var2);
            var1 = var13.size;
            var2 = 0;
            var8 = var1 > var2;
            var7 = null;
            var5 = var7 != var3;
            var1 = 0;
            if(!var5) { _fun0012_ip = 373; continue _fun0012 }
 370:
            var1 = var3;
 373:
            var18 = var1 > var2;
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Form;
            var1 = {};
            var5 = 'handled';
            var1['keyboardShouldPersistTaps'] = var5;
            var17 = _closure1_slot9;
            var15 = _closure1_slot16;
            var5 = {};
            var19 = function clearConnections() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
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
            var5['clearConnections'] = var19;
            var5['locked'] = var9;
            var5['hasConnections'] = var8;
            var5['hasMembers'] = var18;
            var15 = var17.bind(var4)(var15, var5);
            var5 = new Array(4);
            var5[0] = var15;
            var15 = null;
            if(!var8) { _fun0012_ip = 517; continue _fun0012 }
 474:
            var19 = _closure1_slot9;
            var18 = _closure1_slot17;
            var17 = {};
            var17['locked'] = var9;
            var17['currentOperator'] = var20;
            var17['roleConnectionConfigurations'] = var16;
            var20 = function setPendingRoleConfigurations(arg1, arg2) {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.updateRoleConnectionConfigurations;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var8 = _closure1_slot15;
                var7 = arg1;
                var3 = arg2;
                var3 = var8.bind(var1)(var7, var3);
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17['setPendingRoleConfigurations'] = var20;
            var15 = var19.bind(var4)(var18, var17);
 517:
            var5[1] = var15;
            var7 = null;
            if(!var8) { _fun0012_ip = 559; continue _fun0012 }
 526:
            var15 = _closure1_slot18;
            var8 = var11.id;
            var25 = function(arg1) {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.updateRoleConnectionConfigurations;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var8 = _closure1_slot15;
                var7 = _closure2_slot4;
                var3 = arg1;
                var3 = var8.bind(var1)(var3, var7);
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var27 = undefined;
            var26 = var16;
            var24 = var9;
            var23 = undefined;
            var22 = var10;
            var7 = var27[var15](var26, var25, var24, var23, var22, var21);
 559:
            var5[2] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot19;
            var6 = {};
            var14 = function handleConnectionTapped(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var5 = arguments[1];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0017_ip = 11; continue _fun0017 }
 9:
                    var5 = undefined;
 11:
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
                    var4 = 24;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.updateRoleConnectionConfigurations;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var7 = _closure1_slot15;
                    var3 = _closure2_slot4;
                    var3 = var7.bind(var1)(var8, var3);
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var6['handleConnectionTapped'] = var14;
            var6['excludedConnections'] = var13;
            var6['excludedApplications'] = var12;
            var11 = var11.id;
            var6['roleId'] = var11;
            var6['integrations'] = var10;
            var6['locked'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();