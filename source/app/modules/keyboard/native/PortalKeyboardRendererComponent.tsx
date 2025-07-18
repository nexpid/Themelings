// app/modules/keyboard/native/PortalKeyboardRendererComponent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function PortalKeyboardRendererComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = var4.item;
            var2 = var3.channelId;
            var _closure2_slot0 = var2;
            var10 = var3.chatInputRef;
            var3 = var3.type;
            var7 = var4.state;
            var9 = var4.cleanUp;
            var5 = _closure1_slot4;
            var4 = var5.getChannel;
            var11 = var4.bind(var5)(var2);
            var _closure2_slot1 = var11;
            var5 = _closure1_slot3;
            var8 = var5.useMemo;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 3;
                    var3 = var3[var5];
                    var4 = undefined;
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var6 === var3)) { _fun0002_ip = 67; continue _fun0002 }
 42:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
                    _fun0002_ip = 71; continue _fun0002;
 67:
                    var1 = _closure2_slot1;
 71:
                    return var1;
                }
            };
            var8 = var8.bind(var5)(var2, var4);
            var _closure2_slot2 = var8;
            var4 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0003_ip = 39; continue _fun0003 }
 18:
                    var2 = {};
                    var3 = _closure2_slot2;
                    var2['channel'] = var3;
                    var3 = 'channel';
                    var2['type'] = var3;
                    var1 = var2;
 39:
                    return var1;
                }
            };
            var11 = var4.bind(var5)(var1, var2);
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 443; continue _fun0001 }
 135:
            var5 = undefined;
            if(!(var5 !== var11)) { _fun0001_ip = 443; continue _fun0001 }
 144:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 4;
            var2 = var2[var12];
            var2 = var4.bind(var5)(var2);
            var2 = var2.KeyboardTypes;
            var2 = var2.APP_LAUNCHER;
            if(!(var2 !== var3)) { _fun0001_ip = 357; continue _fun0001 }
 183:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var2 = var4.bind(var5)(var2);
            var2 = var2.KeyboardTypes;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0001_ip = 304; continue _fun0001 }
 216:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var2 = var4.bind(var5)(var2);
            var2 = var2.KeyboardTypes;
            var2 = var2.EXPRESSION;
            if(!(var2 !== var3)) { _fun0001_ip = 251; continue _fun0001 }
 249:
            return var1;
 251:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 8;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var8;
            var2['chatInputRef'] = var10;
            var2['onClose'] = var9;
            var2['transitionState'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 304:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 7;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var8;
            var2['chatInputRef'] = var10;
            var2['onClose'] = var9;
            var2['transitionState'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 357:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['context'] = var11;
            var2['chatInputRef'] = var10;
            var2['onClose'] = var9;
            var2['transitionState'] = var7;
            var7 = _closure1_slot0;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.AppLauncherEntrypoint;
            var6 = var6.TEXT;
            var2['entrypoint'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 443:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardRendererComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();