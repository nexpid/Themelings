// app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = function PopoutCheck(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.connectionType;
            var10 = var1.connectionMetadataField;
            var3 = var1.operator;
            var9 = var1.value;
            var8 = var1.description;
            var1 = _closure1_slot20;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var8)) { _fun0001_ip = 107; continue _fun0001 }
 50:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 15;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.getConnectionsCheckText;
            var2 = {};
            var2['connectionType'] = var11;
            var2['connectionMetadataField'] = var10;
            var2['operator'] = var3;
            var2['value'] = var9;
            var10 = var4.bind(var6)(var2);
            _fun0001_ip = 358; continue _fun0001;
 107:
            var2 = _closure1_slot13;
            var2 = var2.LESS_THAN;
            if(!(var2 !== var3)) { _fun0001_ip = 252; continue _fun0001 }
 124:
            var2 = _closure1_slot13;
            var2 = var2.GREATER_THAN;
            var10 = var8;
            if(!(var2 === var3)) { _fun0001_ip = 358; continue _fun0001 }
 144:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var4 = var11[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.format;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.2p7dAw;
            var2 = {};
            var2['description'] = var8;
            var11 = global;
            var15 = var11.Math;
            var14 = var15.max;
            var11 = var11.Number;
            var12 = var11.bind(var5)(var9);
            var11 = 1;
            var12 = var12 + var11;
            var11 = 0;
            var11 = var14.bind(var15)(var11, var12);
            var2['count'] = var11;
            var10 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 358; continue _fun0001;
 252:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var4 = var11[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.format;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.2p7dAw;
            var2 = {};
            var2['description'] = var8;
            var8 = global;
            var12 = var8.Math;
            var11 = var12.max;
            var8 = var8.Number;
            var9 = var8.bind(var5)(var9);
            var8 = 1;
            var9 = var9 - var8;
            var8 = 0;
            var8 = var11.bind(var12)(var8, var9);
            var2['count'] = var8;
            var10 = var4.bind(var6)(var3, var2);
 358:
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0001_ip = 513; continue _fun0001 }
 370:
            var4 = _closure1_slot18;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var13.popoutCheck;
            var2['style'] = var6;
            var12 = _closure1_slot17;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 16;
            var6 = var11[var6];
            var6 = var8.bind(var5)(var6);
            var9 = var6.CheckmarkLargeIcon;
            var6 = {};
            var14 = 'sm';
            var6['size'] = var14;
            var13 = var13.popoutCheckIcon;
            var6['style'] = var13;
            var9 = var12.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot17;
            var7 = 17;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/medium', 'color': 'header-primary'};
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 513:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var2 = function PopoutChecks(arg1) {
        var1 = arg1;
        var8 = var1.eligibilityStates;
        var1 = var1.guildId;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot20;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 18;
        var2 = var6[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var _closure2_slot2 = var2;
        var2 = 19;
        var2 = var6[var2];
        var7 = var3.bind(var4)(var2);
        var3 = var7.groupBy;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var4 = var1.connection_type;
                var3 = var1.application_id;
                var2 = null;
                var5 = var2 != var3;
                var3 = '';
                var2 = var3;
                if(!var5) { _fun0002_ip = 59; continue _fun0002 }
 31:
                var6 = var1.application_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = ':';
                var2 = var5.bind(var1)(var6);
 59:
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var3)(var4, var2);
                return var1;
            }
        };
        var7 = var3.bind(var7)(var8, var2);
        var _closure2_slot3 = var7;
        var2 = global;
        var3 = var2.Object;
        var2 = var3.keys;
        var7 = var2.bind(var3)(var7);
        var3 = var7.length;
        var2 = 1;
        var2 = var3 - var2;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot0;
        var2 = 20;
        var2 = var6[var2];
        var6 = var3.bind(var4)(var2);
        var3 = var6.useColorValue;
        var2 = _closure1_slot15;
        var2 = var2.GREEN_330;
        var2 = var3.bind(var6)(var2);
        var2 = var2.hex;
        var _closure2_slot5 = var2;
        var3 = _closure1_slot17;
        var2 = _closure1_slot19;
        var1 = {};
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var1 = _closure2_slot3;
                var3 = var1[var5];
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.operator;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var9 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.get;
                var19 = var2.bind(var3)(var5);
                var17 = null;
                var2 = var17 == var1;
                var18 = undefined;
                if(var2) { _fun0003_ip = 101; continue _fun0003 }
 96:
                var18 = var1.application;
 101:
                var2 = var17 == var18;
                var1 = undefined;
                if(var2) { _fun0003_ip = 116; continue _fun0003 }
 110:
                var1 = var18.bot;
 116:
                var1 = var17 != var1;
                var22 = null;
                if(!var1) { _fun0003_ip = 155; continue _fun0003 }
 125:
                var3 = _closure1_slot7;
                var30 = var18.bot;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var31 = var2;
                var1 = new var31[var3](var30, var29);
                var22 = var1 instanceof Object ? var1 : var2;
 155:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var3 = var1.officialApplicationIds;
                var2 = var3.includes;
                var1 = var17 == var18;
                var6 = undefined;
                if(var1) { _fun0003_ip = 200; continue _fun0003 }
 195:
                var6 = var18.id;
 200:
                var8 = var17 != var6;
                var1 = '';
                if(!var8) { _fun0003_ip = 214; continue _fun0003 }
 211:
                var1 = var6;
 214:
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0003_ip = 289; continue _fun0003 }
 222:
                var1 = var17 != var22;
                var12 = undefined;
                if(!var1) { _fun0003_ip = 359; continue _fun0003 }
 234:
                var3 = _closure1_slot17;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = _closure2_slot1;
                var6 = var6.botTag;
                var1['style'] = var6;
                var6 = false;
                var1['verified'] = var6;
                var12 = var3.bind(var4)(var2, var1);
                _fun0003_ip = 359; continue _fun0003;
 289:
                var3 = _closure1_slot17;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 22;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = _closure2_slot1;
                var6 = var6.botTag;
                var1['style'] = var6;
                var6 = _closure2_slot0;
                var1['guildId'] = var6;
                var6 = _closure2_slot5;
                var1['roleColor'] = var6;
                var6 = 16;
                var1['size'] = var6;
                var12 = var3.bind(var4)(var2, var1);
 359:
                var3 = _closure1_slot18;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = _closure2_slot1;
                var8 = var6.popoutChecksGroup;
                var6 = new Array(2);
                var6[0] = var8;
                var10 = _closure2_slot4;
                var8 = arg2;
                var10 = var8 < var10;
                var8 = null;
                if(!var10) { _fun0003_ip = 413; continue _fun0003 }
 403:
                var10 = _closure2_slot1;
                var8 = var10.popoutChecksGroupBottomMargin;
 413:
                var6[1] = var8;
                var1['style'] = var6;
                var10 = _closure1_slot18;
                var8 = _closure1_slot6;
                var6 = {};
                var11 = _closure2_slot1;
                var11 = var11.popoutCheckGroupName;
                var6['style'] = var11;
                var11 = var17 != var19;
                var14 = null;
                if(!var11) { _fun0003_ip = 623; continue _fun0003 }
 457:
                var16 = _closure1_slot17;
                var15 = _closure1_slot1;
                var27 = _closure1_slot2;
                var23 = 24;
                var11 = var27[var23];
                var15 = var15.bind(var4)(var11);
                var11 = {};
                var20 = _closure2_slot1;
                var20 = var20.popoutCheckGroupPlatformIcon;
                var11['style'] = var20;
                var26 = _closure1_slot0;
                var20 = 25;
                var20 = var27[var20];
                var25 = var26.bind(var4)(var20);
                var21 = var25.makeSource;
                var20 = 26;
                var20 = var27[var20];
                var27 = var26.bind(var4)(var20);
                var26 = var27.isThemeDark;
                var20 = _closure2_slot2;
                var20 = var26.bind(var27)(var20);
                var26 = var19.icon;
                if(var20) { _fun0003_ip = 562; continue _fun0003 }
 554:
                var20 = var26.lightPNG;
                _fun0003_ip = 568; continue _fun0003;
 562:
                var20 = var26.darkPNG;
 568:
                var20 = var21.bind(var25)(var20);
                var11['source'] = var20;
                var20 = true;
                var11['disableColor'] = var20;
                var21 = _closure1_slot1;
                var20 = _closure1_slot2;
                var20 = var20[var23];
                var20 = var21.bind(var4)(var20);
                var20 = var20.Sizes;
                var20 = var20.MEDIUM;
                var11['size'] = var20;
                var14 = var16.bind(var4)(var15, var11);
 623:
                var11 = new Array(4);
                var11[0] = var14;
                var15 = var17 != var22;
                var14 = null;
                if(!var15) { _fun0003_ip = 723; continue _fun0003 }
 640:
                var20 = _closure1_slot17;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 27;
                var15 = var23[var21];
                var16 = var16.bind(var4)(var15);
                var15 = {};
                var24 = _closure2_slot1;
                var24 = var24.popoutCheckGroupPlatformIcon;
                var15['style'] = var24;
                var15['user'] = var22;
                var22 = _closure1_slot0;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.XSMALL;
                var15['size'] = var21;
                var15['guildId'] = var4;
                var14 = var20.bind(var4)(var16, var15);
 723:
                var11[1] = var14;
                var15 = _closure1_slot17;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 17;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {'variant': 'text-sm/medium', 'color': 'interactive-active'};
                var20 = var17 == var19;
                var16 = undefined;
                if(var20) { _fun0003_ip = 784; continue _fun0003 }
 779:
                var16 = var19.name;
 784:
                if(!(var17 == var16)) { _fun0003_ip = 805; continue _fun0003 }
 788:
                var19 = var17 == var18;
                var17 = undefined;
                if(var19) { _fun0003_ip = 802; continue _fun0003 }
 797:
                var17 = var18.name;
 802:
                var16 = var17;
 805:
                var13['children'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var11[2] = var13;
                var11[3] = var12;
                var6['children'] = var11;
                var8 = var10.bind(var4)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var8 = var9.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var11 = var1.connection_type;
                    var10 = var1.connection_metadata_field;
                    var9 = var1.operator;
                    var8 = var1.value;
                    var1 = var1.description;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 28;
                    var3 = var7[var4];
                    var5 = undefined;
                    var14 = var6.bind(var5)(var3);
                    var3 = null;
                    var13 = var3 != var10;
                    var12 = 'connectionMetadataField is null';
                    var12 = var14.bind(var5)(var13, var12);
                    var12 = var7[var4];
                    var14 = var6.bind(var5)(var12);
                    var13 = var3 != var9;
                    var12 = 'operator is null';
                    var12 = var14.bind(var5)(var13, var12);
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var3 != var8;
                    var3 = 'value is null';
                    var3 = var6.bind(var5)(var4, var3);
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot21;
                    var2 = {};
                    var2['connectionType'] = var11;
                    var2['connectionMetadataField'] = var10;
                    var2['operator'] = var9;
                    var2['value'] = var8;
                    var2['description'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var22 = '';
                    var1 = ':';
                    var21 = var11;
                    var20 = var1;
                    var19 = var10;
                    var18 = var1;
                    var17 = var9;
                    var16 = var1;
                    var15 = var8;
                    var1 = var22[var7](var21, var20, var19, var18, var17, var16, var15, var14);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                var6[1] = var7;
                var1['children'] = var6;
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var14.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ActivityIndicator;
    var _closure1_slot5 = var8;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var11 = 4;
    var5 = var7[var11];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var12 = 8;
    var5 = var7[var12];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.OperatorTypes;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot14 = var8;
    var8 = var5.Color;
    var _closure1_slot15 = var8;
    var5 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot16 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot17 = var8;
    var8 = var5.jsxs;
    var _closure1_slot18 = var8;
    var5 = var5.Fragment;
    var _closure1_slot19 = var5;
    var5 = 12;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'column', 'alignItems': 'center', 'padding': 16};
    var5['container'] = var10;
    var10 = {'width': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'paddingBottom': 16, 'borderBottomWidth': 1};
    var13 = 13;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACCENT;
    var10['borderBottomColor'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var10['marginBottom'] = var15;
    var5['header'] = var10;
    var10 = {'marginRight': 8, 'height': 24, 'width': 24};
    var5['verifiedContainer'] = var10;
    var10 = {'flexShrink': 1, 'flexDirection': 'column'};
    var5['headerTextContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'top': 0};
    var5['verifiedCheck'] = var10;
    var10 = {};
    var15 = 40;
    var10['marginVertical'] = var15;
    var5['loadingSpinner'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8, 'marginLeft': 32, 'paddingRight': 20};
    var5['popoutCheck'] = var10;
    var10 = {};
    var10['marginRight'] = var12;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_POSITIVE;
    var10['tintColor'] = var15;
    var5['popoutCheckIcon'] = var10;
    var10 = {'width': '100%', 'marginBottom': 24};
    var5['popoutChecksGroup'] = var10;
    var10 = {'paddingBottom': 12, 'borderBottomWidth': 1, 'borderBottomColor': null, 'marginBottom': 12};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var10['borderBottomColor'] = var13;
    var5['popoutChecksGroupBottomMargin'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var5['popoutCheckGroupName'] = var10;
    var10 = {};
    var10['marginRight'] = var12;
    var5['popoutCheckGroupPlatformIcon'] = var10;
    var10 = {};
    var10['marginBottom'] = var12;
    var5['button'] = var10;
    var10 = {};
    var10['marginLeft'] = var11;
    var5['botTag'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot20 = var5;
    var5 = 41;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectionsRoleMessageBadgeActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var13 = var1.userId;
            var _closure2_slot0 = var13;
            var11 = var1.roleId;
            var _closure2_slot1 = var11;
            var7 = var1.channelId;
            var _closure2_slot2 = var7;
            var22 = var1.guildId;
            var _closure2_slot3 = var22;
            var1 = _closure1_slot20;
            var4 = undefined;
            var26 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 29;
            var3 = var2[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 30;
            var3 = var2[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.CONNECTIONS_ROLE_POPOUT;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var _closure2_slot4 = var5;
            var3 = _closure1_slot0;
            var8 = 31;
            var6 = var2[var8];
            var12 = var3.bind(var4)(var6);
            var10 = var12.useStateFromStores;
            var6 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29 = var10.bind(var12)(var9, var6);
            var _closure2_slot5 = var29;
            var6 = var2[var8];
            var12 = var3.bind(var4)(var6);
            var10 = var12.useStateFromStores;
            var6 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var10.bind(var12)(var9, var6);
            var _closure2_slot6 = var6;
            var6 = var2[var8];
            var12 = var3.bind(var4)(var6);
            var10 = var12.useStateFromStores;
            var6 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var4 = _closure1_slot9;
                var3 = var4.getMember;
                var2 = _closure2_slot3;
                var1 = _closure2_slot6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var10.bind(var12)(var9, var6);
            var2 = var2[var8];
            var10 = var3.bind(var4)(var2);
            var6 = var10.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuildRoleConnectionEligibility;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var6.bind(var10)(var3, var2);
            var _closure2_slot7 = var27;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var17 = null;
            var2 = var17 == var27;
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var10 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var6 = var10[var2];
            var _closure2_slot8 = var6;
            var3 = 1;
            var10 = var10[var3];
            var _closure2_slot9 = var10;
            var10 = var17 == var9;
            var20 = undefined;
            if(var10) { _fun0004_ip = 362; continue _fun0004 }
 346:
            var10 = var9.roles;
            var9 = var10.includes;
            var20 = var9.bind(var10)(var11);
 362:
            var10 = _closure1_slot4;
            var12 = var10.useEffect;
            var9 = new Array(4);
            var9[0] = var13;
            var9[1] = var11;
            var9[2] = var7;
            var9[3] = var22;
            var7 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 32;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.PASSPORT_ROLE_POPOUT_VIEWED;
                var2 = {};
                var8 = _closure2_slot0;
                var2['other_user_id'] = var8;
                var8 = _closure2_slot1;
                var2['role_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 33;
                var10 = var9[var7];
                var12 = var8.bind(var1)(var10);
                var11 = var12.collectChannelAnalyticsMetadataFromId;
                var10 = _closure2_slot2;
                var13 = var11.bind(var12)(var10);
                var14 = var2;
                var10 = copyDataProperties(var14, var13);
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.collectGuildAnalyticsMetadata;
                var6 = _closure2_slot3;
                var13 = var7.bind(var8)(var6);
                var14 = var2;
                var6 = copyDataProperties(var14, var13);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var7 = var12.bind(var10)(var7, var9);
            var9 = var10.useEffect;
            var7 = new Array(4);
            var7[0] = var22;
            var7[1] = var11;
            var7[2] = var6;
            var7[3] = var27;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                    var4 = _closure2_slot7;
                    var3 = null;
                    var2 = var3 == var4;
 20:
                    if(!var2) { _fun0005_ip = 87; continue _fun0005 }
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 34;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchGuildRoleConnectionsEligibility;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function() {
                        var3 = _closure2_slot9;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var7);
            var6 = var17 == var27;
            var18 = undefined;
            if(var6) { _fun0004_ip = 479; continue _fun0004 }
 451:
            var6 = var27.flat;
            var9 = var6.bind(var27)();
            var7 = var9.some;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.application_id;
                var1 = undefined;
                var1 = var1 === var2;
                return var1;
            };
            var18 = var7.bind(var9)(var6);
 479:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var9 = var7.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 50; continue _fun0006 }
 18:
                    var5 = _closure1_slot10;
                    var4 = var5.getRole;
                    var3 = _closure2_slot5;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 50:
                    return var1;
                }
            };
            var32 = var8.bind(var9)(var7, var6);
            if(!(var17 != var27)) { _fun0004_ip = 691; continue _fun0004 }
 533:
            var6 = var27.length;
            if(!(var3 === var6)) { _fun0004_ip = 558; continue _fun0004 }
 542:
            var2 = var27[var2];
            var2 = var2.length;
            if(!(var3 !== var2)) { _fun0004_ip = 691; continue _fun0004 }
 558:
            var2 = var27.length;
            if(!(var3 !== var2)) { _fun0004_ip = 629; continue _fun0004 }
 567:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 14;
            var6 = var8[var2];
            var6 = var3.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.format;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.D7uftL;
            var2 = {};
            var30 = var6.bind(var7)(var3, var2);
            _fun0004_ip = 689; continue _fun0004;
 629:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 14;
            var6 = var8[var2];
            var6 = var3.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.format;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.0eBj39;
            var2 = {};
            var30 = var6.bind(var7)(var3, var2);
 689:
            _fun0004_ip = 748; continue _fun0004;
 691:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 14;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.jDym4O;
            var30 = var3.bind(var6)(var2);
 748:
            var3 = _closure1_slot17;
            var6 = _closure1_slot0;
            var28 = _closure1_slot2;
            var1 = var28[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot17;
            var5 = 35;
            var5 = var28[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var10 = _closure1_slot18;
            var9 = _closure1_slot6;
            var8 = {};
            var11 = var26.container;
            var8['style'] = var11;
            var13 = _closure1_slot18;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var26.header;
            var11['style'] = var14;
            var16 = _closure1_slot17;
            var15 = _closure1_slot6;
            var14 = {};
            var19 = var26.verifiedContainer;
            var14['style'] = var19;
            var23 = _closure1_slot17;
            var21 = _closure1_slot1;
            var19 = 36;
            var19 = var28[var19];
            var21 = var21.bind(var4)(var19);
            var19 = {};
            var28 = var26.verifiedCheck;
            var19['style'] = var28;
            var31 = var17 == var29;
            var28 = undefined;
            if(var31) { _fun0004_ip = 909; continue _fun0004 }
 904:
            var28 = var29.id;
 909:
            if(!(var17 == var28)) { _fun0004_ip = 917; continue _fun0004 }
 913:
            var28 = _closure1_slot16;
 917:
            var19['guildId'] = var28;
            var29 = var17 != var32;
            var28 = undefined;
            if(!var29) { _fun0004_ip = 933; continue _fun0004 }
 930:
            var28 = var32;
 933:
            var19['role'] = var28;
            var28 = 24;
            var19['size'] = var28;
            var19 = var23.bind(var4)(var21, var19);
            var14['children'] = var19;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var19 = _closure1_slot18;
            var16 = _closure1_slot6;
            var15 = {};
            var21 = var26.headerTextContainer;
            var15['style'] = var21;
            var28 = _closure1_slot17;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var31 = 17;
            var21 = var21[var31];
            var21 = var23.bind(var4)(var21);
            var23 = var21.Text;
            var21 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var33 = var17 == var32;
            var29 = undefined;
            if(var33) { _fun0004_ip = 1046; continue _fun0004 }
 1041:
            var29 = var32.name;
 1046:
            var21['children'] = var29;
            var23 = var28.bind(var4)(var23, var21);
            var21 = new Array(2);
            var21[0] = var23;
            var29 = _closure1_slot17;
            var28 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var31];
            var23 = var28.bind(var4)(var23);
            var28 = var23.Text;
            var23 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var23['children'] = var30;
            var23 = var29.bind(var4)(var28, var23);
            var21[1] = var23;
            var15['children'] = var21;
            var15 = var19.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            if(!(var17 != var27)) { _fun0004_ip = 1168; continue _fun0004 }
 1154:
            var12 = var27.flat;
            var12 = var12.bind(var27)();
            if(!(var17 == var12)) { _fun0004_ip = 1207; continue _fun0004 }
 1168:
            var14 = _closure1_slot17;
            var13 = _closure1_slot5;
            var12 = {};
            var15 = var26.loadingSpinner;
            var12['style'] = var15;
            var15 = 'large';
            var12['size'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            _fun0004_ip = 1564; continue _fun0004;
 1207:
            var15 = _closure1_slot18;
            var14 = _closure1_slot19;
            var13 = {};
            var21 = _closure1_slot17;
            var19 = _closure1_slot22;
            var16 = {};
            var23 = var27.flat;
            var23 = var23.bind(var27)();
            var16['eligibilityStates'] = var23;
            var16['guildId'] = var22;
            var19 = var21.bind(var4)(var19, var16);
            var16 = new Array(3);
            var16[0] = var19;
            var19 = null;
            if(var20) { _fun0004_ip = 1403; continue _fun0004 }
 1268:
            var22 = _closure1_slot17;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var23 = 37;
            var20 = var28[var23];
            var21 = var27.bind(var4)(var20);
            var20 = {};
            var29 = var26.button;
            var20['style'] = var29;
            var29 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 38;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.hideActionSheet;
                var3 = 'ConnectionsRoleMessageBadgeActionSheet';
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot0;
                var2 = 39;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildRoleConnectionsModal;
                var2 = {};
                var5 = _closure2_slot3;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var20['onPress'] = var29;
            var32 = _closure1_slot0;
            var29 = 14;
            var30 = var28[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var28[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.T1t1WV;
            var29 = var30.bind(var31)(var29);
            var20['text'] = var29;
            var23 = var28[var23];
            var23 = var27.bind(var4)(var23);
            var23 = var23.Colors;
            var23 = var23.BRAND;
            var20['color'] = var23;
            var19 = var22.bind(var4)(var21, var20);
 1403:
            var16[1] = var19;
            var17 = null;
            if(!var18) { _fun0004_ip = 1550; continue _fun0004 }
 1415:
            var20 = _closure1_slot17;
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 37;
            var18 = var23[var21];
            var19 = var22.bind(var4)(var18);
            var18 = {};
            var26 = var26.button;
            var18['style'] = var26;
            var25 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 40;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot0;
                var2['userId'] = var5;
                var5 = _closure2_slot2;
                var2['channelId'] = var5;
                var5 = _closure2_slot1;
                var2['roleId'] = var5;
                var4 = _closure2_slot4;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onPress'] = var25;
            var27 = _closure1_slot0;
            var24 = 14;
            var25 = var23[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var23[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.hgKDnJ;
            var24 = var25.bind(var26)(var24);
            var18['text'] = var24;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.Colors;
            var21 = var21.GREY;
            var18['color'] = var21;
            var17 = var20.bind(var4)(var19, var18);
 1550:
            var16[2] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 1564:
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PopoutChecks'] = var2;
    return var1;
})();