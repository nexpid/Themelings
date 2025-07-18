// app/modules/voice_panel/VoicePanelStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
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
 0:
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot2;
                var1 = var4.getChannel;
                var6 = var1.bind(var4)(var7);
                var1 = null;
                var4 = var1 == var6;
                var1 = undefined;
                var5 = undefined;
                if(var4) { _fun0001_ip = 49; continue _fun0001 }
 39:
                var4 = var6.isGuildStageVoice;
                var5 = var4.bind(var6)();
 49:
                var4 = true;
                var4 = var4 === var5;
                if(var4) { _fun0001_ip = 85; continue _fun0001 }
 58:
                var5 = _closure2_slot1;
                var5 = var5.bind(var1)();
                var6 = var5.channels;
                var5 = var6.has;
                var4 = var5.bind(var6)(var7);
 85:
                if(var4) { _fun0001_ip = 124; continue _fun0001 }
 88:
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
 124:
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
 0:
                        var3 = arg1;
                        var5 = var3.channels;
                        var8 = var3.voicePanelsFullscreen;
                        var9 = var3.voicePanelsOpened;
                        var2 = var5.has;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var5)(var1);
                        if(var1) { _fun0002_ip = 81; continue _fun0002 }
 41:
                        var2 = var8.has;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var8)(var1);
                        if(var1) { _fun0002_ip = 81; continue _fun0002 }
 58:
                        var2 = var9.has;
                        var1 = _closure3_slot0;
                        var2 = var2.bind(var9)(var1);
                        var1 = var3;
                        if(!var2) { _fun0002_ip = 327; continue _fun0002 }
 81:
                        var4 = var5.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var2);
                        var6 = var5;
                        if(!var2) { _fun0002_ip = 149; continue _fun0002 }
 101:
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
 149:
                        var4 = var8.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var8)(var2);
                        var5 = var8;
                        if(!var2) { _fun0002_ip = 217; continue _fun0002 }
 169:
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
 217:
                        var4 = var9.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var9)(var2);
                        var4 = var9;
                        if(!var2) { _fun0002_ip = 285; continue _fun0002 }
 237:
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
 285:
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
 327:
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
 0:
                        var4 = arg1;
                        var5 = var4.isActivityFocused;
                        var2 = _closure3_slot0;
                        var1 = var4;
                        if(!(var5 !== var2)) { _fun0003_ip = 51; continue _fun0003 }
 23:
                        var2 = {};
                        var7 = var2;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var4 = _closure3_slot0;
                        var3 = 'isActivityFocused';
                        var2[var3] = var4;
                        var1 = var2;
 51:
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
 0:
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
                        if(var5) { _fun0004_ip = 82; continue _fun0004 }
 61:
                        if(var3) { _fun0004_ip = 66; continue _fun0004 }
 64:
                        return var1;
 66:
                        var6 = var4.delete;
                        var5 = _closure3_slot0;
                        var5 = var6.bind(var4)(var5);
                        _fun0004_ip = 99; continue _fun0004;
 82:
                        if(var3) { _fun0004_ip = 122; continue _fun0004 }
 85:
                        var3 = var4.add;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 99:
                        var2 = {};
                        var8 = var2;
                        var7 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 'voicePanelsFullscreen';
                        var2[var3] = var4;
                        return var2;
 122:
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
 0:
                        var1 = arg1;
                        var5 = var1.channels;
                        var4 = var5.has;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0005_ip = 31; continue _fun0005 }
 29:
                        return var1;
 31:
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
                        if(var5) { _fun0005_ip = 107; continue _fun0005 }
 86:
                        if(var3) { _fun0005_ip = 91; continue _fun0005 }
 89:
                        return var1;
 91:
                        var6 = var4.delete;
                        var5 = _closure3_slot0;
                        var5 = var6.bind(var4)(var5);
                        _fun0005_ip = 124; continue _fun0005;
 107:
                        if(var3) { _fun0005_ip = 147; continue _fun0005 }
 110:
                        var3 = var4.add;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 124:
                        var2 = {};
                        var8 = var2;
                        var7 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 'voicePanelsOpened';
                        var2[var3] = var4;
                        return var2;
 147:
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
 0:
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
                        if(var5) { _fun0006_ip = 82; continue _fun0006 }
 61:
                        if(var3) { _fun0006_ip = 66; continue _fun0006 }
 64:
                        return var1;
 66:
                        var6 = var4.delete;
                        var5 = _closure3_slot0;
                        var5 = var6.bind(var4)(var5);
                        _fun0006_ip = 99; continue _fun0006;
 82:
                        if(var3) { _fun0006_ip = 122; continue _fun0006 }
 85:
                        var3 = var4.add;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 99:
                        var2 = {};
                        var8 = var2;
                        var7 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 'voicePanelsPIP';
                        var2[var3] = var4;
                        return var2;
 122:
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