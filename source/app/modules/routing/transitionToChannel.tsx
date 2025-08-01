// app/modules/routing/transitionToChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function transitionToChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg2;
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 233; continue _fun0001 }
 32:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 2;
            var4 = var8[var4];
            var5 = undefined;
            var9 = var7.bind(var5)(var4);
            var4 = var9.getGuildIdForGenericRedirect;
            var11 = var4.bind(var9)(var1);
            var9 = _closure1_slot1;
            var4 = 3;
            var4 = var8[var4];
            var12 = var9.bind(var5)(var4);
            var10 = var12.preload;
            var9 = var1.guild_id;
            var4 = var1.id;
            var4 = var10.bind(var12)(var9, var4);
            var4 = 4;
            var4 = var8[var4];
            var10 = var7.bind(var5)(var4);
            var9 = var10.transitionTo;
            var8 = _closure1_slot4;
            var7 = var8.CHANNEL;
            var4 = var1.id;
            var8 = var7.bind(var8)(var11, var4);
            var7 = {};
            var4 = true;
            var7['openChannel'] = var4;
            var14 = var7;
            var13 = var6;
            var11 = copyDataProperties(var14, var13);
            var7 = var9.bind(var10)(var8, var7);
            var3 = var3 != var6;
            if(!var3) { _fun0001_ip = 180; continue _fun0001 }
 174:
            var3 = var6.openTextInVoiceIfVoiceChannel;
 180:
            if(!var3) { _fun0001_ip = 193; continue _fun0001 }
 183:
            var6 = var1.isGuildVocal;
            var3 = var6.bind(var1)();
 193:
            if(!var3) { _fun0001_ip = 233; continue _fun0001 }
 196:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.updateChatOpen;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1, var4);
 233:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function transitionToThreadMessage(arg1, arg2, arg3) {
        var2 = arg1;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 6;
        var4 = var6[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var5 = var2.parent_id;
        var4 = null;
        var5 = var4 != var5;
        var4 = 'Thread must have a parent ID.';
        var4 = var7.bind(var1)(var5, var4);
        var5 = _closure1_slot0;
        var4 = 2;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.getGuildIdForGenericRedirect;
        var8 = var4.bind(var7)(var2);
        var4 = 4;
        var4 = var6[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.transitionTo;
        var7 = _closure1_slot4;
        var6 = var7.CHANNEL;
        var3 = var2.id;
        var2 = arg2;
        var3 = var6.bind(var7)(var8, var3, var2);
        var2 = {};
        var6 = true;
        var2['openChannel'] = var6;
        var10 = arg3;
        var11 = var2;
        var6 = copyDataProperties(var11, var10);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Routes;
    var _closure1_slot4 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/routing/transitionToChannel.tsx';
    var6 = var7.bind(var8)(var6);
    var3['transitionToChannel'] = var5;
    var5 = function transitionToThread(arg1, arg2) {
        var2 = arg1;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 6;
        var4 = var6[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var5 = var2.parent_id;
        var4 = null;
        var5 = var4 != var5;
        var4 = 'Thread must have a parent ID.';
        var4 = var7.bind(var1)(var5, var4);
        var5 = _closure1_slot0;
        var4 = 2;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.getGuildIdForGenericRedirect;
        var7 = var4.bind(var7)(var2);
        var4 = 4;
        var4 = var6[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.transitionTo;
        var6 = _closure1_slot4;
        var3 = var6.CHANNEL;
        var2 = var2.id;
        var3 = var3.bind(var6)(var7, var2);
        var2 = {};
        var6 = true;
        var2['openChannel'] = var6;
        var8 = arg2;
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['transitionToThread'] = var5;
    var3['transitionToThreadMessage'] = var4;
    var4 = function tryTransitionToThreadMessage(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg4;
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 == var4)) { _fun0002_ip = 46; continue _fun0002 }
 29:
            var6 = _closure1_slot5;
            var3 = undefined;
            var2 = arg1;
            var2 = var6.bind(var3)(var2, var5);
            _fun0002_ip = 62; continue _fun0002;
 46:
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = arg3;
            var1 = var3.bind(var2)(var4, var1, var5);
 62:
            var1 = undefined;
            return var1;
        }
    };
    var3['tryTransitionToThreadMessage'] = var4;
    var4 = function transitionToMessage(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 127; continue _fun0003 }
 26:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var3 = var7.getGuildIdForGenericRedirect;
            var7 = var3.bind(var7)(var1);
            var3 = 4;
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.transitionTo;
            var6 = _closure1_slot4;
            var5 = var6.CHANNEL;
            var2 = var1.id;
            var1 = arg2;
            var2 = var5.bind(var6)(var7, var2, var1);
            var1 = {};
            var5 = true;
            var1['openChannel'] = var5;
            var9 = arg3;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var1 = var3.bind(var4)(var2, var1);
 127:
            var1 = undefined;
            return var1;
        }
    };
    var3['transitionToMessage'] = var4;
    var2 = function transitionToStaticChannelRoute(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.transitionTo;
        var7 = _closure1_slot4;
        var6 = var7.CHANNEL;
        var3 = arg1;
        var2 = arg2;
        var3 = var6.bind(var7)(var3, var2);
        var2 = {};
        var6 = true;
        var2['openChannel'] = var6;
        var8 = arg3;
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['transitionToStaticChannelRoute'] = var2;
    return var1;
})();