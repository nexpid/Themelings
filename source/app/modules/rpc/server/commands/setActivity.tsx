// app/modules/rpc/server/commands/setActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.RPC_SCOPE_CONFIG;
    var12 = var2.RPC_LOCAL_SCOPE;
    var2 = var2.TransportTypes;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ActivityGamePlatforms;
    var _closure1_slot5 = var4;
    var4 = var2.ActivityPartyPrivacy;
    var _closure1_slot6 = var4;
    var4 = var2.ActivityTypes;
    var _closure1_slot7 = var4;
    var4 = var2.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot9 = var2;
    var2 = ['1402418171662569542'];
    var _closure1_slot10 = var2;
    var2 = {};
    var7 = var4.SET_ACTIVITY;
    var4 = {};
    var9 = {};
    var11 = var10.ANY;
    var13 = 3;
    var10 = var6[var13];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var14 = var10.RPC;
    var10 = new Array(3);
    var10[0] = var14;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var13 = var13.RPC_ACTIVITIES_WRITE;
    var10[1] = var13;
    var10[2] = var12;
    var9[var11] = var10;
    var4['scope'] = var9;
    var9 = function validation(arg1) {
        var9 = arg1;
        var16 = _closure1_slot1;
        var14 = _closure1_slot2;
        var8 = 4;
        var1 = var14[var8];
        var13 = undefined;
        var1 = var16.bind(var13)(var1);
        var2 = var1.bind(var13)(var9);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var9.number;
        var5 = var4.bind(var9)();
        var4 = var5.min;
        var23 = 0;
        var4 = var4.bind(var5)(var23);
        var1['pid'] = var4;
        var4 = var14[var8];
        var4 = var16.bind(var13)(var4);
        var6 = var4.bind(var13)(var9);
        var5 = var6.keys;
        var4 = {};
        var10 = var9.string;
        var11 = var10.bind(var9)();
        var10 = var11.min;
        var12 = 2;
        var11 = var10.bind(var11)(var12);
        var10 = var11.max;
        var20 = 128;
        var10 = var10.bind(var11)(var20);
        var4['state'] = var10;
        var10 = var9.string;
        var11 = var10.bind(var9)();
        var10 = var11.uri;
        var15 = var10.bind(var11)();
        var10 = var15.min;
        var11 = 1;
        var15 = var10.bind(var15)(var11);
        var10 = var15.max;
        var22 = 256;
        var10 = var10.bind(var15)(var22);
        var4['state_url'] = var10;
        var10 = var9.string;
        var15 = var10.bind(var9)();
        var10 = var15.min;
        var15 = var10.bind(var15)(var12);
        var10 = var15.max;
        var10 = var10.bind(var15)(var20);
        var4['details'] = var10;
        var10 = var9.string;
        var15 = var10.bind(var9)();
        var10 = var15.uri;
        var15 = var10.bind(var15)();
        var10 = var15.min;
        var15 = var10.bind(var15)(var11);
        var10 = var15.max;
        var10 = var10.bind(var15)(var22);
        var4['details_url'] = var10;
        var10 = var14[var8];
        var10 = var16.bind(var13)(var10);
        var17 = var10.bind(var13)(var9);
        var15 = var17.keys;
        var10 = {};
        var18 = var9.number;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var18 = var18.bind(var19)(var11);
        var10['start'] = var18;
        var18 = var9.number;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var18 = var18.bind(var19)(var11);
        var10['end'] = var18;
        var10 = var15.bind(var17)(var10);
        var4['timestamps'] = var10;
        var10 = var14[var8];
        var10 = var16.bind(var13)(var10);
        var17 = var10.bind(var13)(var9);
        var15 = var17.keys;
        var10 = {};
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var11);
        var18 = var19.max;
        var21 = 300;
        var18 = var18.bind(var19)(var21);
        var10['large_image'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var12);
        var18 = var19.max;
        var18 = var18.bind(var19)(var20);
        var10['large_text'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.uri;
        var19 = var18.bind(var19)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var11);
        var18 = var19.max;
        var18 = var18.bind(var19)(var22);
        var10['large_url'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var11);
        var18 = var19.max;
        var18 = var18.bind(var19)(var21);
        var10['small_image'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var12);
        var18 = var19.max;
        var18 = var18.bind(var19)(var20);
        var10['small_text'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.uri;
        var19 = var18.bind(var19)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var11);
        var18 = var19.max;
        var18 = var18.bind(var19)(var22);
        var10['small_url'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var11);
        var18 = var19.max;
        var18 = var18.bind(var19)(var21);
        var10['invite_cover_image'] = var18;
        var10 = var15.bind(var17)(var10);
        var4['assets'] = var10;
        var10 = var14[var8];
        var10 = var16.bind(var13)(var10);
        var17 = var10.bind(var13)(var9);
        var15 = var17.keys;
        var10 = {};
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var12);
        var18 = var19.max;
        var18 = var18.bind(var19)(var20);
        var10['id'] = var18;
        var18 = var9.array;
        var21 = var18.bind(var9)();
        var19 = var21.items;
        var18 = var9.number;
        var22 = var18.bind(var9)();
        var18 = var22.min;
        var18 = var18.bind(var22)(var23);
        var19 = var19.bind(var21)(var18);
        var18 = var19.length;
        var18 = var18.bind(var19)(var12);
        var10['size'] = var18;
        var18 = var9.number;
        var21 = var18.bind(var9)();
        var19 = var21.default;
        var22 = _closure1_slot6;
        var18 = var22.PRIVATE;
        var21 = var19.bind(var21)(var18);
        var19 = var21.valid;
        var23 = var22.PRIVATE;
        var18 = new Array(2);
        var18[0] = var23;
        var22 = var22.PUBLIC;
        var18[1] = var22;
        var18 = var19.bind(var21)(var18);
        var10['privacy'] = var18;
        var10 = var15.bind(var17)(var10);
        var4['party'] = var10;
        var10 = var14[var8];
        var10 = var16.bind(var13)(var10);
        var17 = var10.bind(var13)(var9);
        var15 = var17.keys;
        var10 = {};
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var12);
        var18 = var19.max;
        var18 = var18.bind(var19)(var20);
        var10['match'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var12);
        var18 = var19.max;
        var18 = var18.bind(var19)(var20);
        var10['join'] = var18;
        var18 = var9.string;
        var19 = var18.bind(var9)();
        var18 = var19.min;
        var19 = var18.bind(var19)(var12);
        var18 = var19.max;
        var18 = var18.bind(var19)(var20);
        var10['spectate'] = var18;
        var10 = var15.bind(var17)(var10);
        var4['secrets'] = var10;
        var10 = var9.array;
        var15 = var10.bind(var9)();
        var10 = var15.items;
        var8 = var14[var8];
        var8 = var16.bind(var13)(var8);
        var18 = var8.bind(var13)(var9);
        var17 = var18.keys;
        var8 = {};
        var16 = var9.string;
        var19 = var16.bind(var9)();
        var16 = var19.min;
        var20 = var16.bind(var19)(var11);
        var19 = var20.max;
        var16 = 32;
        var20 = var19.bind(var20)(var16);
        var19 = var20.required;
        var19 = var19.bind(var20)();
        var8['label'] = var19;
        var19 = var9.string;
        var20 = var19.bind(var9)();
        var19 = var20.uri;
        var20 = var19.bind(var20)();
        var19 = var20.min;
        var21 = var19.bind(var20)(var11);
        var20 = var21.max;
        var19 = 512;
        var20 = var20.bind(var21)(var19);
        var19 = var20.required;
        var19 = var19.bind(var20)();
        var8['url'] = var19;
        var8 = var17.bind(var18)(var8);
        var10 = var10.bind(var15)(var8);
        var8 = var10.min;
        var10 = var8.bind(var10)(var11);
        var8 = var10.max;
        var8 = var8.bind(var10)(var12);
        var4['buttons'] = var8;
        var8 = var9.boolean;
        var8 = var8.bind(var9)();
        var4['instance'] = var8;
        var8 = var9.array;
        var12 = var8.bind(var9)();
        var10 = var12.items;
        var8 = var9.string;
        var15 = var8.bind(var9)();
        var8 = var15.min;
        var15 = var8.bind(var15)(var11);
        var8 = var15.max;
        var8 = var8.bind(var15)(var16);
        var10 = var10.bind(var12)(var8);
        var8 = var10.min;
        var11 = var8.bind(var10)(var11);
        var10 = var11.max;
        var8 = 10;
        var8 = var10.bind(var11)(var8);
        var4['supported_platforms'] = var8;
        var8 = var9.number;
        var12 = var8.bind(var9)();
        var11 = var12.default;
        var8 = _closure1_slot7;
        var10 = var8.PLAYING;
        var16 = var11.bind(var12)(var10);
        var15 = var16.valid;
        var27 = var8.PLAYING;
        var26 = var8.LISTENING;
        var25 = var8.WATCHING;
        var24 = var8.COMPETING;
        var28 = var16;
        var8 = var28[var15](var27, var26, var25, var24, var23);
        var4['type'] = var8;
        var8 = var9.number;
        var9 = var8.bind(var9)();
        var8 = var9.optional;
        var11 = var8.bind(var9)();
        var10 = var11.valid;
        var12 = _closure1_slot0;
        var7 = 5;
        var8 = var14[var7];
        var8 = var12.bind(var13)(var8);
        var8 = var8.StatusDisplayTypes;
        var9 = var8.NAME;
        var8 = var14[var7];
        var8 = var12.bind(var13)(var8);
        var8 = var8.StatusDisplayTypes;
        var8 = var8.STATE;
        var7 = var14[var7];
        var7 = var12.bind(var13)(var7);
        var7 = var7.StatusDisplayTypes;
        var7 = var7.DETAILS;
        var7 = var10.bind(var11)(var9, var8, var7);
        var4['status_display_type'] = var7;
        var6 = var5.bind(var6)(var4);
        var5 = var6.allow;
        var4 = null;
        var4 = var5.bind(var6)(var4);
        var1['activity'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['validation'] = var9;
    var8 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.socket;
            var _closure2_slot0 = var8;
            var3 = var1.args;
            var7 = var3.pid;
            var _closure2_slot1 = var7;
            var5 = var3.activity;
            var _closure2_slot2 = var5;
            var1 = var1.isSocketConnected;
            var _closure2_slot3 = var1;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot4;
            var6 = var3.IPC;
            var9 = new Array(3);
            var9[0] = var6;
            var6 = var3.WEBSOCKET;
            var9[1] = var6;
            var3 = var3.POST_MESSAGE;
            var9[2] = var3;
            var6 = var9.includes;
            var3 = var8.transport;
            var3 = var6.bind(var9)(var3);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var10 = var6.bind(var4)(var3);
            var9 = {};
            var3 = _closure1_slot9;
            var3 = var3.INVALID_COMMAND;
            var9['errorCode'] = var3;
            var12 = var8.transport;
            var3 = global;
            var3 = var3.HermesInternal;
            var11 = var3.concat;
            var6 = 'command not available from "';
            var3 = '" transport';
            var24 = var11.bind(var6)(var12, var3);
            var6 = var10.prototype;
            var6 = Object.create(var6, {constructor: {value: var10}});
            var26 = var6;
            var25 = var9;
            var3 = new var26[var10](var25, var24, var23);
            var3 = var3 instanceof Object ? var3 : var6;
            throw var3;
case 2:
            var6 = null;
            if(!(var6 == var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var9 = var3.IPC;
            var3 = var8.transport;
            if(!(var9 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            if(!(var6 != var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = {};
            var9 = var8.application;
            var9 = var9.name;
            var5['name'] = var9;
            var9 = var8.application;
            var12 = var9.id;
            var5['application_id'] = var12;
            var10 = var8.transport;
            var9 = _closure1_slot4;
            var9 = var9.POST_MESSAGE;
            var14 = var10 === var9;
            var10 = _closure1_slot5;
            if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var10.DESKTOP;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var9 = var10.EMBEDDED;
case 11:
            var5['platform'] = var9;
            var11 = _closure1_slot3;
            var10 = var11.getApplication;
            var13 = var6 != var12;
            var9 = undefined;
            if(!var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var12;
case 12:
            var17 = var10.bind(var11)(var9);
            var9 = var5.instance;
            var13 = var6 != var9;
            if(!var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = var9;
case 14:
            var9 = var5.party;
            var10 = var6 == var9;
            var12 = undefined;
            if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var9.privacy;
case 16:
            _closure2_slot4 = var12;
            var9 = delete var5.instance;
            var9 = var5.party;
            if(!(var6 != var9)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = delete var9.privacy;
case 18:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 8;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.computeActivityFlags;
            var9 = var6 != var17;
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 9;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.canLaunchFrame;
            var9 = var15.bind(var16)(var17);
case 20:
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = var14;
case 22:
            var26 = var11;
            var25 = var5;
            var24 = var13;
            var23 = var14;
            var22 = var9;
            var21 = var12;
            var9 = var26[var10](var25, var24, var23, var22, var21, var20);
            var15 = 0;
            if(!(var9 > var15)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5['flags'] = var9;
case 24:
            var11 = var5.assets;
            _closure2_slot5 = var11;
            var10 = var5.party;
            var17 = var5.secrets;
            var14 = var5.timestamps;
            var12 = var5.buttons;
            var9 = var5.type;
            if(!(var6 == var9)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = _closure1_slot7;
            var9 = var9.PLAYING;
            var5['type'] = var9;
case 26:
            if(!(var6 != var17)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var16 = 10;
            var9 = var9[var16];
            var13 = var13.bind(var4)(var9);
            var9 = var13.values;
            var17 = var9.bind(var13)(var17);
            var13 = var17.filter;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            var9 = var13.bind(var17)(var9);
            if(!(var6 != var10)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var17 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var16];
            var17 = var17.bind(var4)(var13);
            var13 = var17.intersection;
            var18 = var10.id;
            var10 = new Array(1);
            var10[0] = var18;
            var10 = var13.bind(var17)(var9, var10);
            var10 = var10.length;
            if(!(var10 > var15)) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var17 = _closure1_slot10;
            var13 = var17.includes;
            var10 = var8.application;
            var10 = var10.id;
            var10 = var13.bind(var17)(var10);
            if(var10) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 6;
            var10 = var17[var10];
            var18 = var13.bind(var4)(var10);
            var17 = {};
            var10 = _closure1_slot9;
            var10 = var10.INVALID_ACTIVITY_SECRET;
            var17['errorCode'] = var10;
            var10 = var18.prototype;
            var13 = Object.create(var10, {constructor: {value: var18}});
            var24 = 'secrets cannot match the party id';
            var26 = var13;
            var25 = var17;
            var10 = new var26[var18](var25, var24, var23);
            var10 = var10 instanceof Object ? var10 : var13;
            throw var10;
case 30:
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var16];
            var13 = var13.bind(var4)(var10);
            var10 = var13.uniq;
            var10 = var10.bind(var13)(var9);
            var10 = var10.length;
            var9 = var9.length;
            if(!(!(var10 < var9))) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            if(!(var6 == var12)) { _fun0001_ip = 36; continue _fun0001 }
case 28:
            if(!(var6 != var12)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var10 = var12.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.url;
                return var1;
            };
            var9 = var10.bind(var12)(var9);
            var3['button_urls'] = var9;
            var10 = var12.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.label;
                return var1;
            };
            var9 = var10.bind(var12)(var9);
            var5['buttons'] = var9;
case 37:
            var5['metadata'] = var3;
            if(!(var6 != var14)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var13 = global;
            var9 = var13.Object;
            var3 = var9.keys;
            var12 = var3.bind(var9)(var14);
            var3 = var12.length;
            var3 = var15 < var3;
            var10 = 11;
            var9 = 2;
            var15 = 0;
            if(!var3) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var16 = var12[var15];
            var17 = var13.Date;
            var3 = var17.now;
            var17 = var3.bind(var17)();
            var3 = var17.toString;
            var3 = var3.bind(var17)();
            var17 = var3.length;
            var18 = var14[var16];
            var3 = var18.toString;
            var3 = var3.bind(var18)();
            var3 = var3.length;
            var3 = var17 - var3;
            if(!(var3 > var9)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var18 = var13.Math;
            var17 = var18.floor;
            var19 = var14[var16];
            var20 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var20.bind(var4)(var3);
            var3 = var3.Millis;
            var3 = var3.SECOND;
            var3 = var19 * var3;
            var3 = var17.bind(var18)(var3);
            var14[var16] = var3;
case 42:
            var15 = var15 + 1;
            var3 = var12.length;
            if(var15 < var3) { _fun0001_ip = 41; continue _fun0001 }
case 39:
            if(!(var6 != var11)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var3 = var8.application;
            if(!(var6 != var3)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var3 = var8.application;
            var3 = var3.id;
            if(!(var6 != var3)) { _fun0001_ip = 46; continue _fun0001 }
case 48:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var10 = var6.bind(var4)(var3);
            var9 = var10.fetchAssetIds;
            var3 = var8.application;
            var6 = var3.id;
            var12 = var11.large_image;
            var3 = new Array(3);
            var3[0] = var12;
            var12 = var11.small_image;
            var3[1] = var12;
            var11 = var11.invite_cover_image;
            var3[2] = var11;
            var6 = var9.bind(var10)(var6, var3);
            _fun0001_ip = 49; continue _fun0001;
case 46:
            var3 = global;
            var3 = var3.Error;
            var9 = var3.prototype;
            var9 = Object.create(var9, {constructor: {value: var3}});
            var26 = var9;
            var3 = new var26[var3](var25);
            var3 = var3 instanceof Object ? var3 : var9;
            throw var3;
case 44:
            var3 = global;
            var10 = var3.Promise;
            var9 = var10.resolve;
            var3 = new Array(0);
            var6 = var9.bind(var10)(var3);
case 49:
            var3 = var6.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = arg1;
                    var1 = var7[Symbol.iterator];
                    var7 = var1().next;
                    var3 = var7().value;
                    var2 = var1;
                    var6 = undefined;
                    var2 = var2 === var6;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var5 = var3;
case 50:
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var8 = var7().value;
                    var3 = var1;
                    var3 = var3 === var6;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0002_ip = 52; continue _fun0002 }
case 54:
                    var4 = var8;
                    var2 = var3;
case 52:
                    var3 = undefined;
                    if(var2) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var8 = var7().value;
                    var7 = var1;
                    var7 = var7 === var6;
                    var3 = undefined;
                    var2 = var7;
                    if(var7) { _fun0002_ip = 55; continue _fun0002 }
case 57:
                    var3 = var8;
                    var2 = var7;
case 55:
                    if(var2) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                    var1.return();
case 58:
                    var2 = _closure2_slot5;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                    if(!(var7 == var5)) { _fun0002_ip = 3; continue _fun0002 }
case 62:
                    var2 = _closure2_slot5;
                    var2 = delete var2.large_image;
                    _fun0002_ip = 63; continue _fun0002;
case 3:
                    var2 = _closure2_slot5;
                    var2['large_image'] = var5;
case 63:
                    if(!(var7 == var4)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
                    var2 = _closure2_slot5;
                    var2 = delete var2.small_image;
                    _fun0002_ip = 66; continue _fun0002;
case 64:
                    var2 = _closure2_slot5;
                    var2['small_image'] = var4;
case 66:
                    if(!(var7 == var3)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
                    var2 = _closure2_slot5;
                    var2 = delete var2.invite_cover_image;
                    _fun0002_ip = 60; continue _fun0002;
case 67:
                    var2 = _closure2_slot5;
                    var2['invite_cover_image'] = var3;
case 60:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var6)();
                    if(var2) { _fun0002_ip = 69; continue _fun0002 }
case 70:
                    return var6;
case 69:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'LOCAL_ACTIVITY_UPDATE';
                    var3['type'] = var8;
                    var9 = _closure2_slot0;
                    var8 = var9.id;
                    var3['socketId'] = var8;
                    var8 = _closure2_slot1;
                    var3['pid'] = var8;
                    var8 = _closure2_slot2;
                    var3['activity'] = var8;
                    var10 = _closure2_slot4;
                    var3['partyPrivacy'] = var10;
                    var3 = var4.bind(var5)(var3);
                    var4 = var8.secrets;
                    var3 = var8.party;
                    var5 = {};
                    var9 = var9.application;
                    var9 = var9.id;
                    var5['application_id'] = var9;
                    var9 = var8.type;
                    var5['type'] = var9;
                    var9 = var8.name;
                    var5['name'] = var9;
                    var9 = var8.status_display_type;
                    var5['status_display_type'] = var9;
                    var10 = var8.details;
                    var11 = var7 != var10;
                    var8 = '';
                    var9 = var8;
                    if(!var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = var10;
case 12:
                    var5['details'] = var9;
                    var9 = _closure2_slot2;
                    var9 = var9.state;
                    var10 = var7 != var9;
                    if(!var10) { _fun0002_ip = 71; continue _fun0002 }
case 14:
                    var8 = var9;
case 71:
                    var5['state'] = var8;
                    var8 = _closure2_slot2;
                    var8 = var8.state_url;
                    var8 = var7 != var8;
                    if(var8) { _fun0002_ip = 72; continue _fun0002 }
case 73:
                    var9 = _closure2_slot2;
                    var9 = var9.details_url;
                    var8 = var7 != var9;
case 72:
                    if(var8) { _fun0002_ip = 74; continue _fun0002 }
case 75:
                    var9 = _closure2_slot2;
                    var10 = var9.assets;
                    var11 = var7 == var10;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 76; continue _fun0002 }
case 77:
                    var9 = var10.large_url;
case 76:
                    var8 = var7 != var9;
case 74:
                    if(var8) { _fun0002_ip = 78; continue _fun0002 }
case 79:
                    var9 = _closure2_slot2;
                    var10 = var9.assets;
                    var11 = var7 == var10;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 80; continue _fun0002 }
case 81:
                    var9 = var10.small_url;
case 80:
                    var8 = var7 != var9;
case 78:
                    var5['has_urls'] = var8;
                    if(!(var7 != var4)) { _fun0002_ip = 82; continue _fun0002 }
case 83:
                    var8 = var4.match;
                    var8 = !var8;
                    var8 = !var8;
                    var5['has_match_secret'] = var8;
                    var4 = var4.join;
                    var4 = !var4;
                    var4 = !var4;
                    var5['has_join_secret'] = var4;
case 82:
                    var4 = _closure2_slot5;
                    if(!(var7 != var4)) { _fun0002_ip = 26; continue _fun0002 }
case 84:
                    var4 = _closure2_slot5;
                    var4 = var4.large_image;
                    if(var4) { _fun0002_ip = 85; continue _fun0002 }
case 86:
                    var8 = _closure2_slot5;
                    var4 = var8.small_image;
case 85:
                    if(var4) { _fun0002_ip = 87; continue _fun0002 }
case 88:
                    var8 = _closure2_slot5;
                    var4 = var8.invite_cover_image;
case 87:
                    var4 = !var4;
                    var4 = !var4;
                    var5['has_images'] = var4;
case 26:
                    if(!(var7 != var3)) { _fun0002_ip = 89; continue _fun0002 }
case 90:
                    var4 = var3.size;
                    var7 = var7 != var4;
                    var4 = undefined;
                    if(!var7) { _fun0002_ip = 91; continue _fun0002 }
case 92:
                    var7 = var3.size;
                    var8 = 1;
                    var9 = var7[var8];
                    var7 = 0;
                    var7 = var9 > var7;
                    var4 = undefined;
                    if(!var7) { _fun0002_ip = 91; continue _fun0002 }
case 93:
                    var7 = var3.size;
                    var4 = var7[var8];
case 91:
                    var5['party_max'] = var4;
                    var3 = var3.id;
                    var5['party_id'] = var3;
case 89:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot8;
                    var2 = var2.ACTIVITY_UPDATED;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = _closure2_slot2;
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
            return var2;
case 36:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var6 = {};
            var2 = _closure1_slot9;
            var2 = var2.INVALID_ACTIVITY_SECRET;
            var6['errorCode'] = var2;
            var2 = var9.prototype;
            var3 = Object.create(var2, {constructor: {value: var9}});
            var24 = 'secrets cannot currently be sent with buttons';
            var26 = var3;
            var25 = var6;
            var2 = new var26[var9](var25, var24, var23);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 34:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var6 = {};
            var2 = _closure1_slot9;
            var2 = var2.INVALID_ACTIVITY_SECRET;
            var6['errorCode'] = var2;
            var2 = var9.prototype;
            var3 = Object.create(var2, {constructor: {value: var9}});
            var24 = 'secrets must be unique';
            var26 = var3;
            var25 = var6;
            var2 = new var26[var9](var25, var24, var23);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 7:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.dispatch;
            var2 = {};
            var9 = 'LOCAL_ACTIVITY_UPDATE';
            var2['type'] = var9;
            var8 = var8.id;
            var2['socketId'] = var8;
            var2['pid'] = var7;
            var2['activity'] = var5;
            var2 = var3.bind(var6)(var2);
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var2 = var2.bind(var3)(var5);
            return var2;
case 6:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot9;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var24 = 'nonzero pid required';
            var26 = var2;
            var25 = var3;
            var1 = new var26[var4](var25, var24, var23);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/setActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();