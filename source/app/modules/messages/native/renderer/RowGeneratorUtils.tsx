// app/modules/messages/native/renderer/RowGeneratorUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
            var6 = arg1;
            var1 = arg4;
            var3 = var6.endsWith;
            var2 = '.webp';
            var2 = var3.bind(var6)(var2);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 49; continue _fun0001 }
 29:
            var4 = var6.endsWith;
            var3 = '.avif';
            var3 = var4.bind(var6)(var3);
            var2 = !var3;
 49:
            if(var2) { _fun0001_ip = 75; continue _fun0001 }
 52:
            var5 = _closure1_slot5;
            var4 = var5.has;
            var3 = 'webp';
            var2 = var4.bind(var5)(var3);
 75:
            if(var2) { _fun0001_ip = 80; continue _fun0001 }
 78:
            var1 = true;
 80:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.getMobileOptimizedSrc;
            var3 = null;
            if(!var1) { _fun0001_ip = 122; continue _fun0001 }
 116:
            var3 = 'png';
 122:
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
 0:
            var1 = arg1;
            var5 = var1.message;
            var7 = var1.theme;
            var6 = var1.isEditing;
            var4 = var1.isAutomodBlockedMessage;
            var3 = _closure1_slot4;
            var1 = undefined;
            var3 = var3.bind(var1)(var7);
            if(var6) { _fun0002_ip = 178; continue _fun0002 }
 46:
            if(var4) { _fun0002_ip = 150; continue _fun0002 }
 49:
            var4 = var5.mentioned;
            if(var4) { _fun0002_ip = 122; continue _fun0002 }
 58:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.hasEphemeralAppearance;
            var2 = var2.bind(var4)(var5);
            var1 = undefined;
            if(!var2) { _fun0002_ip = 120; continue _fun0002 }
 94:
            var2 = {};
            var4 = var3.ephemeralBackgroundColor;
            var2['backgroundColor'] = var4;
            var4 = var3.ephemeralGutterColor;
            var2['gutterColor'] = var4;
            var1 = var2;
 120:
            _fun0002_ip = 148; continue _fun0002;
 122:
            var2 = {};
            var4 = var3.mentionedBackgroundColor;
            var2['backgroundColor'] = var4;
            var4 = var3.mentionedGutterColor;
            var2['gutterColor'] = var4;
            var1 = var2;
 148:
            _fun0002_ip = 176; continue _fun0002;
 150:
            var2 = {};
            var4 = var3.automodBlockedBackgroundColor;
            var2['backgroundColor'] = var4;
            var4 = var3.automodBlockedGutterColor;
            var2['gutterColor'] = var4;
            var1 = var2;
 176:
            _fun0002_ip = 193; continue _fun0002;
 178:
            var2 = {};
            var3 = var3.editingColor;
            var2['backgroundColor'] = var3;
            var1 = var2;
 193:
            return var1;
        }
    };
    var4['createBackgroundHighlight'] = var8;
    var5 = function createSwipeActions(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = arg1;
            if(var1) { _fun0003_ip = 21; continue _fun0003 }
 13:
            var1 = var3.NONE;
            _fun0003_ip = 44; continue _fun0003;
 21:
            var2 = arg2;
            if(var2) { _fun0003_ip = 35; continue _fun0003 }
 27:
            var2 = var3.REPLY;
            _fun0003_ip = 41; continue _fun0003;
 35:
            var2 = var3.REPLY_EDIT;
 41:
            var1 = var2;
 44:
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