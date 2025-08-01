// app/modules/forums/native/AppliedForumTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var2 = function AppliedForumTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.tag;
            var3 = var1.hasUnreads;
            var1 = var1.containerStyle;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot8;
            var2 = var2.bind(var4)();
            var _closure2_slot1 = var2;
            var2 = var6.name;
            var _closure2_slot2 = var2;
            var2 = var6.emojiId;
            var _closure2_slot3 = var2;
            var2 = var6.emojiName;
            var _closure2_slot4 = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var9 = var7.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 38; continue _fun0002 }
 16:
                    var4 = _closure1_slot4;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var7, var2);
            var _closure2_slot5 = var2;
            var2 = 'text-muted';
            if(!var3) { _fun0001_ip = 145; continue _fun0001 }
 139:
            var2 = 'header-secondary';
 145:
            _closure2_slot6 = var2;
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var6.id;
            var1['tagId'] = var6;
            var5 = function children(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var7 = var3.ref;
                    var12 = null;
                    var2 = Object.create(var12);
                    var1 = 0;
                    var2['ref'] = var1;
                    var20 = {};
                    var19 = var3;
                    var18 = var2;
                    var6 = copyDataProperties(var20, var19, var18);
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var8 = var1.container;
                    var1 = new Array(2);
                    var1[0] = var8;
                    var8 = _closure2_slot0;
                    var1[1] = var8;
                    var2['style'] = var1;
                    var1 = true;
                    var2['accessible'] = var1;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 9;
                    var11 = var14[var8];
                    var1 = undefined;
                    var11 = var10.bind(var1)(var11);
                    var13 = var11.intl;
                    var11 = var13.formatToPlainString;
                    var8 = var14[var8];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.t;
                    var10 = var8.tXXD6u;
                    var8 = {};
                    var14 = _closure2_slot2;
                    var8['tagName'] = var14;
                    var8 = var11.bind(var13)(var10, var8);
                    var2['accessibilityLabel'] = var8;
                    var2['ref'] = var7;
                    var20 = var2;
                    var19 = var6;
                    var6 = copyDataProperties(var20, var19);
                    var6 = _closure2_slot4;
                    var7 = var12 != var6;
                    if(var7) { _fun0003_ip = 189; continue _fun0003 }
 181:
                    var6 = _closure2_slot3;
                    var7 = var12 != var6;
 189:
                    if(!var7) { _fun0003_ip = 359; continue _fun0003 }
 195:
                    var10 = _closure1_slot6;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 10;
                    var6 = var11[var6];
                    var8 = var8.bind(var1)(var6);
                    var6 = {};
                    var11 = _closure2_slot1;
                    var13 = var11.textEmoji;
                    var6['textEmojiStyle'] = var13;
                    var11 = var11.emoji;
                    var6['fastImageStyle'] = var11;
                    var11 = _closure2_slot5;
                    var13 = var12 != var11;
                    var11 = undefined;
                    if(!var13) { _fun0003_ip = 325; continue _fun0003 }
 260:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 11;
                    var13 = var15[var13];
                    var15 = var14.bind(var1)(var13);
                    var14 = var15.getEmojiURL;
                    var13 = {};
                    var16 = _closure2_slot5;
                    var17 = var16.id;
                    var13['id'] = var17;
                    var16 = var16.animated;
                    var13['animated'] = var16;
                    var16 = _closure1_slot5;
                    var13['size'] = var16;
                    var11 = var14.bind(var15)(var13);
 325:
                    var6['src'] = var11;
                    var11 = _closure2_slot4;
                    var12 = var12 != var11;
                    var11 = '';
                    if(!var12) { _fun0003_ip = 349; continue _fun0003 }
 345:
                    var11 = _closure2_slot4;
 349:
                    var6['name'] = var11;
                    var7 = var10.bind(var1)(var8, var6);
 359:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var8 = _closure1_slot6;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 12;
                    var5 = var10[var5];
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.Text;
                    var5 = {'lineClamp': 1, 'style': null, 'variant': 'text-xs/semibold'};
                    var10 = _closure2_slot1;
                    var10 = var10.tagName;
                    var5['style'] = var10;
                    var10 = _closure2_slot6;
                    var5['color'] = var10;
                    var9 = _closure2_slot2;
                    var5['children'] = var9;
                    var5 = var8.bind(var1)(var7, var5);
                    var6[1] = var5;
                    var5 = 'children';
                    var2[var5] = var6;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var11 = 1;
    var5 = var7[var11];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EMOJI_URL_BASE_SIZE;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot6 = var8;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'height': 24, 'paddingHorizontal': 8, 'borderRadius': 20, 'backgroundColor': null, 'marginRight': 4, 'flexShrink': 1};
    var12 = 6;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY_ALT;
    var10['backgroundColor'] = var12;
    var5['pill'] = var10;
    var10 = {'height': 12, 'width': 12, 'marginRight': 4, 'flexShrink': 0};
    var5['emoji'] = var10;
    var10 = {'fontSize': 10, 'marginRight': 4};
    var5['textEmoji'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var5['tagName'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var5['container'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/native/AppliedForumTag.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AppliedForumTagPill(arg1) {
        var1 = arg1;
        var8 = var1.tag;
        var7 = var1.hasUnreads;
        var6 = var1.containerStyle;
        var2 = _closure1_slot8;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot9;
        var1 = {};
        var1['tag'] = var8;
        var1['hasUnreads'] = var7;
        var7 = var5.pill;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['containerStyle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AppliedForumTagPill'] = var4;
    var3['AppliedForumTag'] = var2;
    return var1;
})();