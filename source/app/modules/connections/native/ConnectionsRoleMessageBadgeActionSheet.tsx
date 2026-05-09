// app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var1 = function PopoutCheck(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.connectionType;
            var10 = var1.connectionMetadataField;
            var3 = var1.operator;
            var9 = var1.value;
            var8 = var1.description;
            var1 = _closure1_slot19;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = _closure1_slot13;
            var2 = var2.LESS_THAN;
            if(!(var2 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = _closure1_slot13;
            var2 = var2.GREATER_THAN;
            var10 = var8;
            if(!(var2 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
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
            var3 = var2["2p7dA3"];
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
            _fun0001_ip = 4; continue _fun0001;
case 5:
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
            var3 = var2["2p7dA3"];
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
case 4:
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot17;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var13.popoutCheck;
            var2['style'] = var6;
            var12 = _closure1_slot16;
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
            var9 = _closure1_slot16;
            var7 = 17;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/medium', 'color': 'mobile-text-heading-primary'};
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var2 = function PopoutChecks(arg1) {
        var1 = arg1;
        var7 = var1.eligibilityStates;
        var1 = var1.guildId;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot19;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var _closure2_slot1 = var2;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 18;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var _closure2_slot2 = var2;
        var2 = 19;
        var2 = var9[var2];
        var6 = var8.bind(var4)(var2);
        var3 = var6.groupBy;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var4 = var1.connection_type;
                var3 = var1.application_id;
                var2 = null;
                var5 = var2 != var3;
                var3 = '';
                var2 = var3;
                if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var6 = var1.application_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = ':';
                var2 = var5.bind(var1)(var6);
case 10:
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var3)(var4, var2);
                return var1;
            }
        };
        var6 = var3.bind(var6)(var7, var2);
        var _closure2_slot3 = var6;
        var2 = global;
        var3 = var2.Object;
        var2 = var3.keys;
        var7 = var2.bind(var3)(var6);
        var3 = var7.length;
        var2 = 1;
        var2 = var3 - var2;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot0;
        var2 = 20;
        var2 = var9[var2];
        var6 = var3.bind(var4)(var2);
        var3 = var6.useToken;
        var2 = 13;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.unsafe_rawColors;
        var2 = var2.GREEN_330;
        var2 = var3.bind(var6)(var2);
        var _closure2_slot5 = var2;
        var3 = _closure1_slot16;
        var2 = _closure1_slot18;
        var1 = {};
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var18 = var1.application;
case 12:
                var2 = var17 == var18;
                var1 = undefined;
                if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var1 = var18.bot;
case 14:
                var1 = var17 != var1;
                var24 = null;
                if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var3 = _closure1_slot7;
                var30 = var18.bot;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var31 = var2;
                var1 = new var31[var3](var30, var29);
                var24 = var1 instanceof Object ? var1 : var2;
case 16:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var3 = var1.officialApplicationIds;
                var2 = var3.includes;
                var1 = var17 == var18;
                var6 = undefined;
                if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var6 = var18.id;
case 18:
                var8 = var17 != var6;
                var1 = '';
                if(!var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var1 = var6;
case 20:
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var1 = var17 != var24;
                var12 = undefined;
                if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var3 = _closure1_slot16;
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
                _fun0003_ip = 24; continue _fun0003;
case 22:
                var3 = _closure1_slot16;
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
case 24:
                var3 = _closure1_slot17;
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
                if(!var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var10 = _closure2_slot1;
                var8 = var10.popoutChecksGroupBottomMargin;
case 26:
                var6[1] = var8;
                var1['style'] = var6;
                var10 = _closure1_slot17;
                var8 = _closure1_slot6;
                var6 = {};
                var11 = _closure2_slot1;
                var11 = var11.popoutCheckGroupName;
                var6['style'] = var11;
                var11 = var17 != var19;
                var14 = null;
                if(!var11) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var16 = _closure1_slot16;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 24;
                var11 = var27[var22];
                var11 = var26.bind(var4)(var11);
                var15 = var11.Icon;
                var11 = {};
                var20 = _closure2_slot1;
                var20 = var20.popoutCheckGroupPlatformIcon;
                var11['style'] = var20;
                var20 = 25;
                var20 = var27[var20];
                var23 = var26.bind(var4)(var20);
                var21 = var23.makeSource;
                var20 = 26;
                var20 = var27[var20];
                var27 = var26.bind(var4)(var20);
                var26 = var27.isThemeDark;
                var20 = _closure2_slot2;
                var20 = var26.bind(var27)(var20);
                var26 = var19.icon;
                if(var20) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var20 = var26.lightPNG;
                _fun0003_ip = 32; continue _fun0003;
case 30:
                var20 = var26.darkPNG;
case 32:
                var20 = var21.bind(var23)(var20);
                var11['source'] = var20;
                var20 = true;
                var11['disableColor'] = var20;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var22];
                var20 = var21.bind(var4)(var20);
                var20 = var20.Icon;
                var20 = var20.Sizes;
                var20 = var20.MEDIUM;
                var11['size'] = var20;
                var14 = var16.bind(var4)(var15, var11);
case 28:
                var11 = new Array(4);
                var11[0] = var14;
                var15 = var17 != var24;
                var14 = null;
                if(!var15) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var20 = _closure1_slot16;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var21 = 24;
                var15 = var23[var21];
                var15 = var22.bind(var4)(var15);
                var16 = var15.Avatar;
                var15 = {};
                var25 = _closure2_slot1;
                var25 = var25.popoutCheckGroupPlatformIcon;
                var15['style'] = var25;
                var15['user'] = var24;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.XSMALL;
                var15['size'] = var21;
                var15['guildId'] = var4;
                var14 = var20.bind(var4)(var16, var15);
case 33:
                var11[1] = var14;
                var15 = _closure1_slot16;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 17;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {'variant': 'text-sm/medium', 'color': 'interactive-text-active'};
                var20 = var17 == var19;
                var16 = undefined;
                if(var20) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var16 = var19.name;
case 35:
                if(!(var17 == var16)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var19 = var17 == var18;
                var17 = undefined;
                if(var19) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var17 = var18.name;
case 39:
                var16 = var17;
case 37:
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
                    var4 = 27;
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
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot20;
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
    var _closure1_slot21 = var2;
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
    var5 = var15.bind(var1)(var5);
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
    var5 = var15.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var12 = 4;
    var5 = var7[var12];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var13 = 8;
    var5 = var7[var13];
    var5 = var15.bind(var1)(var5);
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
    var5 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot16 = var8;
    var8 = var5.jsxs;
    var _closure1_slot17 = var8;
    var5 = var5.Fragment;
    var _closure1_slot18 = var5;
    var5 = 12;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var8 = {};
    var5 = {'flexDirection': 'column', 'alignItems': 'center', 'padding': 16};
    var8['container'] = var5;
    var5 = {'width': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'paddingBottom': 16, 'borderBottomWidth': 1};
    var14 = 13;
    var11 = var7[var14];
    var11 = var15.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var5['borderBottomColor'] = var11;
    var11 = var7[var14];
    var11 = var15.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var5['marginBottom'] = var11;
    var8['header'] = var5;
    var5 = {'marginRight': 8, 'height': 24, 'width': 24};
    var8['verifiedContainer'] = var5;
    var5 = {'flexShrink': 1, 'flexDirection': 'column'};
    var8['headerTextContainer'] = var5;
    var5 = {'position': 'absolute', 'left': 0, 'top': 0};
    var8['verifiedCheck'] = var5;
    var11 = {};
    var5 = 40;
    var11['marginVertical'] = var5;
    var8['loadingSpinner'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8, 'marginLeft': 32, 'paddingRight': 20};
    var8['popoutCheck'] = var11;
    var11 = {};
    var11['marginRight'] = var13;
    var16 = var7[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_FEEDBACK_POSITIVE;
    var11['tintColor'] = var16;
    var8['popoutCheckIcon'] = var11;
    var11 = {'width': '100%', 'marginBottom': 24};
    var8['popoutChecksGroup'] = var11;
    var11 = {'paddingBottom': 12, 'borderBottomWidth': 1, 'borderBottomColor': null, 'marginBottom': 12};
    var14 = var7[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var11['borderBottomColor'] = var14;
    var8['popoutChecksGroupBottomMargin'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center'};
    var8['popoutCheckGroupName'] = var11;
    var11 = {};
    var11['marginRight'] = var13;
    var8['popoutCheckGroupPlatformIcon'] = var11;
    var11 = {};
    var11['marginBottom'] = var13;
    var8['button'] = var11;
    var11 = {};
    var11['marginLeft'] = var12;
    var8['botTag'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot19 = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectionsRoleMessageBadgeActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var13 = var1.userId;
            var _closure2_slot0 = var13;
            var11 = var1.roleId;
            var _closure2_slot1 = var11;
            var7 = var1.channelId;
            var _closure2_slot2 = var7;
            var25 = var1.guildId;
            var _closure2_slot3 = var25;
            var1 = _closure1_slot19;
            var4 = undefined;
            var22 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 28;
            var3 = var2[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 29;
            var3 = var2[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.CONNECTIONS_ROLE_POPOUT;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var _closure2_slot4 = var5;
            var3 = _closure1_slot0;
            var8 = 30;
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
            if(var10) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var10 = var9.roles;
            var9 = var10.includes;
            var20 = var9.bind(var10)(var11);
case 41:
            var10 = _closure1_slot4;
            var12 = var10.useEffect;
            var9 = new Array(4);
            var9[0] = var13;
            var9[1] = var11;
            var9[2] = var7;
            var9[3] = var25;
            var7 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 31;
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
                var7 = 32;
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
            var7[0] = var25;
            var7[1] = var11;
            var7[2] = var6;
            var7[3] = var27;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var4 = _closure2_slot7;
                    var3 = null;
                    var2 = var3 == var4;
case 43:
                    if(!var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 33;
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
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var7);
            var6 = var17 == var27;
            var18 = undefined;
            if(var6) { _fun0004_ip = 47; continue _fun0004 }
case 48:
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
case 47:
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
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 3; continue _fun0006 }
case 49:
                    var5 = _closure1_slot10;
                    var4 = var5.getRole;
                    var3 = _closure2_slot5;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 3:
                    return var1;
                }
            };
            var32 = var8.bind(var9)(var7, var6);
            if(!(var17 != var27)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var6 = var27.length;
            if(!(var3 === var6)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var2 = var27[var2];
            var2 = var2.length;
            if(!(var3 !== var2)) { _fun0004_ip = 50; continue _fun0004 }
case 52:
            var2 = var27.length;
            if(!(var3 !== var2)) { _fun0004_ip = 28; continue _fun0004 }
case 54:
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
            var3 = var2.D7uftB;
            var2 = {};
            var30 = var6.bind(var7)(var3, var2);
            _fun0004_ip = 55; continue _fun0004;
case 28:
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
            var3 = var2["0eBj3x"];
            var2 = {};
            var30 = var6.bind(var7)(var3, var2);
case 55:
            _fun0004_ip = 56; continue _fun0004;
case 50:
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
            var2 = var2.jDym4E;
            var30 = var3.bind(var6)(var2);
case 56:
            var3 = _closure1_slot16;
            var6 = _closure1_slot0;
            var28 = _closure1_slot2;
            var1 = var28[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot16;
            var5 = 34;
            var5 = var28[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var10 = _closure1_slot17;
            var9 = _closure1_slot6;
            var8 = {};
            var11 = var22.container;
            var8['style'] = var11;
            var13 = _closure1_slot17;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var22.header;
            var11['style'] = var14;
            var16 = _closure1_slot16;
            var15 = _closure1_slot6;
            var14 = {};
            var19 = var22.verifiedContainer;
            var14['style'] = var19;
            var26 = _closure1_slot16;
            var23 = _closure1_slot1;
            var19 = 35;
            var19 = var28[var19];
            var23 = var23.bind(var4)(var19);
            var19 = {};
            var28 = var22.verifiedCheck;
            var19['style'] = var28;
            var31 = var17 == var29;
            var28 = undefined;
            if(var31) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var28 = var29.id;
case 57:
            if(!(var17 == var28)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var28 = _closure1_slot15;
case 59:
            var19['guildId'] = var28;
            var29 = var17 != var32;
            var28 = undefined;
            if(!var29) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var28 = var32;
case 61:
            var19['role'] = var28;
            var28 = 24;
            var19['size'] = var28;
            var19 = var26.bind(var4)(var23, var19);
            var14['children'] = var19;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var19 = _closure1_slot17;
            var16 = _closure1_slot6;
            var15 = {};
            var23 = var22.headerTextContainer;
            var15['style'] = var23;
            var28 = _closure1_slot16;
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var31 = 17;
            var23 = var23[var31];
            var23 = var26.bind(var4)(var23);
            var26 = var23.Text;
            var23 = {'variant': 'text-lg/semibold', 'color': 'mobile-text-heading-primary'};
            var33 = var17 == var32;
            var29 = undefined;
            if(var33) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var29 = var32.name;
case 63:
            var23['children'] = var29;
            var26 = var28.bind(var4)(var26, var23);
            var23 = new Array(2);
            var23[0] = var26;
            var29 = _closure1_slot16;
            var28 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var31];
            var26 = var28.bind(var4)(var26);
            var28 = var26.Text;
            var26 = {'variant': 'text-xs/normal', 'color': 'text-default'};
            var26['children'] = var30;
            var26 = var29.bind(var4)(var28, var26);
            var23[1] = var26;
            var15['children'] = var23;
            var15 = var19.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            if(!(var17 != var27)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var12 = var27.flat;
            var12 = var12.bind(var27)();
            if(!(var17 == var12)) { _fun0004_ip = 67; continue _fun0004 }
case 65:
            var14 = _closure1_slot16;
            var13 = _closure1_slot5;
            var12 = {};
            var15 = var22.loadingSpinner;
            var12['style'] = var15;
            var15 = 'large';
            var12['size'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            _fun0004_ip = 68; continue _fun0004;
case 67:
            var15 = _closure1_slot17;
            var14 = _closure1_slot18;
            var13 = {};
            var23 = _closure1_slot16;
            var19 = _closure1_slot21;
            var16 = {};
            var26 = var27.flat;
            var26 = var26.bind(var27)();
            var16['eligibilityStates'] = var26;
            var16['guildId'] = var25;
            var19 = var23.bind(var4)(var19, var16);
            var16 = new Array(3);
            var16[0] = var19;
            var19 = null;
            if(var20) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var25 = _closure1_slot16;
            var23 = _closure1_slot6;
            var20 = {};
            var26 = var22.button;
            var20['style'] = var26;
            var28 = _closure1_slot16;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var26 = 36;
            var26 = var33[var26];
            var26 = var32.bind(var4)(var26);
            var27 = var26.Button;
            var26 = {};
            var29 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 37;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.hideActionSheet;
                var3 = 'ConnectionsRoleMessageBadgeActionSheet';
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot0;
                var2 = 38;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildRoleConnectionsModal;
                var2 = {};
                var5 = _closure2_slot3;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26['onPress'] = var29;
            var29 = 14;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.T1t1WV;
            var29 = var30.bind(var31)(var29);
            var26['text'] = var29;
            var29 = 'primary';
            var26['variant'] = var29;
            var29 = true;
            var26['grow'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var20['children'] = var26;
            var19 = var25.bind(var4)(var23, var20);
case 69:
            var16[1] = var19;
            var17 = null;
            if(!var18) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var20 = _closure1_slot16;
            var19 = _closure1_slot6;
            var18 = {};
            var22 = var22.button;
            var18['style'] = var22;
            var23 = _closure1_slot16;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 36;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var22 = var21.Button;
            var21 = {};
            var24 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 39;
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
            var21['onPress'] = var24;
            var24 = 14;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.hgKDnG;
            var24 = var25.bind(var26)(var24);
            var21['text'] = var24;
            var24 = 'secondary';
            var21['variant'] = var24;
            var24 = true;
            var21['grow'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 71:
            var16[2] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 68:
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