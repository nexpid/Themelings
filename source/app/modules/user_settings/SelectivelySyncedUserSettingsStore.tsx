// app/modules/user_settings/SelectivelySyncedUserSettingsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsSections;
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SelectivelySyncedUserSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                var2 = {};
 11:
                _closure1_slot9 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldSync';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0004_ip = 31; continue _fun0004 }
 25:
                var2 = var1.shouldSync;
 31:
                var1 = false;
                var1 = var1 !== var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getTextSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot9;
                var2 = var1.text;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 29; continue _fun0005 }
 23:
                var1 = var2.settings;
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAppearanceSettings';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure1_slot9;
                var2 = var1.appearance;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0006_ip = 30; continue _fun0006 }
 24:
                var1 = var2.settings;
 30:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SelectivelySyncedUserSettingsStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(2);
    var9 = function() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 7;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = var1.Storage;
            var1 = var2.get;
            var4 = 'UserSettingsSync';
            var7 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 == var7)) { _fun0007_ip = 55; continue _fun0007 }
 53:
            var7 = {};
 55:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var6.bind(var5)(var2);
            var9 = var2.Storage;
            var6 = var9.get;
            var2 = 'UserSettingsStore';
            var6 = var6.bind(var9)(var2);
            if(!(var1 == var6)) { _fun0007_ip = 100; continue _fun0007 }
 98:
            var6 = {};
 100:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var5)(var1);
            var2 = var1.Storage;
            var1 = var2.remove;
            var1 = var1.bind(var2)(var4);
            var1 = {};
            var2 = _closure1_slot8;
            var2 = var2.TEXT;
            var2 = var7[var2];
            var4 = false;
            if(!(var4 === var2)) { _fun0007_ip = 214; continue _fun0007 }
 156:
            var2 = {};
            var2['shouldSync'] = var4;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 8;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.pick;
            var8 = ['inlineAttachmentMedia', 'inlineEmbedMedia', 'renderEmbeds', 'renderReactions', 'animateEmoji', 'animateStickers', 'gifAutoPlay'];
            var8 = var9.bind(var10)(var6, var8);
            var2['settings'] = var8;
            var1['text'] = var2;
 214:
            var2 = _closure1_slot8;
            var2 = var2.APPEARANCE;
            var2 = var7[var2];
            if(!(var4 === var2)) { _fun0007_ip = 292; continue _fun0007 }
 232:
            var2 = {};
            var2['shouldSync'] = var4;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.pick;
            var3 = ['theme', 'clientThemeSettings', 'developerMode'];
            var3 = var4.bind(var5)(var6, var3);
            var2['settings'] = var3;
            var1['appearance'] = var2;
 292:
            return var1;
        }
    };
    var2[0] = var9;
    var9 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var5 = null;
            var3 = var5 == var2;
            var1 = undefined;
            var4 = undefined;
            if(var3) { _fun0008_ip = 51; continue _fun0008 }
 16:
            var3 = var2.appearance;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0008_ip = 51; continue _fun0008 }
 31:
            var3 = var3.settings;
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0008_ip = 51; continue _fun0008 }
 46:
            var4 = var3.theme;
 51:
            var3 = 'amoled';
            if(!(var3 !== var4)) { _fun0008_ip = 63; continue _fun0008 }
 61:
            return var1;
 63:
            var1 = {};
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var3 = {};
            var7 = var2.appearance;
            var8 = var3;
            var4 = copyDataProperties(var8, var7);
            var4 = {};
            var2 = var2.appearance;
            var7 = var2.settings;
            var8 = var4;
            var2 = copyDataProperties(var8, var7);
            var5 = 'midnight';
            var2 = 'theme';
            var4[var2] = var5;
            var2 = 'settings';
            var3[var2] = var4;
            var2 = 'appearance';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[1] = var9;
    var8['migrations'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSelectivelySyncedUserSettingsUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var19 = var1.changes;
            var17 = var19;
            var1 = undefined;
            var12 = false;
            var11 = null;
            var10 = true;
            var20 = undefined;
            for(var14 in var17)
 36:
            {
 48:
                var9 = var14;
                var2 = var19[var9];
                var4 = var2.shouldSync;
                var8 = var2.settings;
                if(!(var10 === var4)) { _fun0009_ip = 81; continue _fun0009 }
 71:
                var2 = _closure1_slot9;
                var2 = delete var2[var9];
                _fun0009_ip = 36; continue _fun0009;
 81:
                if(!(var12 === var4)) { _fun0009_ip = 107; continue _fun0009 }
 85:
                var3 = _closure1_slot9;
                var2 = {};
                var2['shouldSync'] = var4;
                var4 = {};
                var2['settings'] = var4;
                var3[var9] = var2;
 107:
                var2 = _closure1_slot9;
                var7 = var2[var9];
                var3 = var11 == var7;
                var2 = undefined;
                if(var3) { _fun0009_ip = 130; continue _fun0009 }
 124:
                var2 = var7.shouldSync;
 130:
                var20 = var7;
                if(var12 !== var2) { _fun0009_ip = 36; continue _fun0009 }
 137:
                var5 = var8;
                var20 = var7;
                ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var6 === undefined) { _fun0009_ip = 36; continue _fun0009 }
 151:
                var20 = var7;
                ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var2 === undefined) { _fun0009_ip = 36; continue _fun0009 }
 163:
                var22 = var2;
                var20 = _closure1_slot9;
                var20 = var20[var9];
                var21 = var20.settings;
                var20 = var8[var22];
                var21[var22] = var20;
                _fun0009_ip = 151; continue _fun0009;
            }
 190:
            return var1;
        }
    };
    var2['SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE'] = var9;
    var4 = function handleLogOut() {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/SelectivelySyncedUserSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();