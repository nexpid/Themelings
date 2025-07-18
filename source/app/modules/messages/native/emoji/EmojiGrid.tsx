// app/modules/messages/native/emoji/EmojiGrid.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 40, 'width': 40};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['gridEmojiFastImage'] = var9;
    var9 = {'fontSize': 18, 'lineHeight': 44};
    var4['gridEmojiText'] = var9;
    var9 = {'marginTop': 16, 'flexDirection': 'row'};
    var4['emojiGridRowContainer'] = var9;
    var9 = {'marginTop': 8, 'alignItems': 'center'};
    var4['emojiGridContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = function Emoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.guildEmoji;
            var2 = _closure1_slot5;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var1.id;
            var7 = null;
            if(!(var7 != var9)) { _fun0001_ip = 121; continue _fun0001 }
 59:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 6;
            var7 = var10[var7];
            var10 = var9.bind(var5)(var7);
            var9 = var10.getEmojiURL;
            var7 = {};
            var11 = var1.id;
            var7['id'] = var11;
            var11 = var1.animated;
            var7['animated'] = var11;
            var11 = 48;
            var7['size'] = var11;
            var7 = var9.bind(var10)(var7);
            _fun0001_ip = 157; continue _fun0001;
 121:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 5;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.getURL;
            var8 = var1.name;
            var7 = var9.bind(var10)(var8);
 157:
            var2['src'] = var7;
            var7 = var6.gridEmojiFastImage;
            var2['fastImageStyle'] = var7;
            var6 = var6.gridEmojiText;
            var2['textEmojiStyle'] = var6;
            var6 = var1.name;
            var2['name'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/emoji/EmojiGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.expressionSourceGuild;
            var3 = var1.doNotDisplayEmojiIds;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 27; continue _fun0002 }
 23:
            var3 = new Array(0);
 27:
            var _closure2_slot0 = var3;
            var10 = var1.numberToShow;
            if(!(var10 === var4)) { _fun0002_ip = 46; continue _fun0002 }
 43:
            var10 = 10;
 46:
            var3 = var1.maxPerRow;
            if(!(var3 === var4)) { _fun0002_ip = 59; continue _fun0002 }
 56:
            var3 = 5;
 59:
            var _closure2_slot1 = var4;
            var6 = {};
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 8;
            var1 = var1[var8];
            var9 = var9.bind(var4)(var1);
            var1 = var9.useSharedMessageEmojiStyles;
            var12 = var1.bind(var9)();
            var13 = var6;
            var1 = copyDataProperties(var13, var12);
            var1 = _closure1_slot5;
            var12 = var1.bind(var4)();
            var13 = var6;
            var1 = copyDataProperties(var13, var12);
            _closure2_slot1 = var6;
            var1 = null;
            var9 = var1 == var2;
            var11 = undefined;
            if(var9) { _fun0002_ip = 141; continue _fun0002 }
 135:
            var11 = var2.emojis;
 141:
            if(!(var1 == var11)) { _fun0002_ip = 149; continue _fun0002 }
 145:
            var11 = new Array(0);
 149:
            var2 = var11.slice;
            var1 = 1;
            var1 = var10 + var1;
            var9 = 0;
            var11 = var2.bind(var11)(var9, var1);
            var2 = var11.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var2.bind(var11)(var1);
            var1 = var2.slice;
            var2 = var1.bind(var2)(var9, var10);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var9 = var1.bind(var4)(var2, var3);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.emojiGridContainer;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var5 = 10;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GappedList;
            var5 = {};
            var5['gap'] = var8;
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                var9 = arg1;
                var5 = _closure1_slot4;
                var4 = _closure1_slot3;
                var3 = {};
                var2 = _closure2_slot1;
                var2 = var2.emojiGridRowContainer;
                var3['style'] = var2;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var6 = var1.GappedList;
                var1 = {};
                var7 = 32;
                var1['gap'] = var7;
                var8 = var9.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var3['guildEmoji'] = var1;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                var1['children'] = var7;
                var1 = var5.bind(var2)(var6, var1);
                var3['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EmojiGrid'] = var2;
    return var1;
})();