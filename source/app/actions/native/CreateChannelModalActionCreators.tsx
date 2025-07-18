// app/actions/native/CreateChannelModalActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = 'CREATE_CHANNEL_MODAL_KEY';
    var2['CREATE_CHANNEL_MODAL_KEY'] = var7;
    var7 = function open(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var9 = arg2;
            var10 = arg3;
            var7 = arg4;
            var2 = this;
            var _closure2_slot0 = var2;
            var8 = null;
            if(!(var8 != var9)) { _fun0001_ip = 173; continue _fun0001 }
 30:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 3;
            var4 = var2[var4];
            var6 = undefined;
            var5 = var5.bind(var6)(var4);
            var4 = var5.pushLazy;
            var11 = _closure1_slot0;
            var3 = 5;
            var3 = var2[var3];
            var11 = var11.bind(var6)(var3);
            var3 = 4;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var11.bind(var6)(var3, var2);
            var2 = {};
            var13 = var8 != var12;
            var11 = undefined;
            if(!var13) { _fun0001_ip = 109; continue _fun0001 }
 106:
            var11 = var12;
 109:
            var2['channelType'] = var11;
            var2['guildId'] = var9;
            var11 = var8 != var10;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var9 = var10;
 130:
            var2['categoryId'] = var9;
            var8 = var8 != var7;
            var6 = undefined;
            if(!var8) { _fun0001_ip = 147; continue _fun0001 }
 144:
            var6 = var7;
 147:
            var2['cloneChannelId'] = var6;
            var1 = function onChannelCreated(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                    var4 = _closure1_slot4;
                    var2 = var4.getChannel;
                    var4 = var2.bind(var4)(var3);
                    var5 = null;
                    var2 = arg2;
                    var2 = var5 != var2;
                    if(!var2) { _fun0002_ip = 53; continue _fun0002 }
 49:
                    var2 = var5 != var4;
 53:
                    if(!var2) { _fun0002_ip = 75; continue _fun0002 }
 56:
                    var6 = _closure1_slot3;
                    var5 = var6.has;
                    var4 = var4.type;
                    var2 = var5.bind(var6)(var4);
 75:
                    if(!var2) { _fun0002_ip = 111; continue _fun0002 }
 78:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.transitionToChannel;
                    var1 = var1.bind(var2)(var3);
 111:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onChannelCreated'] = var1;
            var1 = 'CREATE_CHANNEL_MODAL_KEY';
            var1 = var4.bind(var5)(var3, var2, var1);
 173:
            var1 = undefined;
            return var1;
        }
    };
    var2['open'] = var7;
    var4 = function close() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'CREATE_CHANNEL_MODAL_KEY';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['close'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/CreateChannelModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();