// app/modules/voice_panel/VoicePanelStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.createWithEqualityFn;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = global;
        var4 = var3.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        var1['channels'] = var4;
        var4 = false;
        var1['isActivityFocused'] = var4;
        var4 = function isVoicePanelFullscreen() {
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.voicePanelsFullscreen;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['isVoicePanelFullscreen'] = var4;
        var4 = function isAnyVoicePanelOpen() {
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.voicePanelsOpened;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['isAnyVoicePanelOpen'] = var4;
        var4 = var3.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        var1['voicePanelsFullscreen'] = var4;
        var4 = var3.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        var1['voicePanelsOpened'] = var4;
        var3 = var3.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var6 = var4;
        var3 = new var6[var3](var5);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['voicePanelsPIP'] = var3;
        var3 = function openChannel(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot2;
                var1 = var4.getChannel;
                var6 = var1.bind(var4)(var7);
                var1 = null;
                var4 = var1 == var6;
                var1 = undefined;
                var5 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var6.isGuildStageVoice;
                var5 = var4.bind(var6)();
case 2:
                var4 = true;
                var4 = var4 === var5;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot1;
                var5 = var5.bind(var1)();
                var6 = var5.channels;
                var5 = var6.has;
                var4 = var5.bind(var6)(var7);
case 4:
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var1 = {};
                        var12 = var1;
                        var11 = var3;
                        var2 = copyDataProperties(var12, var11);
                        var6 = global;
                        var8 = var6.Set;
                        var7 = _closure3_slot0;
                        var2 = new Array(1);
                        var2[0] = var7;
                        var9 = var6.Array;
                        var5 = var9.from;
                        var4 = var3.channels;
                        var11 = var5.bind(var9)(var4);
                        var5 = 1;
                        var12 = var2;
                        var10 = var5;
                        var4 = arraySpread(var12, var11, var10);
                        var4 = var8.prototype;
                        var4 = Object.create(var4, {constructor: {value: var8}});
                        var13 = var4;
                        var12 = var2;
                        var2 = new var13[var8](var12, var11);
                        var4 = var2 instanceof Object ? var2 : var4;
                        var2 = 'channels';
                        var1[var2] = var4;
                        var4 = var6.Set;
                        var2 = new Array(1);
                        var2[0] = var7;
                        var7 = var6.Array;
                        var6 = var7.from;
                        var3 = var3.voicePanelsOpened;
                        var11 = var6.bind(var7)(var3);
                        var12 = var2;
                        var3 = arraySpread(var12, var11, var10);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var13 = var3;
                        var12 = var2;
                        var2 = new var13[var4](var12, var11);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = 'voicePanelsOpened';
                        var1[var2] = var3;
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
case 6:
                return var1;
            }
        };
        var1['openChannel'] = var3;
        var3 = function closeChannel(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var5 = var3.channels;
                        var8 = var3.voicePanelsFullscreen;
                        var9 = var3.voicePanelsOpened;
                        var2 = var5.has;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var5)(var1);
                        if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var2 = var8.has;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var8)(var1);
                        if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 5:
                        var2 = var9.has;
                        var1 = _closure3_slot0;
                        var2 = var2.bind(var9)(var1);
                        var1 = var3;
                        if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 8:
                        var4 = var5.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var2);
                        var6 = var5;
                        if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var2 = global;
                        var2 = var2.Set;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var12 = var4;
                        var11 = var5;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var5 = var2.delete;
                        var4 = _closure3_slot0;
                        var4 = var5.bind(var2)(var4);
                        var6 = var2;
case 11:
                        var4 = var8.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var8)(var2);
                        var5 = var8;
                        if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var2 = global;
                        var2 = var2.Set;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var12 = var4;
                        var11 = var8;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var8 = var2.delete;
                        var4 = _closure3_slot0;
                        var4 = var8.bind(var2)(var4);
                        var5 = var2;
case 13:
                        var4 = var9.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var9)(var2);
                        var4 = var9;
                        if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var2 = global;
                        var2 = var2.Set;
                        var8 = var2.prototype;
                        var8 = Object.create(var8, {constructor: {value: var2}});
                        var12 = var8;
                        var11 = var9;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var8;
                        var8 = var2.delete;
                        var7 = _closure3_slot0;
                        var7 = var8.bind(var2)(var7);
                        var4 = var2;
case 15:
                        var2 = {};
                        var11 = var2;
                        var10 = var3;
                        var3 = copyDataProperties(var11, var10);
                        var3 = 'channels';
                        var2[var3] = var6;
                        var3 = 'voicePanelsFullscreen';
                        var2[var3] = var5;
                        var3 = 'voicePanelsOpened';
                        var2[var3] = var4;
                        var1 = var2;
case 10:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['closeChannel'] = var3;
        var3 = function isMounted(arg1) {
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var3 = var1.channels;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['isMounted'] = var3;
        var3 = function setIsActivityFocused(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var5 = var4.isActivityFocused;
                        var2 = _closure3_slot0;
                        var1 = var4;
                        if(!(var5 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var2 = {};
                        var7 = var2;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var4 = _closure3_slot0;
                        var3 = 'isActivityFocused';
                        var2[var3] = var4;
                        var1 = var2;
case 17:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setIsActivityFocused'] = var3;
        var3 = function setChannelPanelFullscreen(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var2 = global;
                        var4 = var2.Set;
                        var8 = var1.voicePanelsFullscreen;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var9 = var3;
                        var2 = new var9[var4](var8, var7);
                        var4 = var2 instanceof Object ? var2 : var3;
                        var5 = _closure3_slot1;
                        var6 = var4.has;
                        var3 = _closure3_slot0;
                        var3 = var6.bind(var4)(var3);
                        if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        return var1;
case 21:
                        var6 = var4.delete;
                        var5 = _closure3_slot0;
                        var5 = var6.bind(var4)(var5);
                        _fun0004_ip = 23; continue _fun0004;
case 19:
                        if(var3) { _fun0004_ip = 24; continue _fun0004 }
case 4:
                        var3 = var4.add;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 23:
                        var2 = {};
                        var8 = var2;
                        var7 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 'voicePanelsFullscreen';
                        var2[var3] = var4;
                        return var2;
case 24:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setChannelPanelFullscreen'] = var3;
        var3 = function setChannelPanelOpen(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.channels;
                        var4 = var5.has;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        return var1;
case 25:
                        var3 = global;
                        var5 = var3.Set;
                        var8 = var1.voicePanelsOpened;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var9 = var4;
                        var3 = new var9[var5](var8, var7);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var5 = _closure3_slot1;
                        var6 = var4.has;
                        var3 = _closure3_slot0;
                        var3 = var6.bind(var4)(var3);
                        if(var5) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                        if(var3) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                        return var1;
case 29:
                        var6 = var4.delete;
                        var5 = _closure3_slot0;
                        var5 = var6.bind(var4)(var5);
                        _fun0005_ip = 6; continue _fun0005;
case 27:
                        if(var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                        var3 = var4.add;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 6:
                        var2 = {};
                        var8 = var2;
                        var7 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 'voicePanelsOpened';
                        var2[var3] = var4;
                        return var2;
case 31:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setChannelPanelOpen'] = var3;
        var3 = function isChannelOpen(arg1) {
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var3 = var1.voicePanelsOpened;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['isChannelOpen'] = var3;
        var2 = function setChannelPanelPIP(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var2 = global;
                        var4 = var2.Set;
                        var8 = var1.voicePanelsPIP;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var9 = var3;
                        var2 = new var9[var4](var8, var7);
                        var4 = var2 instanceof Object ? var2 : var3;
                        var5 = _closure3_slot1;
                        var6 = var4.has;
                        var3 = _closure3_slot0;
                        var3 = var6.bind(var4)(var3);
                        if(var5) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        if(var3) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                        return var1;
case 21:
                        var6 = var4.delete;
                        var5 = _closure3_slot0;
                        var5 = var6.bind(var4)(var5);
                        _fun0006_ip = 23; continue _fun0006;
case 19:
                        if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 4:
                        var3 = var4.add;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 23:
                        var2 = {};
                        var8 = var2;
                        var7 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 'voicePanelsPIP';
                        var2[var3] = var4;
                        return var2;
case 24:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setChannelPanelPIP'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/VoicePanelStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();