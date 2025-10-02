// app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.Fonts;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'flexDirection': 'row'};
    var4['container'] = var9;
    var9 = {'marginStart': 8, 'flexGrow': 1};
    var4['content'] = var9;
    var9 = {};
    var12 = 5;
    var10 = var6[var12];
    var17 = var14.bind(var1)(var10);
    var16 = var11.PRIMARY_MEDIUM;
    var10 = 6;
    var13 = var6[var10];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var15 = var13.TEXT_MUTED;
    var13 = 16;
    var19 = var17.bind(var1)(var16, var15, var13);
    var20 = var9;
    var15 = copyDataProperties(var20, var19);
    var4['placeholder'] = var9;
    var9 = {};
    var12 = var6[var12];
    var12 = var14.bind(var1)(var12);
    var11 = var11.PRIMARY_MEDIUM;
    var10 = var6[var10];
    var10 = var14.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_NORMAL;
    var19 = var12.bind(var1)(var11, var10, var13);
    var20 = var9;
    var10 = copyDataProperties(var20, var19);
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormEmojiPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.emoji;
            var1 = var2.emojiId;
            var2 = var2.emojiName;
            var11 = var3.guildId;
            var _closure2_slot0 = var11;
            var3 = var3.onChange;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot6;
            var4 = undefined;
            var14 = var3.bind(var4)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var9 = var3.bind(var4)();
            var10 = null;
            if(!(var10 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var8 = var7.bind(var4)(var3);
            var7 = var8.convertSurrogateToName;
            var12 = var10 != var2;
            var3 = '';
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var2 = false;
            var1 = var7.bind(var8)(var3, var2);
case 2:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEmojiByIdOrName;
            var13 = var2.bind(var3)(var11, var1);
            var8 = var1;
            if(!(var10 == var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot4;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 11;
            var1 = var15[var1];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var7 = 'contain';
            var1['resizeMode'] = var7;
            var7 = 12;
            var7 = var15[var7];
            var7 = var12.bind(var4)(var7);
            var1['source'] = var7;
            var7 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 10;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guildId'] = var11;
            var1['id'] = var8;
            var7 = var3.bind(var4)(var2, var1);
case 8:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 13;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var14.container;
            var8 = new Array(2);
            var8[0] = var12;
            var9 = var9.textInput;
            var8[1] = var9;
            var1['style'] = var8;
            var8 = 'link';
            var1['accessibilityRole'] = var8;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = function onPressEmoji(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.id;
                        var4 = null;
                        if(!(var4 == var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var2 = var1.optionallyDiverseSequence;
                        if(!(var4 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var3 = _closure2_slot1;
                        if(!(var4 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                        var5 = _closure2_slot1;
                        var3 = {};
                        var2 = var1.optionallyDiverseSequence;
                        var3['emojiName'] = var2;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3);
                        _fun0002_ip = 11; continue _fun0002;
case 9:
                        var3 = _closure2_slot1;
                        if(!(var4 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 14:
                        var3 = _closure2_slot1;
                        var2 = {};
                        var1 = var1.id;
                        var2['emojiId'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onPressEmoji'] = var6;
                var5 = _closure1_slot3;
                var5 = var5.GUILD_ROLE_BENEFIT_EMOJI;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot4;
            var8 = _closure1_slot0;
            var7 = 15;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.LegacyText;
            var7 = {};
            var12 = var14.content;
            var11 = new Array(2);
            var11[0] = var12;
            if(!(var10 == var13)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = var14.placeholder;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var12 = var14.text;
case 17:
            var11[1] = var12;
            var7['style'] = var11;
            if(!(var10 == var13)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 17;
            var11 = var15[var10];
            var11 = var14.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.gXAN3N;
            var10 = var11.bind(var12)(var10);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 16;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.getAllEmojiNamesString;
            var10 = var11.bind(var12)(var13);
case 20:
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot4;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 18;
            var6 = var11[var9];
            var7 = var10.bind(var4)(var6);
            var6 = {};
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.Sizes;
            var9 = var9.MEDIUM;
            var6['size'] = var9;
            var9 = 19;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var6['source'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();