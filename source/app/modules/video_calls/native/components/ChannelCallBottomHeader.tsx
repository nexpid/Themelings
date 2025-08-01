// app/modules/video_calls/native/components/ChannelCallBottomHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.Pressable;
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
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'marginRight': 8, 'width': 16, 'height': 16};
    var4 = 16;
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['tintColor'] = var11;
    var7['icon'] = var10;
    var10 = {};
    var11 = 12;
    var10['marginLeft'] = var11;
    var7['cancelButton'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallBottomHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelCallBottomHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.channel;
            var1 = _closure1_slot9;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)();
            var _closure2_slot0 = var2;
            var1 = null;
            var6 = var1 == var2;
            var18 = undefined;
            if(var6) { _fun0001_ip = 67; continue _fun0001 }
 62:
            var18 = var2.channelId;
 67:
            var12 = var4.id;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 8;
            var8 = var6[var4];
            var14 = var7.bind(var5)(var8);
            var10 = var14.useStateFromStores;
            var8 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var10.bind(var14)(var9, var8);
            var4 = var6[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var9;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getSessionById;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 41; continue _fun0002 }
 31:
                    var5 = _closure2_slot0;
                    var4 = var5.sessionId;
 41:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0002_ip = 55; continue _fun0002 }
 52:
                    var1 = var4;
 55:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.bind(var5)(var17);
            if(!(var1 == var2)) { _fun0001_ip = 193; continue _fun0001 }
 186:
            if(!(var1 != var17)) { _fun0001_ip = 575; continue _fun0001 }
 193:
            var3 = var1 == var17;
            var2 = undefined;
            if(var3) { _fun0001_ip = 207; continue _fun0001 }
 202:
            var2 = var17.type;
 207:
            if(!(var1 == var2)) { _fun0001_ip = 235; continue _fun0001 }
 211:
            var4 = var1 == var16;
            var3 = undefined;
            if(var4) { _fun0001_ip = 232; continue _fun0001 }
 220:
            var4 = var16.clientInfo;
            var3 = var4.os;
 232:
            var2 = var3;
 235:
            var3 = var1 != var2;
            var15 = '';
            if(!var3) { _fun0001_ip = 249; continue _fun0001 }
 246:
            var15 = var2;
 249:
            var4 = _closure1_slot8;
            var20 = _closure1_slot1;
            var19 = _closure1_slot2;
            var7 = 10;
            var2 = var19[var7];
            var3 = var20.bind(var5)(var2);
            var2 = {};
            var10 = _closure1_slot7;
            var9 = _closure1_slot3;
            var6 = {};
            var14 = 11;
            var14 = var19[var14];
            var14 = var20.bind(var5)(var14);
            var14 = var14.bind(var5)(var15);
            var6['source'] = var14;
            var14 = var13.icon;
            var6['style'] = var14;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            var15 = _closure1_slot0;
            var7 = var19[var7];
            var7 = var15.bind(var5)(var7);
            var9 = var7.FocusedControlsBottomControlsHeaderText;
            var7 = {};
            var14 = 12;
            var14 = var19[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.getConsoleConnectingText;
            var12 = var18 === var12;
            var12 = var14.bind(var15)(var16, var17, var12);
            var7['children'] = var12;
            var7 = var10.bind(var5)(var9, var7);
            var6[1] = var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 559; continue _fun0001 }
 401:
            var10 = _closure1_slot7;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = 4;
            var8['hitSlop'] = var12;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 13;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var11 = var11.disconnectRemote;
            var8['onPress'] = var11;
            var11 = 14;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            var13 = var13.cancelButton;
            var11['style'] = var13;
            var13 = 15;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.ETE/oK;
            var13 = var14.bind(var15)(var13);
            var11['children'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 559:
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 575:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();