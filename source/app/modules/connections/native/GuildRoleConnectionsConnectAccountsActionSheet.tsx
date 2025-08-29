// app/modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function PlatformIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.platformType;
            var2 = _closure1_slot31;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 16;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var9 = var2.bind(var4)();
            var2 = 17;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.get;
            var7 = var2.bind(var3)(var6);
            var8 = _closure1_slot0;
            var2 = 18;
            var2 = var10[var2];
            var6 = var8.bind(var4)(var2);
            var3 = var6.makeSource;
            var2 = 19;
            var2 = var10[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isThemeLight;
            var2 = var2.bind(var8)(var9);
            var7 = var7.icon;
            if(var2) { _fun0001_ip = 129; continue _fun0001 }
 121:
            var2 = var7.darkPNG;
            _fun0001_ip = 135; continue _fun0001;
 129:
            var2 = var7.lightPNG;
 135:
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot28;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['source'] = var6;
            var5 = var5.platformIcon;
            var1['style'] = var5;
            var5 = true;
            var1['disableColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function ChannelName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.channel;
            var7 = var1.style;
            var1 = _closure1_slot31;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelIcon;
            var12 = var1.bind(var2)(var9);
            var3 = _closure1_slot29;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = var10.channelName;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = null;
            var5 = var7 != var12;
            if(!var5) { _fun0002_ip = 144; continue _fun0002 }
 98:
            var11 = _closure1_slot28;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 20;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['source'] = var12;
            var12 = var10.channelNameIcon;
            var5['style'] = var12;
            var7 = var11.bind(var4)(var8, var5);
 144:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot28;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 22;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'heading-lg/semibold', 'color': 'text-normal', 'style': null, 'lineClamp': 1};
            var10 = var10.channelNameText;
            var6['style'] = var10;
            var9 = var9.name;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function ConnectionsCheck(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var14 = var1.connectionType;
            var13 = var1.connectionMetadataField;
            var4 = var1.operator;
            var12 = var1.value;
            var9 = var1.result;
            var11 = var1.description;
            var1 = _closure1_slot31;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var11)) { _fun0003_ip = 406; continue _fun0003 }
 59:
            var3 = _closure1_slot17;
            var3 = var3.EQUAL;
            if(!(var3 !== var4)) { _fun0003_ip = 244; continue _fun0003 }
 76:
            var3 = _closure1_slot17;
            var3 = var3.NOT_EQUAL;
            if(!(var3 !== var4)) { _fun0003_ip = 209; continue _fun0003 }
 90:
            var3 = _closure1_slot17;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var4)) { _fun0003_ip = 171; continue _fun0003 }
 104:
            var3 = _closure1_slot17;
            var3 = var3.GREATER_THAN;
            if(!(var3 !== var4)) { _fun0003_ip = 133; continue _fun0003 }
 118:
            if(!(var5 !== var4)) { _fun0003_ip = 131; continue _fun0003 }
 122:
            var10 = undefined;
            if(!(var1 === var4)) { _fun0003_ip = 344; continue _fun0003 }
 131:
            return var1;
 133:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.8W9OXV;
            _fun0003_ip = 344; continue _fun0003;
 171:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.Ef35xs;
            _fun0003_ip = 344; continue _fun0003;
 209:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.otcpTE;
            _fun0003_ip = 344; continue _fun0003;
 244:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 23;
            var3 = var3[var8];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3.0BlpbG;
            var3 = _closure1_slot19;
            var3 = var3.PAYPAL;
            var3 = var14 === var3;
            if(!var3) { _fun0003_ip = 308; continue _fun0003 }
 294:
            var15 = _closure1_slot16;
            var15 = var15.PAYPAL_VERIFIED;
            var3 = var13 === var15;
 308:
            var10 = var6;
            if(!var3) { _fun0003_ip = 344; continue _fun0003 }
 314:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.dcSDhY;
 344:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var8 = var6.bind(var5)(var3);
            var6 = var8.getConnectionsCheckText;
            var3 = {};
            var3['connectionType'] = var14;
            var3['connectionMetadataField'] = var13;
            var3['operator'] = var4;
            var3['operatorText'] = var10;
            var3['value'] = var12;
            var6 = var6.bind(var8)(var3);
            _fun0003_ip = 655; continue _fun0003;
 406:
            var3 = _closure1_slot17;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var4)) { _fun0003_ip = 550; continue _fun0003 }
 423:
            var3 = _closure1_slot17;
            var3 = var3.GREATER_THAN;
            var6 = var11;
            if(!(var3 === var4)) { _fun0003_ip = 655; continue _fun0003 }
 443:
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 23;
            var8 = var13[var3];
            var8 = var4.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.format;
            var3 = var13[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3.2p7dAw;
            var3 = {};
            var3['description'] = var11;
            var13 = global;
            var16 = var13.Math;
            var15 = var16.max;
            var13 = var13.Number;
            var14 = var13.bind(var5)(var12);
            var13 = 1;
            var14 = var14 + var13;
            var13 = 0;
            var13 = var15.bind(var16)(var13, var14);
            var3['count'] = var13;
            var6 = var8.bind(var10)(var4, var3);
            _fun0003_ip = 655; continue _fun0003;
 550:
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 23;
            var8 = var13[var3];
            var8 = var4.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.format;
            var3 = var13[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3.2p7dAw;
            var3 = {};
            var3['description'] = var11;
            var11 = global;
            var14 = var11.Math;
            var13 = var14.max;
            var11 = var11.Number;
            var12 = var11.bind(var5)(var12);
            var11 = 1;
            var12 = var12 - var11;
            var11 = 0;
            var11 = var13.bind(var14)(var11, var12);
            var3['count'] = var11;
            var6 = var8.bind(var10)(var4, var3);
 655:
            var3 = var1 == var6;
            var1 = null;
            if(var3) { _fun0003_ip = 744; continue _fun0003 }
 664:
            var4 = _closure1_slot28;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var8 = 'text-xs/normal';
            var2['variant'] = var8;
            var8 = 'text-danger';
            if(!var9) { _fun0003_ip = 720; continue _fun0003 }
 714:
            var8 = 'header-secondary';
 720:
            var2['color'] = var8;
            var7 = var7.connectionsCheck;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 744:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function ConnectionsChecks(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.eligibilityStatesGroups;
            var _closure2_slot0 = var3;
            var2 = var1.onPlatformConnect;
            var _closure2_slot1 = var2;
            var2 = var1.onPlatformConnected;
            var _closure2_slot2 = var2;
            var13 = var1.initialAttemptedPlatformType;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var6 = _closure1_slot31;
            var6 = var6.bind(var4)();
            var _closure2_slot3 = var6;
            var8 = _closure1_slot5;
            var7 = var8.useState;
            var6 = {};
            var7 = var7.bind(var8)(var6);
            var6 = _closure1_slot4;
            var11 = 2;
            var6 = var6.bind(var4)(var7, var11);
            var8 = 0;
            var7 = var6[var8];
            var _closure2_slot4 = var7;
            var7 = 1;
            var6 = var6[var7];
            var _closure2_slot5 = var6;
            var9 = _closure1_slot5;
            var6 = var9.useState;
            var9 = var6.bind(var9)(var8);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var9, var11);
            var9 = var6[var8];
            var _closure2_slot6 = var9;
            var6 = var6[var7];
            var _closure2_slot7 = var6;
            var10 = _closure1_slot5;
            var9 = var10.useState;
            var12 = null;
            var14 = var12 != var13;
            var6 = null;
            if(!var14) { _fun0004_ip = 199; continue _fun0004 }
 196:
            var6 = var13;
 199:
            var9 = var9.bind(var10)(var6);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var9, var11);
            var10 = var6[var8];
            _closure2_slot8 = var10;
            var6 = var6[var7];
            _closure2_slot9 = var6;
            var9 = _closure1_slot5;
            var6 = var9.useState;
            var9 = var6.bind(var9)(var12);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var9, var11);
            var9 = var6[var8];
            _closure2_slot10 = var9;
            var6 = var6[var7];
            _closure2_slot11 = var6;
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.flatten;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            _closure2_slot12 = var3;
            var11 = _closure1_slot5;
            var8 = var11.useMemo;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.groupBy;
                var2 = _closure2_slot12;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.connection_type;
                        var3 = var1.application_id;
                        var2 = null;
                        var5 = var2 != var3;
                        var3 = '';
                        var2 = var3;
                        if(!var5) { _fun0005_ip = 59; continue _fun0005 }
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
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var8.bind(var11)(var6, var7);
            _closure2_slot13 = var8;
            var11 = _closure1_slot5;
            var7 = var11.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure2_slot7;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var7.bind(var11)(var3, var6);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var3 = new Array(4);
            var3[0] = var8;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 143; continue _fun0006 }
 16:
                    var4 = _closure2_slot13;
                    var7 = _closure2_slot8;
                    var3 = _closure2_slot10;
                    var3 = var2 != var3;
                    var6 = '';
                    var5 = var6;
                    if(!var3) { _fun0006_ip = 73; continue _fun0006 }
 42:
                    var3 = _closure2_slot10;
                    var9 = var3.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var3 = ':';
                    var5 = var8.bind(var3)(var9);
 73:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var3 = var3.concat;
                    var3 = var3.bind(var6)(var7, var5);
                    var4 = var4[var3];
                    if(!(var2 != var4)) { _fun0006_ip = 143; continue _fun0006 }
 100:
                    var3 = var4.every;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0006_ip = 143; continue _fun0006 }
 123:
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 26;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useColorValue;
            var2 = _closure1_slot26;
            var2 = var2.GREEN_330;
            var2 = var3.bind(var6)(var2);
            var2 = var2.hex;
            _closure2_slot14 = var2;
            var3 = _closure1_slot28;
            var2 = _closure1_slot30;
            var1 = {};
            var6 = global;
            var7 = var6.Object;
            var6 = var7.keys;
            var8 = var6.bind(var7)(var8);
            var7 = var8.sort;
            var6 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot13;
                    var3 = arg1;
                    var5 = var4[var3];
                    var4 = var5.every;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var7 = var4.bind(var5)(var3);
                    var3 = _closure2_slot13;
                    var2 = arg2;
                    var3 = var3[var2];
                    var2 = var3.every;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var4 = var2.bind(var3)(var1);
                    var3 = true;
                    if(!(var3 === var7)) { _fun0007_ip = 78; continue _fun0007 }
 69:
                    var1 = 1;
                    var2 = false;
                    if(!(var2 !== var4)) { _fun0007_ip = 101; continue _fun0007 }
 78:
                    var6 = false;
                    var2 = 0;
                    if(!(var6 === var7)) { _fun0007_ip = 98; continue _fun0007 }
 86:
                    var2 = 0;
                    if(!(var3 === var4)) { _fun0007_ip = 98; continue _fun0007 }
 92:
                    var2 = -1;
 98:
                    var1 = var2;
 101:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var6);
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = arg1;
                    var1 = _closure2_slot13;
                    var3 = var1[var5];
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.operator;
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var4 = var3.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.operator;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var14 = var4.bind(var3)(var2);
                    var17 = null;
                    var9 = var17 == var1;
                    if(var9) { _fun0008_ip = 65; continue _fun0008 }
 59:
                    var9 = var1.result;
 65:
                    if(!var9) { _fun0008_ip = 86; continue _fun0008 }
 68:
                    var2 = var14.every;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var9 = var2.bind(var14)(var1);
 86:
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
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.get;
                    var25 = var2.bind(var3)(var5);
                    var _closure3_slot1 = var25;
                    var10 = var17 == var25;
                    if(var10) { _fun0008_ip = 154; continue _fun0008 }
 149:
                    var10 = var25.enabled;
 154:
                    var2 = var17 == var1;
                    var26 = undefined;
                    if(var2) { _fun0008_ip = 168; continue _fun0008 }
 163:
                    var26 = var1.application;
 168:
                    var _closure3_slot2 = var26;
                    var2 = var17 == var26;
                    var1 = undefined;
                    if(var2) { _fun0008_ip = 187; continue _fun0008 }
 181:
                    var1 = var26.bot;
 187:
                    var1 = var17 != var1;
                    var15 = null;
                    if(!var1) { _fun0008_ip = 226; continue _fun0008 }
 196:
                    var3 = _closure1_slot10;
                    var31 = var26.bot;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var32 = var2;
                    var1 = new var32[var3](var31, var30);
                    var15 = var1 instanceof Object ? var1 : var2;
 226:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var1 = var3[var1];
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.officialApplicationIds;
                    var2 = var3.includes;
                    var1 = var17 == var26;
                    var6 = undefined;
                    if(var1) { _fun0008_ip = 271; continue _fun0008 }
 266:
                    var6 = var26.id;
 271:
                    var7 = var17 != var6;
                    var1 = '';
                    if(!var7) { _fun0008_ip = 285; continue _fun0008 }
 282:
                    var1 = var6;
 285:
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot4;
                    var6 = var17 == var25;
                    var2 = undefined;
                    if(var6) { _fun0008_ip = 308; continue _fun0008 }
 303:
                    var2 = var25.type;
 308:
                    if(!(var17 == var2)) { _fun0008_ip = 316; continue _fun0008 }
 312:
                    var2 = _closure1_slot18;
 316:
                    var3 = var3[var2];
                    var6 = !var9;
                    if(!var6) { _fun0008_ip = 330; continue _fun0008 }
 326:
                    var6 = var17 != var3;
 330:
                    if(!var6) { _fun0008_ip = 341; continue _fun0008 }
 333:
                    var2 = _closure2_slot6;
                    var6 = var3 <= var2;
 341:
                    var8 = _closure1_slot28;
                    if(var9) { _fun0008_ip = 705; continue _fun0008 }
 351:
                    if(var6) { _fun0008_ip = 523; continue _fun0008 }
 357:
                    if(var10) { _fun0008_ip = 460; continue _fun0008 }
 360:
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 22;
                    var2 = var18[var2];
                    var2 = var16.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                    var7 = 23;
                    var11 = var18[var7];
                    var11 = var16.bind(var4)(var11);
                    var13 = var11.intl;
                    var11 = var13.string;
                    var7 = var18[var7];
                    var7 = var16.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.cEts6+;
                    var7 = var11.bind(var13)(var7);
                    var2['children'] = var7;
                    var7 = var8.bind(var4)(var3, var2);
                    _fun0008_ip = 518; continue _fun0008;
 460:
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var2 = 20;
                    var2 = var16[var2];
                    var3 = var13.bind(var4)(var2);
                    var2 = {};
                    var11 = 29;
                    var11 = var16[var11];
                    var11 = var13.bind(var4)(var11);
                    var2['source'] = var11;
                    var11 = _closure2_slot3;
                    var11 = var11.connectionsChecksGroupCaret;
                    var2['style'] = var11;
                    var7 = var8.bind(var4)(var3, var2);
 518:
                    _fun0008_ip = 703; continue _fun0008;
 523:
                    var13 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var11 = 28;
                    var2 = var19[var11];
                    var3 = var13.bind(var4)(var2);
                    var2 = {};
                    var16 = var19[var11];
                    var16 = var13.bind(var4)(var16);
                    var16 = var16.Sizes;
                    var16 = var16.SMALL;
                    var2['size'] = var16;
                    var16 = var19[var11];
                    var16 = var13.bind(var4)(var16);
                    var16 = var16.Looks;
                    var16 = var16.LINK;
                    var2['look'] = var16;
                    var11 = var19[var11];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.Colors;
                    var11 = var11.LINK;
                    var2['color'] = var11;
                    var11 = _closure2_slot3;
                    var11 = var11.connectionsChecksGroupRetryButton;
                    var2['style'] = var11;
                    var18 = _closure1_slot0;
                    var11 = 23;
                    var13 = var19[var11];
                    var13 = var18.bind(var4)(var13);
                    var16 = var13.intl;
                    var13 = var16.string;
                    var11 = var19[var11];
                    var11 = var18.bind(var4)(var11);
                    var11 = var11.t;
                    var11 = var11.5911LS;
                    var11 = var13.bind(var16)(var11);
                    var2['text'] = var11;
                    var11 = true;
                    var2['shrink'] = var11;
                    var7 = var8.bind(var4)(var3, var2);
 703:
                    _fun0008_ip = 763; continue _fun0008;
 705:
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var2 = 20;
                    var2 = var16[var2];
                    var3 = var13.bind(var4)(var2);
                    var2 = {};
                    var11 = 27;
                    var11 = var16[var11];
                    var11 = var13.bind(var4)(var11);
                    var2['source'] = var11;
                    var11 = _closure2_slot3;
                    var11 = var11.connectionsChecksGroupCheckmark;
                    var2['style'] = var11;
                    var7 = var8.bind(var4)(var3, var2);
 763:
                    var2 = var17 == var25;
                    var3 = undefined;
                    if(var2) { _fun0008_ip = 777; continue _fun0008 }
 772:
                    var3 = var25.type;
 777:
                    var2 = _closure1_slot19;
                    var2 = var2.STEAM;
                    var18 = undefined;
                    if(!(var3 === var2)) { _fun0008_ip = 857; continue _fun0008 }
 793:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 23;
                    var3 = var13[var2];
                    var3 = var11.bind(var4)(var3);
                    var8 = var3.intl;
                    var3 = var8.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.NcZh6O;
                    var2 = var3.bind(var8)(var2);
                    var _closure3_slot0 = var2;
                    var18 = var2;
 857:
                    if(var1) { _fun0008_ip = 935; continue _fun0008 }
 860:
                    var1 = var17 != var15;
                    var19 = undefined;
                    if(!var1) { _fun0008_ip = 1005; continue _fun0008 }
 872:
                    var3 = _closure1_slot28;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 31;
                    var1 = var8[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var8 = _closure2_slot3;
                    var8 = var8.botTag;
                    var1['style'] = var8;
                    var8 = var15.isVerifiedBot;
                    var8 = var8.bind(var15)();
                    var1['verified'] = var8;
                    var19 = var3.bind(var4)(var2, var1);
                    _fun0008_ip = 1005; continue _fun0008;
 935:
                    var3 = _closure1_slot28;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 30;
                    var1 = var8[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var8 = _closure2_slot3;
                    var8 = var8.botTag;
                    var1['style'] = var8;
                    var8 = _closure1_slot27;
                    var1['guildId'] = var8;
                    var8 = _closure2_slot14;
                    var1['roleColor'] = var8;
                    var8 = 16;
                    var1['size'] = var8;
                    var19 = var3.bind(var4)(var2, var1);
 1005:
                    var3 = _closure1_slot29;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var8 = 'button';
                    var1['accessibilityRole'] = var8;
                    var8 = _closure2_slot3;
                    var11 = var8.connectionsChecksGroup;
                    var8 = new Array(3);
                    var8[0] = var11;
                    var11 = null;
                    if(!var9) { _fun0008_ip = 1056; continue _fun0008 }
 1046:
                    var13 = _closure2_slot3;
                    var11 = var13.connectionsChecksGroupPassed;
 1056:
                    var8[1] = var11;
                    var11 = null;
                    if(var10) { _fun0008_ip = 1075; continue _fun0008 }
 1065:
                    var13 = _closure2_slot3;
                    var11 = var13.connectionsChecksGroupPlatformDisabled;
 1075:
                    var8[2] = var11;
                    var1['style'] = var8;
                    var8 = var9;
                    if(var8) { _fun0008_ip = 1092; continue _fun0008 }
 1089:
                    var8 = !var10;
 1092:
                    var1['disabled'] = var8;
                    var8 = function onPress() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var1 = _closure3_slot1;
                            var4 = null;
                            var5 = var4 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var5) { _fun0009_ip = 29; continue _fun0009 }
 20:
                            var5 = _closure3_slot1;
                            var3 = var5.type;
 29:
                            if(!(var4 == var3)) { _fun0009_ip = 40; continue _fun0009 }
 33:
                            var3 = _closure1_slot18;
 40:
                            var5 = _closure3_slot2;
                            var5 = var4 != var5;
                            var4 = null;
                            if(!var5) { _fun0009_ip = 57; continue _fun0009 }
 53:
                            var4 = _closure3_slot2;
 57:
                            var6 = _closure2_slot5;
                            var5 = {};
                            var9 = _closure2_slot4;
                            var10 = var5;
                            var7 = copyDataProperties(var10, var9);
                            var7 = global;
                            var8 = var7.Date;
                            var7 = var8.now;
                            var7 = var7.bind(var8)();
                            var5[var3] = var7;
                            var5 = var6.bind(var1)(var5);
                            var5 = _closure2_slot9;
                            var5 = var5.bind(var1)(var3);
                            var5 = _closure2_slot11;
                            var5 = var5.bind(var1)(var4);
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var1)(var3, var4);
                            return var1;
                        }
                    };
                    var1['onPress'] = var8;
                    var8 = null;
                    if(var9) { _fun0008_ip = 1259; continue _fun0008 }
 1115:
                    var8 = null;
                    if(!var6) { _fun0008_ip = 1259; continue _fun0008 }
 1123:
                    var10 = _closure1_slot28;
                    var9 = _closure1_slot8;
                    var6 = {};
                    var11 = _closure2_slot3;
                    var11 = var11.connectionsChecksGroupRequirementsNotMet;
                    var6['style'] = var11;
                    var16 = _closure1_slot28;
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var11 = 22;
                    var11 = var28[var11];
                    var11 = var27.bind(var4)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-xs/normal', 'color': 'always-white'};
                    var20 = 23;
                    var22 = var28[var20];
                    var22 = var27.bind(var4)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var20 = var28[var20];
                    var20 = var27.bind(var4)(var20);
                    var20 = var20.t;
                    var20 = var20.UB3hKi;
                    var20 = var22.bind(var23)(var20);
                    var11['children'] = var20;
                    var11 = var16.bind(var4)(var13, var11);
                    var6['children'] = var11;
                    var8 = var10.bind(var4)(var9, var6);
 1259:
                    var6 = new Array(5);
                    var6[0] = var8;
                    var9 = var17 != var25;
                    var8 = null;
                    if(!var9) { _fun0008_ip = 1302; continue _fun0008 }
 1276:
                    var11 = _closure1_slot28;
                    var10 = _closure1_slot33;
                    var9 = {};
                    var13 = var25.type;
                    var9['platformType'] = var13;
                    var8 = var11.bind(var4)(var10, var9);
 1302:
                    var6[1] = var8;
                    var9 = var17 != var15;
                    var8 = null;
                    if(!var9) { _fun0008_ip = 1398; continue _fun0008 }
 1315:
                    var11 = _closure1_slot28;
                    var10 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 32;
                    var9 = var16[var13];
                    var10 = var10.bind(var4)(var9);
                    var9 = {};
                    var20 = _closure2_slot3;
                    var20 = var20.appIcon;
                    var9['style'] = var20;
                    var9['user'] = var15;
                    var15 = _closure1_slot0;
                    var13 = var16[var13];
                    var13 = var15.bind(var4)(var13);
                    var13 = var13.AvatarSizes;
                    var13 = var13.XSMALL;
                    var9['size'] = var13;
                    var9['guildId'] = var4;
                    var8 = var11.bind(var4)(var10, var9);
 1398:
                    var6[2] = var8;
                    var10 = _closure1_slot29;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var16 = _closure2_slot3;
                    var11 = var16.connectionsChecksGroupTextContainer;
                    var8['style'] = var11;
                    var15 = _closure1_slot29;
                    var13 = _closure1_slot8;
                    var11 = {};
                    var16 = var16.connectionsChecksGroupTextNameContainer;
                    var11['style'] = var16;
                    var22 = _closure1_slot28;
                    var20 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var16 = 22;
                    var16 = var23[var16];
                    var16 = var20.bind(var4)(var16);
                    var20 = var16.Text;
                    var16 = {'variant': 'text-md/medium', 'color': 'header-primary'};
                    var27 = var17 == var25;
                    var23 = undefined;
                    if(var27) { _fun0008_ip = 1503; continue _fun0008 }
 1498:
                    var23 = var25.name;
 1503:
                    if(!(var17 == var23)) { _fun0008_ip = 1524; continue _fun0008 }
 1507:
                    var27 = var17 == var26;
                    var25 = undefined;
                    if(var27) { _fun0008_ip = 1521; continue _fun0008 }
 1516:
                    var25 = var26.name;
 1521:
                    var23 = var25;
 1524:
                    var16['children'] = var23;
                    var20 = var22.bind(var4)(var20, var16);
                    var16 = new Array(3);
                    var16[0] = var20;
                    var16[1] = var19;
                    var18 = var17 != var18;
                    var17 = null;
                    if(!var18) { _fun0008_ip = 1673; continue _fun0008 }
 1555:
                    var20 = _closure1_slot28;
                    var19 = _closure1_slot7;
                    var18 = {};
                    var22 = function onPress() {
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 33;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var2);
                        var3 = _closure3_slot0;
                        var2 = null;
                        var3 = var2 != var3;
                        var2 = 'tooltip is null';
                        var2 = var4.bind(var1)(var3, var2);
                        var2 = 34;
                        var2 = var8[var2];
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var6 = 'CONNECTIONS_STEAM_TOOLTIP';
                        var2['key'] = var6;
                        var6 = 35;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var2['icon'] = var6;
                        var5 = _closure3_slot0;
                        var2['content'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var18['onPress'] = var22;
                    var23 = _closure1_slot28;
                    var26 = _closure1_slot1;
                    var27 = _closure1_slot2;
                    var25 = 20;
                    var21 = var27[var25];
                    var22 = var26.bind(var4)(var21);
                    var21 = {};
                    var28 = 35;
                    var28 = var27[var28];
                    var28 = var26.bind(var4)(var28);
                    var21['source'] = var28;
                    var25 = var27[var25];
                    var25 = var26.bind(var4)(var25);
                    var25 = var25.Sizes;
                    var25 = var25.SMALL_20;
                    var21['size'] = var25;
                    var24 = _closure2_slot3;
                    var24 = var24.connectionsChecksGroupTextNameInfoIcon;
                    var21['style'] = var24;
                    var21 = var23.bind(var4)(var22, var21);
                    var18['children'] = var21;
                    var17 = var20.bind(var4)(var19, var18);
 1673:
                    var16[2] = var17;
                    var11['children'] = var16;
                    var13 = var15.bind(var4)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var13 = var14.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var10 = var1.connection_type;
                        var5 = var1.connection_metadata_field;
                        var9 = var1.operator;
                        var8 = var1.value;
                        var7 = var1.result;
                        var6 = var1.description;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 33;
                        var2 = var12[var3];
                        var4 = undefined;
                        var15 = var11.bind(var4)(var2);
                        var2 = null;
                        var14 = var2 != var5;
                        var13 = 'connectionMetadataField is null';
                        var13 = var15.bind(var4)(var14, var13);
                        var13 = var12[var3];
                        var15 = var11.bind(var4)(var13);
                        var14 = var2 != var9;
                        var13 = 'operator is null';
                        var13 = var15.bind(var4)(var14, var13);
                        var3 = var12[var3];
                        var11 = var11.bind(var4)(var3);
                        var3 = var2 != var8;
                        var2 = 'value is null';
                        var2 = var11.bind(var4)(var3, var2);
                        var3 = _closure1_slot28;
                        var2 = _closure1_slot35;
                        var1 = {};
                        var1['connectionType'] = var10;
                        var1['connectionMetadataField'] = var5;
                        var1['operator'] = var9;
                        var1['value'] = var8;
                        var1['result'] = var7;
                        var1['description'] = var6;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    };
                    var12 = var13.bind(var14)(var12);
                    var11[1] = var12;
                    var8['children'] = var11;
                    var8 = var10.bind(var4)(var9, var8);
                    var6[3] = var8;
                    var6[4] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function ConnectedUserAccountOptions(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var2 = var1.account;
            var _closure2_slot0 = var2;
            var3 = var1.setShowPreviewInvisibleIcon;
            var _closure2_slot1 = var3;
            var1 = var1.setShowPreviewMetadata;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot31;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var1 = var2.friendSync;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot4;
            var8 = 2;
            var1 = var1.bind(var4)(var3, var8);
            var6 = 0;
            var14 = var1[var6];
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot3 = var1;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var1 = var2.showActivity;
            var7 = var7.bind(var10)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var7, var8);
            var13 = var1[var6];
            var1 = var1[var3];
            var _closure2_slot4 = var1;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var1 = var2.metadataVisibility;
            var1 = var3 === var1;
            var7 = var7.bind(var10)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var7, var8);
            var10 = var1[var6];
            var _closure2_slot5 = var10;
            var1 = var1[var3];
            var _closure2_slot6 = var1;
            var12 = _closure1_slot5;
            var7 = var12.useState;
            var1 = var2.visibility;
            var1 = var3 === var1;
            var7 = var7.bind(var12)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var7, var8);
            var12 = var1[var6];
            var _closure2_slot7 = var12;
            var1 = var1[var3];
            var _closure2_slot8 = var1;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 36;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = function() {
                var4 = _closure2_slot1;
                var1 = _closure2_slot7;
                var3 = !var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = _closure2_slot5;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var7.bind(var4)(var1);
            var1 = 17;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.get;
            var1 = var2.type;
            var1 = var3.bind(var6)(var1);
            var7 = _closure1_slot23;
            var6 = var7.has;
            var3 = var2.type;
            var3 = var6.bind(var7)(var3);
            var6 = undefined;
            if(!var3) { _fun0010_ip = 428; continue _fun0010 }
 323:
            var8 = _closure1_slot28;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 37;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var7 = var3.FormSwitchRow;
            var3 = {};
            var15 = 23;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.+KCMSk;
            var15 = var16.bind(var17)(var15);
            var3['label'] = var15;
            var3['value'] = var14;
            var14 = function onValueChange(arg1) {
                var6 = arg1;
                var3 = _closure2_slot3;
                var1 = undefined;
                var3 = var3.bind(var1)(var6);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 38;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setFriendSync;
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            };
            var3['onValueChange'] = var14;
            var6 = var8.bind(var4)(var7, var3);
 428:
            var7 = _closure1_slot24;
            var3 = var7.has;
            var2 = var2.type;
            var2 = var3.bind(var7)(var2);
            var7 = undefined;
            if(!var2) { _fun0010_ip = 570; continue _fun0010 }
 452:
            var8 = _closure1_slot28;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 37;
            var2 = var18[var2];
            var2 = var15.bind(var4)(var2);
            var3 = var2.FormSwitchRow;
            var2 = {};
            var14 = 23;
            var16 = var18[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.6u6J0t;
            var14 = {};
            var18 = var1.name;
            var14['platform'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var2['label'] = var14;
            var2['value'] = var13;
            var13 = function onValueChange(arg1) {
                var6 = arg1;
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)(var6);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 38;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setShowActivity;
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            };
            var2['onValueChange'] = var13;
            var7 = var8.bind(var4)(var3, var2);
 570:
            var2 = var1.hasMetadata;
            var1 = true;
            var8 = undefined;
            if(!(var1 === var2)) { _fun0010_ip = 696; continue _fun0010 }
 584:
            var3 = _closure1_slot28;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 37;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.FormSwitchRow;
            var1 = {};
            var13 = 23;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.FYKGsL;
            var13 = var14.bind(var15)(var13);
            var1['label'] = var13;
            var1['value'] = var10;
            var10 = !var12;
            var1['disabled'] = var10;
            var10 = function onValueChange(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var7);
                    var3 = _closure2_slot6;
                    var3 = var3.bind(var1)(var7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 38;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMetadataVisibility;
                    var2 = _closure2_slot0;
                    var4 = var2.type;
                    var3 = var2.id;
                    var2 = 0;
                    if(!var7) { _fun0011_ip = 77; continue _fun0011 }
 74:
                    var2 = 1;
 77:
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onValueChange'] = var10;
            var8 = var3.bind(var4)(var2, var1);
 696:
            var3 = _closure1_slot29;
            var2 = _closure1_slot8;
            var1 = {};
            var9 = var9.accountConnectedPrivacyOptionsContainer;
            var1['style'] = var9;
            var10 = _closure1_slot28;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 37;
            var5 = var17[var5];
            var5 = var16.bind(var4)(var5);
            var9 = var5.FormSwitchRow;
            var5 = {};
            var13 = 23;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.f7yOAQ;
            var13 = var14.bind(var15)(var13);
            var5['label'] = var13;
            var5['value'] = var12;
            var11 = function onValueChange(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var7 = arg1;
                    var4 = _closure2_slot1;
                    var3 = !var7;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var1)(var7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 38;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setVisibility;
                    var2 = _closure2_slot0;
                    var4 = var2.type;
                    var3 = var2.id;
                    var2 = 0;
                    if(!var7) { _fun0012_ip = 80; continue _fun0012 }
 77:
                    var2 = 1;
 80:
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var5['onValueChange'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var7;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var10 = 0;
    var2 = var6[var10];
    var1 = undefined;
    var2 = var16.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 1;
    var2 = var6[var9];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var8 = 2;
    var7 = var6[var8];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var2.Pressable;
    var _closure1_slot7 = var7;
    var2 = var2.View;
    var _closure1_slot8 = var2;
    var13 = 4;
    var2 = var6[var13];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var14 = 8;
    var2 = var6[var14];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MetadataFields;
    var _closure1_slot16 = var7;
    var7 = var2.OperatorTypes;
    var _closure1_slot17 = var7;
    var2 = var2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot18 = var2;
    var15 = 12;
    var2 = var6[var15];
    var2 = var5.bind(var1)(var2);
    var7 = var2.PlatformTypes;
    var _closure1_slot19 = var7;
    var7 = var2.UserSettingsSections;
    var _closure1_slot20 = var7;
    var7 = var2.AnalyticEvents;
    var _closure1_slot21 = var7;
    var7 = var2.MarketingURLs;
    var _closure1_slot22 = var7;
    var7 = var2.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot23 = var7;
    var7 = var2.ACTIVITY_PLATFORM_TYPES;
    var _closure1_slot24 = var7;
    var7 = var2.Permissions;
    var _closure1_slot25 = var7;
    var7 = var2.Color;
    var _closure1_slot26 = var7;
    var2 = var2.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot27 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.jsx;
    var _closure1_slot28 = var7;
    var7 = var2.jsxs;
    var _closure1_slot29 = var7;
    var2 = var2.Fragment;
    var _closure1_slot30 = var2;
    var2 = 14;
    var2 = var6[var2];
    var11 = var5.bind(var1)(var2);
    var7 = var11.createStyles;
    var2 = {};
    var12 = {};
    var12['padding'] = var15;
    var2['container'] = var12;
    var18 = 16;
    var12 = {'marginTop': 16, 'flexDirection': 'column'};
    var2['connectionsChecksGroups'] = var12;
    var12 = {'flexDirection': 'row', 'borderColor': null, 'borderWidth': 2, 'borderRadius': null, 'paddingHorizontal': 16, 'paddingVertical': 20, 'marginBottom': 16, 'width': '100%', 'alignItems': 'center', 'position': 'relative'};
    var15 = 15;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_MODIFIER_ACCENT;
    var12['borderColor'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.md;
    var12['borderRadius'] = var17;
    var17 = '100%';
    var2['connectionsChecksGroup'] = var12;
    var12 = {};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_TERTIARY;
    var12['borderColor'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_TERTIARY;
    var12['backgroundColor'] = var19;
    var2['connectionsChecksGroupPassed'] = var12;
    var12 = {};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_MODIFIER_ACCENT;
    var12['backgroundColor'] = var19;
    var2['connectionsChecksGroupPlatformDisabled'] = var12;
    var12 = {'paddingVertical': 4, 'paddingHorizontal': 12, 'borderRadius': null, 'backgroundColor': null, 'position': 'absolute', 'top': 4294967288, 'right': 20};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.md;
    var12['borderRadius'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.STATUS_DANGER;
    var12['backgroundColor'] = var19;
    var2['connectionsChecksGroupRequirementsNotMet'] = var12;
    var12 = {};
    var12['flex'] = var9;
    var2['connectionsChecksGroupTextContainer'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center'};
    var2['connectionsChecksGroupTextNameContainer'] = var12;
    var12 = {};
    var12['marginLeft'] = var13;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_WARNING;
    var12['tintColor'] = var19;
    var2['connectionsChecksGroupTextNameInfoIcon'] = var12;
    var12 = {'tintColor': null, 'width': 24, 'height': 24};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_POSITIVE;
    var12['tintColor'] = var19;
    var2['connectionsChecksGroupCheckmark'] = var12;
    var12 = {};
    var12['height'] = var17;
    var2['connectionsChecksGroupRetryButton'] = var12;
    var12 = {'tintColor': null, 'width': 24, 'height': 24};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INTERACTIVE_NORMAL;
    var12['tintColor'] = var19;
    var2['connectionsChecksGroupCaret'] = var12;
    var12 = {};
    var12['marginTop'] = var13;
    var2['connectionsCheck'] = var12;
    var12 = {'width': 24, 'height': 24, 'marginRight': 12};
    var2['platformIcon'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 4};
    var2['channelName'] = var12;
    var12 = {'tintColor': null, 'marginRight': 8, 'width': 24, 'height': 24};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_MUTED;
    var12['tintColor'] = var19;
    var2['channelNameIcon'] = var12;
    var12 = {};
    var19 = 'hidden';
    var12['overflow'] = var19;
    var2['channelNameText'] = var12;
    var12 = {'flexDirection': 'row', 'width': '100%', 'alignItems': 'center', 'marginBottom': 8};
    var2['header'] = var12;
    var12 = {};
    var12['width'] = var17;
    var2['content'] = var12;
    var12 = {};
    var12['marginBottom'] = var18;
    var2['footerText'] = var12;
    var12 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'marginVertical': 24};
    var2['accountConnectedContainer'] = var12;
    var12 = {};
    var12['width'] = var17;
    var2['accountConnectedPreview'] = var12;
    var12 = {'marginTop': 8, 'borderRadius': null, 'borderWidth': 1};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var12['borderRadius'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_MODIFIER_ACCENT;
    var12['borderColor'] = var17;
    var2['accountConnectedPreviewConnectedUserAccount'] = var12;
    var12 = {'marginTop': 16, 'width': '100%'};
    var2['accountConnectedPrivacy'] = var12;
    var12 = {'marginTop': 8, 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'padding': 8, 'flexDirection': 'column'};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_MODIFIER_ACCENT;
    var12['borderColor'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var12['borderRadius'] = var17;
    var2['accountConnectedPrivacyOptionsContainer'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'paddingVertical': 12, 'paddingHorizontal': 8, 'borderTopStartRadius': 4, 'borderTopEndRadius': 4, 'marginTop': 16};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var12['backgroundColor'] = var17;
    var2['roleGranted'] = var12;
    var12 = {'overflow': 'hidden', 'marginRight': 24};
    var2['roleGrantedName'] = var12;
    var12 = {};
    var12['marginRight'] = var14;
    var2['verifiedIcon'] = var12;
    var12 = {'flexDirection': 'column', 'backgroundColor': null, 'padding': 16, 'borderBottomStartRadius': 4, 'borderBottomEndRadius': 4, 'marginBottom': 24};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SECONDARY_ALT;
    var12['backgroundColor'] = var15;
    var2['channelsGranted'] = var12;
    var12 = {};
    var12['marginTop'] = var14;
    var2['manageConnectionsButton'] = var12;
    var12 = {'marginTop': 24, 'marginBottom': 32, 'alignSelf': 'center'};
    var2['loading'] = var12;
    var12 = {};
    var12['marginRight'] = var14;
    var2['appIcon'] = var12;
    var12 = {};
    var12['marginLeft'] = var13;
    var2['botTag'] = var12;
    var2 = var7.bind(var11)(var2);
    var _closure1_slot31 = var2;
    var2 = {};
    var2['CHECKS_REQUIRED'] = var10;
    var7 = 'CHECKS_REQUIRED';
    var2[var10] = var7;
    var2['ACCOUNT_CONNECTED'] = var9;
    var7 = 'ACCOUNT_CONNECTED';
    var2[var9] = var7;
    var2['ROLE_GRANTED'] = var8;
    var7 = 'ROLE_GRANTED';
    var2[var8] = var7;
    var _closure1_slot32 = var2;
    var2 = 52;
    var2 = var6[var2];
    var6 = var5.bind(var1)(var2);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function GuildRoleConnectionsConnectAccountsActionSheet(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var12 = var2.guildId;
            var _closure2_slot0 = var12;
            var1 = var2.role;
            var _closure2_slot1 = var1;
            var3 = var2.initialAttemptedPlatformType;
            var _closure2_slot2 = var3;
            var2 = var2.onCloseModal;
            var _closure2_slot3 = var2;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot26 = var4;
            var2 = function handleClose() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = undefined;
                    var2 = true;
                    if(!(var2 === var1)) { _fun0014_ip = 10; continue _fun0014 }
 8:
                    var2 = false;
 10:
                    if(!var2) { _fun0014_ip = 34; continue _fun0014 }
 13:
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0014_ip = 34; continue _fun0014 }
 26:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
 34:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 44;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var _closure2_slot31 = var2;
            var2 = function handleManageConnections() {
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 45;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot20;
                var5 = var5.CONNECTIONS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot32 = var2;
            var2 = function handleManageAuthorizedApplications() {
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 45;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot20;
                var5 = var5.AUTHORIZED_APPS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot33 = var2;
            var2 = function _handleAssignRole() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0015_ip = 87; continue _fun0015 }
 7:
                            var5 = _closure2_slot14;
                            var3 = undefined;
                            var4 = true;
                            var4 = var5.bind(var3)(var4);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 41;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.assignGuildRoleConnection;
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var2 = var5.bind(var6)(var4, var2);
                            SaveGenerator(address=75);
 73:
                            return var2;
 75:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0015_ip = 84; continue _fun0015 }
 81:
                            return var3;
 84:
                            return var2;
 87:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot34 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot34 = var2;
            var2 = function handlePlatformConnect(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var6 = arg1;
                    var5 = arg2;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 46;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['platformType'] = var6;
                    var6 = 'Verified Roles Connect Accounts Modal';
                    var2['location'] = var6;
                    var4 = function onClose() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 44;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.openLazy;
                            var2 = global;
                            var4 = var2.Promise;
                            var3 = var4.resolve;
                            var2 = {};
                            var7 = _closure1_slot38;
                            var2['default'] = var7;
                            var4 = var3.bind(var4)(var2);
                            var3 = {};
                            var7 = _closure2_slot1;
                            var3['role'] = var7;
                            var7 = _closure2_slot0;
                            var3['guildId'] = var7;
                            var7 = _closure3_slot0;
                            var3['initialAttemptedPlatformType'] = var7;
                            var9 = _closure3_slot1;
                            var7 = null;
                            var9 = var7 == var9;
                            var7 = undefined;
                            if(var9) { _fun0017_ip = 119; continue _fun0017 }
 109:
                            var8 = _closure3_slot1;
                            var7 = var8.role_connections_verification_url;
 119:
                            var3['overrideUrl'] = var7;
                            var2 = _closure2_slot3;
                            var3['onCloseModal'] = var2;
                            var2 = 'GuildRoleConnectionsConnectAccountsActionSheet';
                            var2 = var5.bind(var6)(var4, var2, var3);
                            return var1;
                        }
                    };
                    var2['onClose'] = var4;
                    var4 = null;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0016_ip = 87; continue _fun0016 }
 81:
                    var4 = var5.role_connections_verification_url;
 87:
                    var2['overrideUrl'] = var4;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 42;
                    var2 = var9[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot21;
                    var3 = var2.PASSPORT_CHALLENGE_STARTED;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var8 = var8.id;
                    var2['role_id'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 43;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.collectGuildAnalyticsMetadata;
                    var6 = _closure2_slot0;
                    var10 = var7.bind(var8)(var6);
                    var11 = var2;
                    var6 = copyDataProperties(var11, var10);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var _closure2_slot35 = var2;
            var2 = function handlePlatformConnected(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var5 = arg2;
                    var6 = _closure2_slot22;
                    var1 = undefined;
                    var4 = arg1;
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure2_slot24;
                    var4 = var4.bind(var1)(var5);
                    var6 = _closure2_slot6;
                    var4 = _closure1_slot32;
                    var4 = var4.ACCOUNT_CONNECTED;
                    var4 = var6.bind(var1)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0018_ip = 124; continue _fun0018 }
 59:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 47;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchUserApplicationRoleConnections;
                    var5 = var3.bind(var4)();
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var3 = _closure2_slot26;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 124:
                    return var1;
                }
            };
            var _closure2_slot36 = var2;
            var2 = _closure1_slot31;
            var14 = var2.bind(var4)();
            var _closure2_slot4 = var14;
            var6 = _closure1_slot5;
            var5 = var6.useState;
            var10 = _closure1_slot32;
            var2 = var10.CHECKS_REQUIRED;
            var5 = var5.bind(var6)(var2);
            var2 = _closure1_slot4;
            var22 = 2;
            var2 = var2.bind(var4)(var5, var22);
            var20 = 0;
            var16 = var2[var20];
            var _closure2_slot5 = var16;
            var18 = 1;
            var2 = var2[var18];
            _closure2_slot6 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var8 = null;
            var5 = var2.bind(var5)(var8);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var22);
            var5 = var2[var20];
            var _closure2_slot7 = var5;
            var2 = var2[var18];
            var _closure2_slot8 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var6 = false;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var22);
            var5 = var2[var20];
            var _closure2_slot9 = var5;
            var2 = var2[var18];
            var _closure2_slot10 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var7 = true;
            var5 = var2.bind(var5)(var7);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var22);
            var5 = var2[var20];
            var _closure2_slot11 = var5;
            var2 = var2[var18];
            var _closure2_slot12 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var22);
            var19 = var2[var20];
            var _closure2_slot13 = var19;
            var2 = var2[var18];
            _closure2_slot14 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var5 = var2.bind(var5)(var7);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var22);
            var5 = var2[var20];
            var _closure2_slot15 = var5;
            var2 = var2[var18];
            var _closure2_slot16 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var22);
            var5 = var2[var20];
            var _closure2_slot17 = var5;
            var2 = var2[var18];
            var _closure2_slot18 = var2;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 39;
            var6 = var5[var7];
            var17 = var2.bind(var4)(var6);
            var15 = var17.useStateFromStores;
            var6 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getAccounts;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var15.bind(var17)(var11, var6);
            var _closure2_slot19 = var6;
            var11 = var5[var7];
            var21 = var2.bind(var4)(var11);
            var17 = var21.useStateFromStores;
            var11 = _closure1_slot11;
            var15 = new Array(1);
            var15[0] = var11;
            var11 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var17.bind(var21)(var15, var11);
            var _closure2_slot20 = var11;
            var15 = _closure1_slot5;
            var11 = var15.useState;
            var15 = var11.bind(var15)(var8);
            var11 = _closure1_slot4;
            var11 = var11.bind(var4)(var15, var22);
            var15 = var11[var20];
            var _closure2_slot21 = var15;
            var11 = var11[var18];
            _closure2_slot22 = var11;
            var17 = _closure1_slot5;
            var11 = var17.useState;
            var17 = var11.bind(var17)(var8);
            var11 = _closure1_slot4;
            var17 = var11.bind(var4)(var17, var22);
            var11 = var17[var20];
            var _closure2_slot23 = var11;
            var17 = var17[var18];
            _closure2_slot24 = var17;
            var21 = _closure1_slot5;
            var17 = var21.useState;
            var21 = var17.bind(var21)(var8);
            var17 = _closure1_slot4;
            var17 = var17.bind(var4)(var21, var22);
            var20 = var17[var20];
            var _closure2_slot25 = var20;
            var17 = var17[var18];
            _closure2_slot26 = var17;
            var18 = _closure1_slot1;
            var17 = 16;
            var17 = var5[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.bind(var4)();
            var _closure2_slot27 = var17;
            var17 = var5[var7];
            var21 = var2.bind(var4)(var17);
            var20 = var21.useStateFromStores;
            var17 = _closure1_slot14;
            var18 = new Array(1);
            var18[0] = var17;
            var17 = function() {
                var4 = _closure1_slot14;
                var3 = var4.getMember;
                var2 = _closure2_slot0;
                var1 = _closure2_slot20;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var20.bind(var21)(var18, var17);
            var _closure2_slot28 = var17;
            var18 = var5[var7];
            var22 = var2.bind(var4)(var18);
            var21 = var22.useStateFromStores;
            var18 = _closure1_slot12;
            var20 = new Array(1);
            var20[0] = var18;
            var18 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getMutableGuildChannelsForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var21.bind(var22)(var20, var18);
            var7 = var5[var7];
            var22 = var2.bind(var4)(var7);
            var21 = var22.useStateFromStores;
            var7 = _closure1_slot9;
            var18 = new Array(1);
            var18[0] = var7;
            var7 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var7 = var21.bind(var22)(var18, var7);
            var _closure2_slot29 = var7;
            var7 = global;
            var18 = var7.Object;
            var7 = var18.values;
            var20 = var7.bind(var18)(var20);
            var18 = var20.filter;
            var7 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var4 = arg1;
                    var5 = _closure1_slot15;
                    var3 = var5.can;
                    var1 = _closure1_slot25;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var3.bind(var5)(var1, var4);
                    if(!var1) { _fun0019_ip = 61; continue _fun0019 }
 35:
                    var6 = _closure1_slot15;
                    var5 = var6.can;
                    var3 = _closure1_slot25;
                    var3 = var3.SEND_MESSAGES;
                    var1 = var5.bind(var6)(var3, var4);
 61:
                    if(!var1) { _fun0019_ip = 108; continue _fun0019 }
 64:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var4 = var2.bind(var3)(var4);
                    var3 = var4.includes;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 108:
                    return var1;
                }
            };
            var18 = var18.bind(var20)(var7);
            var _closure2_slot30 = var18;
            var21 = _closure1_slot5;
            var20 = var21.useEffect;
            var7 = new Array(3);
            var7[0] = var12;
            var22 = var1.id;
            var7[1] = var22;
            var7[2] = var6;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.fetchGuildRoleConnectionsEligibility;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot10;
                    var3 = function checkEligibility(arg1) {
                        var3 = arg1;
                        var2 = var3.some;
                        var1 = function(arg1) {
                            var3 = arg1;
                            var2 = var3.every;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.result;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var1)(var5);
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot12;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var20.bind(var21)(var6, var7);
            var20 = _closure1_slot5;
            var7 = var20.useEffect;
            var6 = new Array(3);
            var6[0] = var3;
            var3 = var1.id;
            var6[1] = var3;
            var6[2] = var12;
            var3 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0020_ip = 113; continue _fun0020 }
 13:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 42;
                    var1 = var9[var1];
                    var8 = undefined;
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot21;
                    var2 = var1.PASSPORT_CHALLENGE_VIEWED;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var1['role_id'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 43;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var10 = var6.bind(var7)(var5);
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var1 = var3.bind(var4)(var2, var1);
 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var20)(var3, var6);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var3 = new Array(5);
            var3[0] = var19;
            var18 = var18.length;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var12;
            var1 = var1.id;
            var3[4] = var1;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0021_ip = 20; continue _fun0021 }
 10:
                    var3 = _closure2_slot28;
                    var2 = null;
                    var1 = var2 != var3;
 20:
                    if(!var1) { _fun0021_ip = 52; continue _fun0021 }
 23:
                    var2 = _closure2_slot28;
                    var4 = var2.roles;
                    var3 = var4.includes;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 52:
                    if(!var1) { _fun0021_ip = 241; continue _fun0021 }
 58:
                    var2 = _closure2_slot14;
                    var8 = undefined;
                    var1 = false;
                    var1 = var2.bind(var8)(var1);
                    var1 = _closure2_slot30;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0021_ip = 121; continue _fun0021 }
 86:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 44;
                    var1 = var3[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    _fun0021_ip = 143; continue _fun0021;
 121:
                    var2 = _closure2_slot6;
                    var1 = _closure1_slot32;
                    var1 = var1.ROLE_GRANTED;
                    var1 = var2.bind(var8)(var1);
 143:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 42;
                    var1 = var9[var1];
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot21;
                    var2 = var1.PASSPORT_CHALLENGE_FINISHED;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var1['role_id'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 43;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var10 = var6.bind(var7)(var5);
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var1 = var3.bind(var4)(var2, var1);
 241:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var3 = _closure1_slot28;
            var1 = 48;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var7 = _closure1_slot29;
            var6 = _closure1_slot8;
            var5 = {};
            var12 = var14.container;
            var5['style'] = var12;
            var10 = var10.CHECKS_REQUIRED;
            if(!(var10 !== var16)) { _fun0013_ip = 1427; continue _fun0013 }
 1054:
            var10 = _closure1_slot32;
            var10 = var10.ACCOUNT_CONNECTED;
            if(!(var10 !== var16)) { _fun0013_ip = 1204; continue _fun0013 }
 1071:
            var10 = _closure1_slot32;
            var12 = var10.ROLE_GRANTED;
            var10 = null;
            if(!(var12 === var16)) { _fun0013_ip = 1556; continue _fun0013 }
 1090:
            var17 = _closure1_slot28;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 22;
            var12 = var22[var12];
            var12 = var21.bind(var4)(var12);
            var16 = var12.Text;
            var12 = {};
            var18 = 'heading-lg/extrabold';
            var12['variant'] = var18;
            var18 = var14.header;
            var12['style'] = var18;
            var18 = 23;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.najNd3;
            var18 = var19.bind(var20)(var18);
            var12['children'] = var18;
            var10 = var17.bind(var4)(var16, var12);
            _fun0013_ip = 1556; continue _fun0013;
 1204:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 33;
            var12 = var17[var12];
            var17 = var16.bind(var4)(var12);
            var16 = var8 != var15;
            var12 = 'lastPlatformConnected is null';
            var12 = var17.bind(var4)(var16, var12);
            var12 = var8 == var11;
            var19 = undefined;
            if(var12) { _fun0013_ip = 1254; continue _fun0013 }
 1249:
            var19 = var11.name;
 1254:
            if(!(var8 == var19)) { _fun0013_ip = 1305; continue _fun0013 }
 1258:
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 17;
            var11 = var16[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.get;
            var11 = var11.bind(var12)(var15);
            var12 = var8 == var11;
            var8 = undefined;
            if(var12) { _fun0013_ip = 1302; continue _fun0013 }
 1297:
            var8 = var11.name;
 1302:
            var19 = var8;
 1305:
            var12 = _closure1_slot28;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = 22;
            var8 = var20[var8];
            var8 = var16.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {};
            var15 = 'heading-lg/extrabold';
            var8['variant'] = var15;
            var15 = var14.header;
            var8['style'] = var15;
            var15 = 23;
            var17 = var20[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.yQvgBA;
            var15 = {};
            var15['platformName'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var8['children'] = var15;
            var10 = var12.bind(var4)(var11, var8);
            _fun0013_ip = 1556; continue _fun0013;
 1427:
            var12 = _closure1_slot28;
            var11 = _closure1_slot8;
            var8 = {};
            var14 = var14.header;
            var8['style'] = var14;
            var15 = _closure1_slot28;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 22;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var16 = 'heading-lg/extrabold';
            var13['variant'] = var16;
            var16 = 23;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.zOZh3d;
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var8['children'] = var13;
            var10 = var12.bind(var4)(var11, var8);
 1556:
            var8 = new Array(3);
            var8[0] = var10;
            var10 = function renderContent() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var5 = _closure2_slot5;
                    var4 = _closure1_slot32;
                    var4 = var4.CHECKS_REQUIRED;
                    if(!(var4 !== var5)) { _fun0022_ip = 1397; continue _fun0022 }
 29:
                    var4 = _closure1_slot32;
                    var4 = var4.ACCOUNT_CONNECTED;
                    if(!(var4 !== var5)) { _fun0022_ip = 336; continue _fun0022 }
 46:
                    var4 = _closure1_slot32;
                    var4 = var4.ROLE_GRANTED;
                    if(!(var4 !== var5)) { _fun0022_ip = 64; continue _fun0022 }
 60:
                    var4 = null;
                    return var4;
 64:
                    var7 = _closure1_slot29;
                    var6 = _closure1_slot8;
                    var5 = {};
                    var12 = _closure2_slot4;
                    var4 = var12.content;
                    var5['style'] = var4;
                    var10 = _closure1_slot29;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var4 = var12.roleGranted;
                    var8['style'] = var4;
                    var14 = _closure1_slot28;
                    var13 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var4 = 51;
                    var11 = var17[var4];
                    var4 = undefined;
                    var13 = var13.bind(var4)(var11);
                    var11 = {};
                    var15 = _closure2_slot0;
                    var11['guildId'] = var15;
                    var15 = var12.verifiedIcon;
                    var11['style'] = var15;
                    var16 = _closure2_slot1;
                    var11['role'] = var16;
                    var15 = 24;
                    var11['size'] = var15;
                    var13 = var14.bind(var4)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var15 = _closure1_slot28;
                    var14 = _closure1_slot0;
                    var13 = 22;
                    var13 = var17[var13];
                    var13 = var14.bind(var4)(var13);
                    var14 = var13.Text;
                    var13 = {'variant': 'text-lg/semibold', 'color': 'header-primary', 'lineClamp': 1};
                    var17 = var12.roleGrantedName;
                    var13['style'] = var17;
                    var16 = var16.name;
                    var13['children'] = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var11[1] = var13;
                    var8['children'] = var11;
                    var9 = var10.bind(var4)(var9, var8);
                    var8 = new Array(2);
                    var8[0] = var9;
                    var11 = _closure1_slot28;
                    var10 = _closure1_slot8;
                    var9 = {};
                    var12 = var12.channelsGranted;
                    var9['style'] = var12;
                    var14 = _closure2_slot30;
                    var13 = var14.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var5 = _closure1_slot28;
                        var4 = _closure1_slot34;
                        var3 = {};
                        var3['channel'] = var1;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var12 = var13.bind(var14)(var12);
                    var9['children'] = var12;
                    var9 = var11.bind(var4)(var10, var9);
                    var8[1] = var9;
                    var5['children'] = var8;
                    var4 = var7.bind(var4)(var6, var5);
                    return var4;
 336:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 33;
                    var4 = var6[var4];
                    var6 = undefined;
                    var7 = var5.bind(var6)(var4);
                    var4 = _closure2_slot21;
                    var14 = null;
                    var5 = var14 != var4;
                    var4 = 'lastPlatformConnected is null';
                    var4 = var7.bind(var6)(var5, var4);
                    var7 = _closure2_slot19;
                    var5 = var7.find;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure2_slot21;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var27 = var5.bind(var7)(var4);
                    var4 = _closure2_slot25;
                    var4 = var14 == var4;
                    var23 = undefined;
                    if(var4) { _fun0022_ip = 435; continue _fun0022 }
 414:
                    var5 = _closure2_slot25;
                    var4 = var5.find;
                    var1 = function(arg1) {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.application;
                            var2 = var1.id;
                            var4 = _closure2_slot23;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0023_ip = 40; continue _fun0023 }
 31:
                            var3 = _closure2_slot23;
                            var1 = var3.id;
 40:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var23 = var4.bind(var5)(var1);
 435:
                    var5 = _closure1_slot29;
                    var4 = _closure1_slot8;
                    var1 = {};
                    var10 = _closure2_slot4;
                    var7 = var10.content;
                    var1['style'] = var7;
                    var9 = _closure1_slot28;
                    var8 = _closure1_slot8;
                    var7 = {};
                    var10 = var10.accountConnectedContainer;
                    var7['style'] = var10;
                    if(!(var14 == var27)) { _fun0022_ip = 489; continue _fun0022 }
 482:
                    if(!(var14 != var23)) { _fun0022_ip = 1188; continue _fun0022 }
 489:
                    var12 = _closure1_slot29;
                    var11 = _closure1_slot30;
                    var10 = {};
                    var13 = var14 != var27;
                    var15 = null;
                    if(!var13) { _fun0022_ip = 943; continue _fun0022 }
 511:
                    var17 = _closure1_slot29;
                    var16 = _closure1_slot30;
                    var13 = {};
                    var19 = _closure1_slot8;
                    var18 = {};
                    var24 = _closure2_slot4;
                    var20 = var24.accountConnectedPreview;
                    var18['style'] = var20;
                    var25 = _closure1_slot28;
                    var30 = _closure1_slot0;
                    var31 = _closure1_slot2;
                    var22 = 22;
                    var20 = var31[var22];
                    var20 = var30.bind(var6)(var20);
                    var21 = var20.Text;
                    var20 = {'variant': 'eyebrow', 'color': 'header-secondary'};
                    var26 = 23;
                    var28 = var31[var26];
                    var28 = var30.bind(var6)(var28);
                    var32 = var28.intl;
                    var29 = var32.string;
                    var28 = var31[var26];
                    var28 = var30.bind(var6)(var28);
                    var28 = var28.t;
                    var28 = var28.TOjkEh;
                    var28 = var29.bind(var32)(var28);
                    var20['children'] = var28;
                    var21 = var25.bind(var6)(var21, var20);
                    var20 = new Array(2);
                    var20[0] = var21;
                    var28 = _closure1_slot28;
                    var21 = 50;
                    var21 = var31[var21];
                    var21 = var30.bind(var6)(var21);
                    var25 = var21.ConnectedUserAccount;
                    var21 = {};
                    var21['account'] = var27;
                    var29 = _closure2_slot20;
                    var21['userId'] = var29;
                    var29 = _closure2_slot27;
                    var21['theme'] = var29;
                    var29 = _closure2_slot29;
                    var21['locale'] = var29;
                    var29 = var24.accountConnectedPreviewConnectedUserAccount;
                    var21['style'] = var29;
                    var29 = _closure2_slot15;
                    var21['showMetadata'] = var29;
                    var29 = _closure2_slot17;
                    var21['showInvisibleIcon'] = var29;
                    var21 = var28.bind(var6)(var25, var21);
                    var20[1] = var21;
                    var18['children'] = var20;
                    var19 = var17.bind(var6)(var19, var18);
                    var18 = new Array(2);
                    var18[0] = var19;
                    var21 = _closure1_slot29;
                    var20 = _closure1_slot8;
                    var19 = {};
                    var24 = var24.accountConnectedPrivacy;
                    var19['style'] = var24;
                    var25 = _closure1_slot28;
                    var22 = var31[var22];
                    var22 = var30.bind(var6)(var22);
                    var24 = var22.Text;
                    var22 = {'variant': 'eyebrow', 'color': 'header-secondary'};
                    var28 = var31[var26];
                    var28 = var30.bind(var6)(var28);
                    var29 = var28.intl;
                    var28 = var29.string;
                    var26 = var31[var26];
                    var26 = var30.bind(var6)(var26);
                    var26 = var26.t;
                    var26 = var26.jndPhY;
                    var26 = var28.bind(var29)(var26);
                    var22['children'] = var26;
                    var24 = var25.bind(var6)(var24, var22);
                    var22 = new Array(2);
                    var22[0] = var24;
                    var26 = _closure1_slot28;
                    var25 = _closure1_slot37;
                    var24 = {};
                    var24['account'] = var27;
                    var27 = _closure2_slot18;
                    var24['setShowPreviewInvisibleIcon'] = var27;
                    var27 = _closure2_slot16;
                    var24['setShowPreviewMetadata'] = var27;
                    var24 = var26.bind(var6)(var25, var24);
                    var22[1] = var24;
                    var19['children'] = var22;
                    var19 = var21.bind(var6)(var20, var19);
                    var18[1] = var19;
                    var13['children'] = var18;
                    var15 = var17.bind(var6)(var16, var13);
 943:
                    var13 = new Array(2);
                    var13[0] = var15;
                    var15 = var14 != var23;
                    var14 = null;
                    if(!var15) { _fun0022_ip = 1172; continue _fun0022 }
 963:
                    var17 = _closure1_slot29;
                    var16 = _closure1_slot8;
                    var15 = {};
                    var22 = _closure2_slot4;
                    var18 = var22.accountConnectedPreview;
                    var15['style'] = var18;
                    var21 = _closure1_slot28;
                    var20 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var18 = 22;
                    var18 = var24[var18];
                    var18 = var20.bind(var6)(var18);
                    var19 = var18.Text;
                    var18 = {'variant': 'eyebrow', 'color': 'header-secondary'};
                    var25 = 23;
                    var26 = var24[var25];
                    var26 = var20.bind(var6)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var25 = var24[var25];
                    var25 = var20.bind(var6)(var25);
                    var25 = var25.t;
                    var25 = var25.TOjkEh;
                    var25 = var26.bind(var27)(var25);
                    var18['children'] = var25;
                    var19 = var21.bind(var6)(var19, var18);
                    var18 = new Array(2);
                    var18[0] = var19;
                    var21 = _closure1_slot28;
                    var19 = 50;
                    var19 = var24[var19];
                    var19 = var20.bind(var6)(var19);
                    var20 = var19.ConnectedApplicationUserRoleAccount;
                    var19 = {};
                    var19['applicationRoleConnection'] = var23;
                    var23 = _closure2_slot27;
                    var19['theme'] = var23;
                    var23 = _closure2_slot29;
                    var19['locale'] = var23;
                    var22 = var22.accountConnectedPreviewConnectedUserAccount;
                    var19['style'] = var22;
                    var19 = var21.bind(var6)(var20, var19);
                    var18[1] = var19;
                    var15['children'] = var18;
                    var14 = var17.bind(var6)(var16, var15);
 1172:
                    var13[1] = var14;
                    var10['children'] = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    _fun0022_ip = 1226; continue _fun0022;
 1188:
                    var13 = _closure1_slot28;
                    var12 = _closure1_slot6;
                    var11 = {};
                    var14 = 'large';
                    var11['size'] = var14;
                    var14 = _closure2_slot4;
                    var14 = var14.loading;
                    var11['style'] = var14;
                    var10 = var13.bind(var6)(var12, var11);
 1226:
                    var7['children'] = var10;
                    var8 = var9.bind(var6)(var8, var7);
                    var7 = new Array(2);
                    var7[0] = var8;
                    var10 = _closure1_slot28;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var8 = 49;
                    var8 = var15[var8];
                    var8 = var12.bind(var6)(var8);
                    var9 = var8.TextWithIOSLinkWorkaround;
                    var8 = {'variant': 'text-md/normal', 'color': 'header-secondary'};
                    var11 = 23;
                    var13 = var15[var11];
                    var13 = var12.bind(var6)(var13);
                    var14 = var13.intl;
                    var13 = var14.format;
                    var11 = var15[var11];
                    var11 = var12.bind(var6)(var11);
                    var11 = var11.t;
                    var12 = var11.gsgvxs;
                    var11 = {};
                    var15 = _closure1_slot22;
                    var15 = var15.PRIVACY;
                    var11['privacyPolicyUrl'] = var15;
                    var15 = _closure2_slot33;
                    var11['onAuthorizedApplicationsClick'] = var15;
                    var15 = _closure2_slot32;
                    var11['onConnectionsClick'] = var15;
                    var11 = var13.bind(var14)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var6)(var9, var8);
                    var7[1] = var8;
                    var1['children'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    return var1;
 1397:
                    var1 = _closure2_slot7;
                    var4 = null;
                    var11 = var4 != var1;
                    if(!var11) { _fun0022_ip = 1426; continue _fun0022 }
 1410:
                    var1 = _closure2_slot7;
                    var5 = var1.length;
                    var1 = 1;
                    var11 = var5 > var1;
 1426:
                    var1 = _closure2_slot7;
                    var14 = var4 != var1;
                    if(!var14) { _fun0022_ip = 1453; continue _fun0022 }
 1437:
                    var1 = _closure2_slot7;
                    var5 = var1.length;
                    var1 = 1;
                    var14 = var1 === var5;
 1453:
                    if(!var14) { _fun0022_ip = 1478; continue _fun0022 }
 1456:
                    var5 = _closure2_slot7;
                    var1 = 0;
                    var1 = var5[var1];
                    var5 = var1.length;
                    var1 = 1;
                    var14 = var1 === var5;
 1478:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0022_ip = 1937; continue _fun0022 }
 1488:
                    var1 = _closure2_slot7;
                    if(!(var4 != var1)) { _fun0022_ip = 1937; continue _fun0022 }
 1499:
                    var6 = _closure1_slot29;
                    var5 = _closure1_slot8;
                    var4 = {};
                    var1 = _closure2_slot4;
                    var1 = var1.content;
                    var4['style'] = var1;
                    var9 = _closure1_slot28;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 22;
                    var7 = var10[var1];
                    var1 = undefined;
                    var7 = var12.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                    var15 = 23;
                    var10 = var10[var15];
                    var10 = var12.bind(var1)(var10);
                    var13 = var10.intl;
                    var12 = var13.format;
                    var16 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var15];
                    var10 = var16.bind(var1)(var10);
                    var10 = var10.t;
                    if(var14) { _fun0022_ip = 1637; continue _fun0022 }
 1614:
                    if(var11) { _fun0022_ip = 1627; continue _fun0022 }
 1617:
                    var11 = var10.U0olLi;
                    _fun0022_ip = 1635; continue _fun0022;
 1627:
                    var11 = var10.mOQ8k5;
 1635:
                    _fun0022_ip = 1645; continue _fun0022;
 1637:
                    var11 = var10.jHfRvb;
 1645:
                    var10 = {};
                    var14 = _closure2_slot1;
                    var14 = var14.name;
                    var10['roleName'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var7['children'] = var10;
                    var8 = var9.bind(var1)(var8, var7);
                    var7 = new Array(3);
                    var7[0] = var8;
                    var10 = _closure1_slot28;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var13 = _closure2_slot4;
                    var11 = var13.connectionsChecksGroups;
                    var8['style'] = var11;
                    var14 = _closure1_slot28;
                    var12 = _closure1_slot36;
                    var11 = {};
                    var16 = _closure2_slot7;
                    var11['eligibilityStatesGroups'] = var16;
                    var16 = _closure2_slot35;
                    var11['onPlatformConnect'] = var16;
                    var16 = _closure2_slot36;
                    var11['onPlatformConnected'] = var16;
                    var16 = _closure2_slot2;
                    var11['initialAttemptedPlatformType'] = var16;
                    var11 = var14.bind(var1)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var7[1] = var8;
                    var10 = _closure1_slot28;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 49;
                    var8 = var11[var8];
                    var8 = var12.bind(var1)(var8);
                    var9 = var8.TextWithIOSLinkWorkaround;
                    var8 = {'variant': 'text-xs/normal', 'style': null, 'color': 'header-secondary'};
                    var13 = var13.footerText;
                    var8['style'] = var13;
                    var13 = var11[var15];
                    var13 = var12.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.format;
                    var11 = var11[var15];
                    var11 = var12.bind(var1)(var11);
                    var11 = var11.t;
                    var12 = var11.gsgvxs;
                    var11 = {};
                    var15 = _closure1_slot22;
                    var15 = var15.PRIVACY;
                    var11['privacyPolicyUrl'] = var15;
                    var15 = _closure2_slot33;
                    var11['onAuthorizedApplicationsClick'] = var15;
                    var15 = _closure2_slot32;
                    var11['onConnectionsClick'] = var15;
                    var11 = var13.bind(var14)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var7[2] = var8;
                    var4['children'] = var7;
                    var1 = var6.bind(var1)(var5, var4);
                    _fun0022_ip = 1977; continue _fun0022;
 1937:
                    var5 = _closure1_slot28;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var6 = 'large';
                    var3['size'] = var6;
                    var2 = _closure2_slot4;
                    var2 = var2.loading;
                    var3['style'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 1977:
                    return var1;
                }
            };
            var10 = var10.bind(var4)();
            var8[1] = var10;
            var9 = function renderFooter() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = _closure1_slot32;
                    var1 = var1.CHECKS_REQUIRED;
                    if(!(var1 !== var2)) { _fun0024_ip = 553; continue _fun0024 }
 29:
                    var1 = _closure1_slot32;
                    var1 = var1.ACCOUNT_CONNECTED;
                    if(!(var1 !== var2)) { _fun0024_ip = 426; continue _fun0024 }
 46:
                    var1 = _closure2_slot7;
                    var9 = null;
                    var2 = var9 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0024_ip = 95; continue _fun0024 }
 63:
                    var3 = _closure2_slot7;
                    var2 = var3.flat;
                    var8 = var2.bind(var3)();
                    var3 = var8.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.application_id;
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var1 = var3.bind(var8)(var2);
 95:
                    var10 = var9 != var1;
                    if(!var10) { _fun0024_ip = 105; continue _fun0024 }
 102:
                    var10 = var1;
 105:
                    var3 = _closure1_slot29;
                    var2 = _closure1_slot30;
                    var1 = {};
                    var12 = _closure1_slot28;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var14 = 28;
                    var8 = var13[var14];
                    var11 = var11.bind(var4)(var8);
                    var8 = {};
                    var18 = _closure1_slot0;
                    var15 = var13[var14];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.ButtonColors;
                    var15 = var15.BRAND;
                    var8['color'] = var15;
                    var15 = function onPress() {
                        var3 = _closure2_slot31;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var15;
                    var17 = 23;
                    var15 = var13[var17];
                    var15 = var18.bind(var4)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var13[var17];
                    var13 = var18.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.cpT0Cg;
                    var13 = var15.bind(var16)(var13);
                    var8['text'] = var13;
                    var11 = var12.bind(var4)(var11, var8);
                    var8 = new Array(2);
                    var8[0] = var11;
                    var9 = null;
                    if(!var10) { _fun0024_ip = 410; continue _fun0024 }
 254:
                    var12 = _closure1_slot28;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = var13[var14];
                    var11 = var11.bind(var4)(var10);
                    var10 = {};
                    var15 = _closure2_slot4;
                    var15 = var15.manageConnectionsButton;
                    var10['style'] = var15;
                    var16 = _closure1_slot0;
                    var15 = var13[var14];
                    var15 = var16.bind(var4)(var15);
                    var15 = var15.ButtonLooks;
                    var15 = var15.LINK;
                    var10['look'] = var15;
                    var14 = var13[var14];
                    var14 = var16.bind(var4)(var14);
                    var14 = var14.ButtonColors;
                    var14 = var14.LINK;
                    var10['color'] = var14;
                    var14 = _closure2_slot32;
                    var10['onPress'] = var14;
                    var14 = var13[var17];
                    var14 = var16.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var13[var17];
                    var13 = var16.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.VXV55O;
                    var13 = var14.bind(var15)(var13);
                    var10['text'] = var13;
                    var9 = var12.bind(var4)(var11, var10);
 410:
                    var8[1] = var9;
                    var1['children'] = var8;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 426:
                    var4 = _closure1_slot28;
                    var2 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 28;
                    var1 = var12[var8];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var11 = _closure1_slot0;
                    var8 = var12[var8];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.ButtonColors;
                    var8 = var8.BRAND;
                    var1['color'] = var8;
                    var8 = function onPress() {
                        var3 = _closure2_slot6;
                        var1 = _closure1_slot32;
                        var2 = var1.CHECKS_REQUIRED;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var8;
                    var8 = 23;
                    var9 = var12[var8];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.i4jeWV;
                    var8 = var9.bind(var10)(var8);
                    var1['text'] = var8;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 553:
                    var4 = _closure1_slot28;
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 28;
                    var1 = var10[var8];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.ButtonColors;
                    var8 = var8.BRAND;
                    var1['color'] = var8;
                    var6 = function onPress() {
                        var2 = function handleAssignRole() {
                            var1 = undefined;
                            var4 = _closure2_slot34;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var6;
                    var6 = _closure2_slot11;
                    if(var6) { _fun0024_ip = 635; continue _fun0024 }
 628:
                    var8 = _closure2_slot9;
                    var6 = !var8;
 635:
                    if(var6) { _fun0024_ip = 642; continue _fun0024 }
 638:
                    var6 = _closure2_slot13;
 642:
                    var1['disabled'] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 23;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.8SuVoK;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var4)();
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot38 = var2;
    var3['default'] = var2;
    return var1;
})();