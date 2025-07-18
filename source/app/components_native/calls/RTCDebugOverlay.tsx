// app/components_native/calls/RTCDebugOverlay.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function Text(arg1) {
        var4 = _closure1_slot14;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 12;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.LegacyText;
        var1 = {};
        var7 = arg1;
        var8 = var1;
        var6 = copyDataProperties(var8, var7);
        var5 = _closure1_slot18;
        var6 = var5.text;
        var5 = 'style';
        var1[var5] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function Section(arg1) {
        var1 = arg1;
        var7 = var1.title;
        var9 = var1.children;
        var4 = _closure1_slot15;
        var3 = _closure1_slot16;
        var2 = {};
        var6 = _closure1_slot22;
        var5 = {};
        var1 = new Array(2);
        var1[0] = var7;
        var7 = ':';
        var1[1] = var7;
        var5['children'] = var1;
        var1 = undefined;
        var6 = var4.bind(var1)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot14;
        var7 = _closure1_slot5;
        var6 = {};
        var10 = _closure1_slot18;
        var10 = var10.indent;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var5[1] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function renderObjectKV(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.entries;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var1 = var4[Symbol.iterator];
                var4 = var1().next;
                var3 = var4().value;
                var2 = var1;
                var6 = undefined;
                var2 = var2 === var6;
                var5 = undefined;
                if(var2) { _fun0001_ip = 27; continue _fun0001 }
 24:
                var5 = var3;
 27:
                var3 = undefined;
                if(var2) { _fun0001_ip = 57; continue _fun0001 }
 32:
                var7 = var4().value;
                var4 = var1;
                var4 = var4 === var6;
                var3 = undefined;
                var2 = var4;
                if(var4) { _fun0001_ip = 57; continue _fun0001 }
 51:
                var3 = var7;
                var2 = var4;
 57:
                if(var2) { _fun0001_ip = 63; continue _fun0001 }
 60:
                var1.return();
 63:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var8 = var3;
                if(!var1) { _fun0001_ip = 150; continue _fun0001 }
 87:
                var1 = var3.at;
                var2 = -1;
                var4 = var1.bind(var3)(var2);
                var1 = null;
                var7 = var1 == var4;
                var1 = undefined;
                if(var7) { _fun0001_ip = 120; continue _fun0001 }
 115:
                var1 = var4.value;
 120:
                var4 = 'number';
                var1 = typeof var1;
                var8 = var3;
                if(!(var4 === var1)) { _fun0001_ip = 150; continue _fun0001 }
 134:
                var1 = var3.at;
                var1 = var1.bind(var3)(var2);
                var8 = var1.value;
 150:
                var1 = null;
                if(!(var1 != var8)) { _fun0001_ip = 167; continue _fun0001 }
 156:
                var2 = 'object';
                var1 = typeof var8;
                if(!(var2 !== var1)) { _fun0001_ip = 258; continue _fun0001 }
 167:
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var4 = _closure1_slot18;
                var4 = var4.row;
                var1['style'] = var4;
                var9 = _closure1_slot15;
                var7 = _closure1_slot22;
                var4 = {};
                var10 = new Array(3);
                var10[0] = var5;
                var12 = ': ';
                var10[1] = var12;
                var11 = _closure1_slot17;
                var11 = var11.bind(var6)(var8);
                var10[2] = var11;
                var4['children'] = var10;
                var4 = var9.bind(var6)(var7, var4);
                var1['children'] = var4;
                var1 = var3.bind(var6)(var2, var1, var5);
                _fun0001_ip = 295; continue _fun0001;
 258:
                var4 = _closure1_slot14;
                var3 = _closure1_slot23;
                var2 = {};
                var2['title'] = var5;
                var7 = _closure1_slot24;
                var7 = var7.bind(var6)(var8);
                var2['children'] = var7;
                var1 = var4.bind(var6)(var3, var2, var5);
 295:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function RTCDebugGeneral() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 13;
            var7 = var6[var2];
            var4 = undefined;
            var11 = var3.bind(var4)(var7);
            var10 = var11.useStateFromStoresObject;
            var7 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var7;
            var8 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var3 = var4.getGuildId;
                var3 = var3.bind(var4)();
                var1['guildId'] = var3;
                var3 = _closure1_slot9;
                var2 = var3.getChannelId;
                var2 = var2.bind(var3)();
                var1['channelId'] = var2;
                return var1;
            };
            var7 = new Array(0);
            var7 = var10.bind(var11)(var9, var8, var7);
            var10 = var7.guildId;
            var _closure2_slot0 = var10;
            var9 = var7.channelId;
            var _closure2_slot1 = var9;
            var7 = var6[var2];
            var13 = var3.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var7;
            var8 = new Array(1);
            var8[0] = var10;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var12.bind(var13)(var11, var7, var8);
            var2 = var6[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var8)(var3, var1, var2);
            var3 = _closure1_slot1;
            var1 = 14;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var8 = var1.bind(var4)(var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot23;
            var1 = {};
            var6 = 'general';
            var1['title'] = var6;
            var6 = _closure1_slot24;
            var5 = {};
            var7 = {};
            var7['id'] = var10;
            var10 = null;
            var12 = var10 != var11;
            if(!var12) { _fun0002_ip = 244; continue _fun0002 }
 239:
            var10 = var11.name;
 244:
            var7['name'] = var10;
            var5['guild'] = var7;
            var7 = {};
            var7['id'] = var9;
            var7['name'] = var8;
            var5['channel'] = var7;
            var5 = var6.bind(var4)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function renderContextInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot21;
            var1 = arg1;
            var5 = var3[var1];
            var1 = null;
            var3 = var1 != var5;
            if(!var3) { _fun0003_ip = 37; continue _fun0003 }
 23:
            var4 = _closure1_slot14;
            var3 = undefined;
            var2 = {};
            var1 = var4.bind(var3)(var5, var2);
 37:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function RTCDebugContext(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.context;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var4 = 13;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getAllStats;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4, var1, var3);
            var6 = null;
            var3 = var6 == var4;
            var1 = null;
            if(var3) { _fun0004_ip = 119; continue _fun0004 }
 89:
            var5 = var4.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var5)) { _fun0004_ip = 119; continue _fun0004 }
 102:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot23;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var12 = var1.mediaEngineConnectionId;
                    var7 = global;
                    var2 = var7.HermesInternal;
                    var10 = var2.concat;
                    var6 = '';
                    var2 = ' - ';
                    var2 = var10.bind(var6)(var9, var2, var12);
                    var3['title'] = var2;
                    var6 = _closure1_slot26;
                    var2 = undefined;
                    var9 = var6.bind(var2)(var9);
                    var6 = new Array(4);
                    var6[0] = var9;
                    var13 = var1.transport;
                    var10 = _closure1_slot14;
                    var9 = {};
                    var12 = 'transport';
                    var9['title'] = var12;
                    var12 = _closure1_slot24;
                    var12 = var12.bind(var2)(var13);
                    var9['children'] = var12;
                    var9 = var10.bind(var2)(var4, var9);
                    var6[1] = var9;
                    var9 = var1.rtp;
                    var14 = var9.outbound;
                    var10 = _closure1_slot14;
                    var9 = {};
                    var12 = 'outbound';
                    var9['title'] = var12;
                    var13 = var14.map;
                    var12 = function(arg1, arg2) {
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot19;
                        var3 = {};
                        var1 = arg1;
                        var3['data'] = var1;
                        var2 = undefined;
                        var1 = arg2;
                        var1 = var5.bind(var2)(var4, var3, var1);
                        return var1;
                    };
                    var12 = var13.bind(var14)(var12);
                    var9['children'] = var12;
                    var9 = var10.bind(var2)(var4, var9);
                    var6[2] = var9;
                    var9 = var1.rtp;
                    var10 = var9.inbound;
                    var _closure3_slot0 = var10;
                    var9 = var7.Object;
                    var7 = var9.keys;
                    var13 = var7.bind(var9)(var10);
                    var10 = var13.length;
                    var9 = 0;
                    var7 = null;
                    if(!(var9 !== var10)) { _fun0005_ip = 274; continue _fun0005 }
 229:
                    var10 = _closure1_slot14;
                    var9 = _closure1_slot23;
                    var8 = {};
                    var12 = 'inbound';
                    var8['title'] = var12;
                    var12 = var13.map;
                    var11 = function(arg1) {
                        var5 = arg1;
                        var4 = _closure1_slot14;
                        var3 = _closure1_slot20;
                        var2 = {};
                        var2['userId'] = var5;
                        var1 = _closure3_slot0;
                        var1 = var1[var5];
                        var2['data'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    };
                    var11 = var12.bind(var13)(var11);
                    var8['children'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
 274:
                    var6[3] = var7;
                    var3['children'] = var6;
                    var1 = var1.mediaEngineConnectionId;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 119:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
    var9 = var7.bind(var1)(var4);
    var _closure1_slot4 = var9;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MediaEngineContextTypes;
    var _closure1_slot13 = var7;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = function asString(arg1) {
        var1 = arg1;
        var1 = '' + var1;
        return var1;
    };
    var _closure1_slot17 = var4;
    var8 = var10.create;
    var4 = {};
    var11 = {};
    var19 = var10.absoluteFillObject;
    var20 = var11;
    var12 = copyDataProperties(var20, var19);
    var12 = 10;
    var12 = var6[var12];
    var17 = var5.bind(var1)(var12);
    var16 = var17.hexWithOpacity;
    var12 = 11;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var15 = var14.BLACK_500;
    var14 = 0.7;
    var15 = var16.bind(var17)(var15, var14);
    var14 = 'backgroundColor';
    var11[var14] = var15;
    var4['container'] = var11;
    var11 = {'flex': 1, 'margin': 8};
    var4['scroller'] = var11;
    var11 = {};
    var14 = 16;
    var11['marginLeft'] = var14;
    var4['indent'] = var11;
    var11 = {};
    var14 = 'row';
    var11['flexDirection'] = var14;
    var4['row'] = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.WHITE_500;
    var11['color'] = var12;
    var12 = 14;
    var11['fontSize'] = var12;
    var4['text'] = var11;
    var11 = {'flexGrow': 0, 'margin': 8};
    var4['buttonClose'] = var11;
    var4 = var8.bind(var10)(var4);
    var _closure1_slot18 = var4;
    var8 = var9.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var5 = var3.type;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['type'] = var1;
        var9 = {};
        var8 = var3;
        var7 = var2;
        var6 = copyDataProperties(var9, var8, var7);
        var4 = _closure1_slot14;
        var3 = _closure1_slot23;
        var2 = {};
        var2['title'] = var5;
        var5 = _closure1_slot24;
        var1 = undefined;
        var5 = var5.bind(var1)(var6);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var8 = var9.memo;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var8 = var1.userId;
            var _closure2_slot0 = var8;
            var7 = var1.data;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 13;
            var2 = var4[var2];
            var4 = undefined;
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var2;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var6, var2, var3);
            var2 = global;
            var3 = var2.HermesInternal;
            var6 = var3.concat;
            var3 = '';
            var3 = var6.bind(var3)(var8);
            var8 = null;
            var6 = var3;
            if(!(var8 != var9)) { _fun0006_ip = 154; continue _fun0006 }
 114:
            var8 = var9.toString;
            var10 = var8.bind(var9)();
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var8 = ' (';
            var2 = ')';
            var2 = var9.bind(var8)(var10, var2);
            var6 = var3 + var2;
 154:
            var3 = _closure1_slot14;
            var2 = _closure1_slot23;
            var1 = {};
            var1['title'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = _closure1_slot14;
                var4 = _closure1_slot19;
                var3 = {};
                var1 = arg1;
                var3['data'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var9 = var7.DEFAULT;
    var8 = function DefaultContextInfo() {
        var3 = _closure1_slot24;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var2 = 13;
        var4 = var4[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var4);
        var6 = var7.useStateFromStoresObject;
        var1 = _closure1_slot9;
        var5 = new Array(1);
        var5[0] = var1;
        var4 = function() {
            var1 = {};
            var4 = _closure1_slot9;
            var3 = var4.getMediaSessionId;
            var3 = var3.bind(var4)();
            var1['mediaSessionId'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var1['state'] = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 15;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getShortHostname;
            var6 = _closure1_slot9;
            var3 = var6.getHostname;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            var1['hostname'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.getQuality;
            var3 = var3.bind(var4)();
            var1['quality'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.getAveragePing;
            var3 = var3.bind(var4)();
            var1['averagePing'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.getLastPing;
            var3 = var3.bind(var4)();
            var1['lastPing'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.getOutboundLossRate;
            var3 = var3.bind(var4)();
            var1['outboundLossRate'] = var3;
            var3 = _closure1_slot9;
            var2 = var3.getDuration;
            var2 = var2.bind(var3)();
            var1['duration'] = var2;
            return var1;
        };
        var1 = new Array(0);
        var1 = var6.bind(var7)(var5, var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4[var9] = var8;
    var8 = var7.STREAM;
    var7 = function StreamContextInfo() {
        var4 = _closure1_slot11;
        var3 = var4.getAllActiveStreamKeys;
        var5 = var3.bind(var4)();
        var3 = 0;
        var8 = var5[var3];
        var _closure2_slot0 = var8;
        var3 = _closure1_slot24;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var2 = 13;
        var5 = var5[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var5);
        var6 = var7.useStateFromStoresObject;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var8;
        var1 = function() {
            var1 = {};
            var4 = _closure1_slot11;
            var5 = var4.getMediaSessionId;
            var3 = _closure2_slot0;
            var5 = var5.bind(var4)(var3);
            var1['mediaSessionId'] = var5;
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 15;
            var5 = var5[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var5);
            var5 = var6.getShortHostname;
            var2 = var4.getHostname;
            var2 = var2.bind(var4)(var3);
            var2 = var5.bind(var6)(var2);
            var1['hostname'] = var2;
            var2 = var4.getQuality;
            var2 = var2.bind(var4)(var3);
            var1['quality'] = var2;
            return var1;
        };
        var1 = var6.bind(var7)(var5, var1, var4);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4[var8] = var7;
    var _closure1_slot21 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/calls/RTCDebugOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RTCDebugOverlay(arg1) {
        var1 = arg1;
        var9 = var1.onClose;
        var6 = var1.style;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.open;
            var1 = var1.bind(var2)();
            var1 = function() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 17;
                var2 = var6[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.wait;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.close;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var4 = _closure1_slot15;
        var14 = _closure1_slot0;
        var15 = _closure1_slot3;
        var1 = 18;
        var1 = var15[var1];
        var3 = undefined;
        var1 = var14.bind(var3)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {'top': true, 'left': true, 'right': true, 'bottom': true};
        var5 = _closure1_slot18;
        var7 = var5.container;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot15;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = _closure1_slot18;
        var8 = var8.scroller;
        var5['style'] = var8;
        var8 = 'white';
        var5['indicatorStyle'] = var8;
        var13 = _closure1_slot14;
        var12 = _closure1_slot25;
        var8 = {};
        var12 = var13.bind(var3)(var12, var8);
        var8 = new Array(2);
        var8[0] = var12;
        var12 = global;
        var16 = var12.Object;
        var13 = var16.values;
        var12 = _closure1_slot13;
        var13 = var13.bind(var16)(var12);
        var12 = var13.map;
        var11 = function(arg1) {
            var5 = arg1;
            var4 = _closure1_slot14;
            var3 = _closure1_slot27;
            var2 = {};
            var2['context'] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2, var5);
            return var1;
        };
        var11 = var12.bind(var13)(var11);
        var8[1] = var11;
        var5['children'] = var8;
        var6 = var7.bind(var3)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot14;
        var7 = _closure1_slot1;
        var6 = 19;
        var6 = var15[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var11 = 20;
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.cpT0Cg;
        var11 = var12.bind(var13)(var11);
        var6['text'] = var11;
        var10 = _closure1_slot18;
        var10 = var10.buttonClose;
        var6['style'] = var10;
        var6['onPress'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();