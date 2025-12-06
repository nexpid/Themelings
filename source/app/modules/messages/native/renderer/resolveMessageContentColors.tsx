// app/modules/messages/native/renderer/resolveMessageContentColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var10 = var5.bind(var1)(var7);
    var8 = var10.experimental_createToken;
    var7 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.PRIMARY_630;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var2.PRIMARY_300;
case 4:
            return var1;
        }
    };
    var11 = var8.bind(var10)(var7);
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.experimental_createToken;
    var7 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2.BRAND_200;
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var1 = var2.BRAND_260;
case 4:
            return var1;
        }
    };
    var10 = var8.bind(var10)(var7);
    var7 = {};
    var8 = 2;
    var12 = var6[var8];
    var12 = var9.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STRONG;
    var7['textColor'] = var12;
    var12 = var6[var8];
    var12 = var9.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_LINK;
    var7['linkColor'] = var12;
    var12 = var6[var8];
    var12 = var9.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var7['timestampColor'] = var12;
    var12 = var6[var8];
    var12 = var9.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MESSAGE_HIGHLIGHT;
    var7['highlightColor'] = var12;
    var12 = var6[var8];
    var12 = var9.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var7['unsupportedColor'] = var12;
    var7['embedProviderColor'] = var11;
    var11 = var6[var8];
    var11 = var9.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var7['embedBorderLeftColor'] = var11;
    var11 = var6[var8];
    var11 = var9.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var7['embedBodyTextColor'] = var11;
    var11 = var6[var8];
    var11 = var9.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.EMBED_TITLE;
    var7['embedHeaderTextColor'] = var11;
    var11 = var6[var8];
    var11 = var9.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_560;
    var7['opTagTextColor'] = var11;
    var7['opTagBackgroundColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var7['failedMessageBodyTextColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var7['automodBlockedBodyTextColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_FEEDBACK_POSITIVE;
    var7['aiBotTagColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var7['editedColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_ACTIVE;
    var7['defaultUsernameColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_FAINT;
    var7['feedbackColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_BUTTON_SECONDARY_TEXT;
    var7['reportFpTextColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
    var7['reportFpBackgroundColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var7['retryTextColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BRAND;
    var7['retryBackgroundColor'] = var10;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BRAND_500;
    var7['clipTagBackgroundColor'] = var10;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.unsafe_rawColors;
    var8 = var8.WHITE_500;
    var7['clipTagTextColor'] = var8;
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createNativeStyleProperties;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 2;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var4 = var3.colors;
            var3 = arg1;
            if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
            var3 = var4.EMBED_BACKGROUND;
            _fun0003_ip = 7; continue _fun0003;
case 5:
            var3 = var4.EMBED_BACKGROUND_ALTERNATE;
case 7:
            var1['embedBackgroundColor'] = var3;
            var6 = _closure1_slot3;
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/resolveMessageContentColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var4 = false;
case 8:
            var2 = _closure1_slot4;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();