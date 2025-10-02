// app/modules/messages/native/renderer/RowGeneratorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var8 = global;
    var9 = var8.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var4 = var2.NativeModules;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SwipeActionsType;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createNativeStyleProperties;
    var2 = {};
    var11 = 3;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACTIVE;
    var2['ephemeralBackgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var2['ephemeralGutterColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MENTIONED;
    var2['mentionedBackgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.YELLOW_300;
    var2['mentionedGutterColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MESSAGE_AUTOMOD;
    var2['automodBlockedBackgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_345;
    var2['automodBlockedGutterColor'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MESSAGE_HIGHLIGHT;
    var2['editingColor'] = var11;
    var2 = var9.bind(var10)(var2);
    var _closure1_slot4 = var2;
    var9 = var8.Set;
    var8 = var4.MediaManager;
    var4 = var8.getConstants;
    var4 = var4.bind(var8)();
    var16 = var4.supportedExtensions;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var17 = var8;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = function getImageSrc(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg4;
            var3 = var6.endsWith;
            var2 = '.webp';
            var2 = var3.bind(var6)(var2);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.endsWith;
            var3 = '.avif';
            var3 = var4.bind(var6)(var3);
            var2 = !var3;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot5;
            var4 = var5.has;
            var3 = 'webp';
            var2 = var4.bind(var5)(var3);
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = true;
case 6:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.getMobileOptimizedSrc;
            var3 = null;
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 'png';
case 8:
            var9 = arg2;
            var8 = arg3;
            var11 = var5;
            var10 = var6;
            var7 = var3;
            var1 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var4['getImageSrc'] = var8;
    var8 = function createBackgroundHighlight(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.message;
            var7 = var1.theme;
            var6 = var1.isEditing;
            var4 = var1.isAutomodBlockedMessage;
            var3 = _closure1_slot4;
            var1 = undefined;
            var3 = var3.bind(var1)(var7);
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 2:
            var4 = var5.mentioned;
            if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.hasEphemeralAppearance;
            var2 = var2.bind(var4)(var5);
            var1 = undefined;
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 15:
            var2 = {};
            var4 = var3.ephemeralBackgroundColor;
            var2['backgroundColor'] = var4;
            var4 = var3.ephemeralGutterColor;
            var2['gutterColor'] = var4;
            var1 = var2;
case 8:
            _fun0002_ip = 16; continue _fun0002;
case 13:
            var2 = {};
            var4 = var3.mentionedBackgroundColor;
            var2['backgroundColor'] = var4;
            var4 = var3.mentionedGutterColor;
            var2['gutterColor'] = var4;
            var1 = var2;
case 16:
            _fun0002_ip = 17; continue _fun0002;
case 12:
            var2 = {};
            var4 = var3.automodBlockedBackgroundColor;
            var2['backgroundColor'] = var4;
            var4 = var3.automodBlockedGutterColor;
            var2['gutterColor'] = var4;
            var1 = var2;
case 17:
            _fun0002_ip = 18; continue _fun0002;
case 10:
            var2 = {};
            var3 = var3.editingColor;
            var2['backgroundColor'] = var3;
            var1 = var2;
case 18:
            return var1;
        }
    };
    var4['createBackgroundHighlight'] = var8;
    var5 = function createSwipeActions(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = arg1;
            if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = var3.NONE;
            _fun0003_ip = 21; continue _fun0003;
case 19:
            var2 = arg2;
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = var3.REPLY;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var2 = var3.REPLY_EDIT;
case 24:
            var1 = var2;
case 21:
            return var1;
        }
    };
    var4['createSwipeActions'] = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/RowGeneratorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = {'dark': '#313339', 'light': '#fafafa'};
    var3['InviteEmbedBackground'] = var4;
    var3['resolveHighlightThemedColors'] = var2;
    return var1;
})();