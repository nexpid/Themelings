// app/modules/in_app_notifications/native/ReactionNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function NotificationBody(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var14 = var1.message;
                var6 = var1.reaction;
                var9 = var1.reactionCount;
                var3 = var1.renderAnnouncementText;
                var2 = var1.isMilestone;
                var5 = _closure1_slot13;
                var4 = undefined;
                var5 = var5.bind(var4)();
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 17;
                var7 = var7[var8];
                var10 = var10.bind(var4)(var7);
                var7 = var10.useHasPreviewableMedia;
                var16 = var7.bind(var10)(var14);
                var7 = var14.embeds;
                var7 = var7.length;
                var11 = 0;
                var7 = var7 > var11;
                if(!var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var10 = var14.embeds;
                var10 = var10[var11];
                var11 = var10.type;
                var10 = _closure1_slot9;
                var10 = var10.GIFV;
                var7 = var11 === var10;
case 2:
                var11 = var14.content;
                var10 = null;
                var11 = var10 != var11;
                if(!var11) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var13 = var14.content;
                var12 = var13.trim;
                var13 = var12.bind(var13)();
                var12 = '';
                var11 = var12 !== var13;
case 4:
                if(!var11) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var11 = !var7;
case 6:
                var7 = {};
                var7['message'] = var14;
                var7['reaction'] = var6;
                var7['hasMessageContent'] = var11;
                var6 = function useReactionSystemText(arg1) {
                    var2 = arg1;
                    var6 = var2.message;
                    var _closure3_slot0 = var6;
                    var10 = var2.reaction;
                    var _closure3_slot1 = var10;
                    var7 = var2.hasMessageContent;
                    var _closure3_slot2 = var7;
                    var3 = _closure1_slot13;
                    var8 = undefined;
                    var3 = var3.bind(var8)();
                    var _closure3_slot3 = var3;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 9;
                    var4 = var9[var4];
                    var4 = var5.bind(var8)(var4);
                    var11 = var4.AnimateEmoji;
                    var4 = var11.useSetting;
                    var11 = var4.bind(var11)();
                    var _closure3_slot4 = var11;
                    var4 = 10;
                    var4 = var9[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.usePreviewableMedia;
                    var5 = var4.bind(var5)(var6);
                    var _closure3_slot5 = var5;
                    var9 = _closure1_slot3;
                    var8 = var9.useCallback;
                    var4 = new Array(5);
                    var4[0] = var11;
                    var4[1] = var10;
                    var10 = var3.imageEmoji;
                    var4[2] = var10;
                    var10 = var3.textEmoji;
                    var4[3] = var10;
                    var3 = var3.italic;
                    var4[4] = var3;
                    var3 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            var4 = var1 == var3;
                            var6 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var4 = _closure3_slot1;
                            var4 = var4.emoji;
                            var3 = var4.name;
case 8:
                            if(!(var1 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var3 = _closure3_slot1;
                            var4 = var1 == var3;
                            var3 = undefined;
                            if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var4 = _closure3_slot1;
                            var4 = var4.emoji;
                            var3 = var4.name;
case 12:
                            if(!(var1 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var3 = _closure3_slot1;
                            var4 = var1 == var3;
                            var3 = undefined;
                            if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var4 = _closure3_slot1;
                            var4 = var4.emoji;
                            var3 = var4.id;
case 16:
                            if(!(var1 != var3)) { _fun0003_ip = 18; continue _fun0003 }
case 14:
                            var3 = _closure3_slot1;
                            var4 = var1 == var3;
                            var3 = undefined;
                            if(var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                            var4 = _closure3_slot1;
                            var4 = var4.emoji;
                            var3 = var4.id;
case 19:
                            var3 = var1 != var3;
                            var7 = undefined;
                            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var3 = var5[var3];
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.getEmojiURL;
                            var3 = {};
                            var9 = _closure3_slot1;
                            var9 = var9.emoji;
                            var9 = var9.id;
                            var3['id'] = var9;
                            var9 = _closure3_slot4;
                            if(!var9) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var10 = _closure3_slot1;
                            var10 = var10.emoji;
                            var9 = var10.animated;
case 23:
                            var3['animated'] = var9;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 13;
                            var8 = var10[var8];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.DEFAULT_EMOJI_SIZE;
                            var3['size'] = var8;
                            var7 = var4.bind(var5)(var3);
case 21:
                            var5 = _closure1_slot10;
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 14;
                            var3 = var8[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = {};
                            var8 = _closure3_slot3;
                            var9 = var8.textEmoji;
                            var3['textEmojiStyle'] = var9;
                            var8 = var8.imageEmoji;
                            var3['fastImageStyle'] = var8;
                            var3['src'] = var7;
                            var7 = _closure3_slot1;
                            var7 = var7.emoji;
                            var7 = var7.name;
                            var3['name'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            return var3;
case 18:
                            var5 = _closure1_slot10;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 11;
                            var3 = var7[var3];
                            var3 = var4.bind(var6)(var3);
                            var4 = var3.Text;
                            var3 = {};
                            var7 = _closure3_slot3;
                            var7 = var7.italic;
                            var3['style'] = var7;
                            var7 = 'text-sm/normal';
                            var3['variant'] = var7;
                            var2 = _closure3_slot1;
                            var7 = var2.emoji;
                            var7 = var7.name;
                            var3['children'] = var7;
                            var2 = var2.emoji;
                            var2 = var2.name;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var2;
case 10:
                            return var1;
                        }
                    };
                    var8 = var8.bind(var9)(var3, var4);
                    var _closure3_slot6 = var8;
                    var4 = _closure1_slot3;
                    var3 = var4.useMemo;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure3_slot5;
                            var1 = var1.length;
                            var2 = 0;
                            if(!(var2 !== var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                            var1 = _closure3_slot2;
                            if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 27:
                            var1 = _closure3_slot5;
                            var3 = var1.length;
                            var1 = 1;
                            if(!(var1 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 16;
                            var1 = var5[var1];
                            var8 = undefined;
                            var4 = var4.bind(var8)(var1);
                            var1 = _closure3_slot0;
                            var1 = var4.bind(var8)(var1);
                            if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                            var1 = _closure3_slot5;
                            var5 = var1.every;
                            var4 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 10;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.PreviewableMediaTypes;
                                var1 = var1.FILE;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var6 = var5.bind(var1)(var4);
                            var11 = var1.length;
                            var4 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var1 = 15;
                            var5 = var13[var1];
                            var5 = var4.bind(var8)(var5);
                            var14 = var5.intl;
                            var10 = var14.format;
                            var5 = var13[var1];
                            var5 = var4.bind(var8)(var5);
                            var5 = var5.t;
                            var9 = var5.sec4g7;
                            var5 = {};
                            var12 = _closure3_slot6;
                            var5['emojiHook'] = var12;
                            var5['count'] = var11;
                            var5 = var10.bind(var14)(var9, var5);
                            var9 = var13[var1];
                            var9 = var4.bind(var8)(var9);
                            var10 = var9.intl;
                            var9 = var10.format;
                            var1 = var13[var1];
                            var1 = var4.bind(var8)(var1);
                            var1 = var1.t;
                            var4 = var1.UNRyki;
                            var1 = {};
                            var1['emojiHook'] = var12;
                            var1['count'] = var11;
                            var4 = var9.bind(var10)(var4, var1);
                            var1 = {};
                            if(!var6) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                            var4 = var5;
case 32:
                            var1['text'] = var4;
                            var4 = null;
                            var1['secondaryText'] = var4;
                            return var1;
case 30:
                            var1 = {};
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 15;
                            var5 = var9[var3];
                            var5 = var4.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.format;
                            var3 = var9[var3];
                            var3 = var4.bind(var8)(var3);
                            var3 = var3.t;
                            var4 = var3["8xg9ZQ"];
                            var3 = {};
                            var8 = _closure3_slot6;
                            var3['emojiHook'] = var8;
                            var3 = var5.bind(var6)(var4, var3);
                            var1['text'] = var3;
                            var3 = null;
                            var1['secondaryText'] = var3;
                            return var1;
case 28:
                            var1 = _closure3_slot5;
                            var3 = var1[var2];
                            var4 = var3.type;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 10;
                            var1 = var1[var8];
                            var6 = undefined;
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.IMAGE;
                            if(!(var1 !== var4)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.VIDEO;
                            if(!(var1 !== var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.AUDIO;
                            if(!(var1 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.FILE;
                            if(!(var1 !== var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.STICKER;
                            if(!(var1 !== var4)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.VOICE_MESSAGE;
                            if(!(var1 !== var4)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var8];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.PreviewableMediaTypes;
                            var1 = var1.GIF;
                            if(!(var1 !== var4)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 15;
                            var8 = var10[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var4 = var10[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var5 = var4.sHV43G;
                            var4 = {};
                            var10 = _closure3_slot6;
                            var4['emojiHook'] = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var1['text'] = var4;
                            var4 = null;
                            var1['secondaryText'] = var4;
                            return var1;
case 46:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 15;
                            var8 = var10[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var4 = var10[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var5 = var4["3oS3Jq"];
                            var4 = {};
                            var10 = _closure3_slot6;
                            var4['emojiHook'] = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var1['text'] = var4;
                            var4 = null;
                            var1['secondaryText'] = var4;
                            return var1;
case 44:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 15;
                            var8 = var10[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var4 = var10[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var5 = var4.k6YnQO;
                            var4 = {};
                            var10 = _closure3_slot6;
                            var4['emojiHook'] = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var1['text'] = var4;
                            var4 = null;
                            var1['secondaryText'] = var4;
                            return var1;
case 42:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 15;
                            var8 = var10[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var4 = var10[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var5 = var4.pnm8NC;
                            var4 = {};
                            var10 = _closure3_slot6;
                            var4['emojiHook'] = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var1['text'] = var4;
                            var4 = null;
                            var1['secondaryText'] = var4;
                            return var1;
case 40:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 15;
                            var8 = var10[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var4 = var10[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var5 = var4.TXNjGW;
                            var4 = {};
                            var10 = _closure3_slot6;
                            var4['emojiHook'] = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var1['text'] = var4;
                            var4 = var3.media;
                            var4 = var4.filename;
                            var1['secondaryText'] = var4;
                            return var1;
case 38:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 15;
                            var8 = var10[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var4 = var10[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var5 = var4.P/bwx9;
                            var4 = {};
                            var10 = _closure3_slot6;
                            var4['emojiHook'] = var10;
                            var4 = var8.bind(var9)(var5, var4);
                            var1['text'] = var4;
                            var3 = var3.media;
                            var3 = var3.filename;
                            var1['secondaryText'] = var3;
                            return var1;
case 36:
                            var1 = {};
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 15;
                            var5 = var9[var3];
                            var5 = var4.bind(var6)(var5);
                            var8 = var5.intl;
                            var5 = var8.format;
                            var3 = var9[var3];
                            var3 = var4.bind(var6)(var3);
                            var3 = var3.t;
                            var4 = var3.Umew/z;
                            var3 = {};
                            var9 = _closure3_slot6;
                            var3['emojiHook'] = var9;
                            var3 = var5.bind(var8)(var4, var3);
                            var1['text'] = var3;
                            var3 = null;
                            var1['secondaryText'] = var3;
                            return var1;
case 34:
                            var1 = {};
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 15;
                            var4 = var8[var2];
                            var4 = var3.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.format;
                            var2 = var8[var2];
                            var2 = var3.bind(var6)(var2);
                            var2 = var2.t;
                            var3 = var2.I7mNcA;
                            var2 = {};
                            var6 = _closure3_slot6;
                            var2['emojiHook'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var1['text'] = var2;
                            var2 = null;
                            var1['secondaryText'] = var2;
                            return var1;
case 25:
                            var1 = {};
                            var2 = _closure3_slot2;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 15;
                            var5 = var9[var3];
                            var4 = undefined;
                            var5 = var8.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.format;
                            var3 = var9[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.t;
                            if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                            var4 = var3.ZOzpKt;
                            var2 = {};
                            var8 = _closure3_slot6;
                            var2['emojiHook'] = var8;
                            var2 = var5.bind(var6)(var4, var2);
                            _fun0004_ip = 50; continue _fun0004;
case 48:
                            var4 = var3.sHV43G;
                            var3 = {};
                            var7 = _closure3_slot6;
                            var3['emojiHook'] = var7;
                            var2 = var5.bind(var6)(var4, var3);
case 50:
                            var1['text'] = var2;
                            var2 = null;
                            var1['secondaryText'] = var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var6 = var6.bind(var4)(var7);
                var17 = var6.text;
                var19 = var6.secondaryText;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var12 = 18;
                var12 = var6[var12];
                var15 = var7.bind(var4)(var12);
                var13 = var15.useGetInitialMessagePreview;
                var12 = {};
                var12['message'] = var14;
                var15 = var13.bind(var15)(var12);
                var6 = var6[var8];
                var7 = var7.bind(var4)(var6);
                var6 = var7.getMessagePreviewTextVariant;
                var7 = var6.bind(var7)();
                if(var3) { _fun0002_ip = 51; continue _fun0002 }
case 30:
                if(var2) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var6 = _closure1_slot12;
                var3 = _closure1_slot11;
                var2 = {};
                var13 = _closure1_slot10;
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = 11;
                var8 = var8[var20];
                var8 = var12.bind(var4)(var8);
                var12 = var8.Text;
                var8 = {};
                var8['variant'] = var7;
                var18 = 'text-default';
                var8['color'] = var18;
                var18 = var5.italic;
                var8['style'] = var18;
                var8['children'] = var17;
                var12 = var13.bind(var4)(var12, var8);
                var8 = new Array(3);
                var8[0] = var12;
                var12 = null;
                if(!(var10 !== var19)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                var18 = _closure1_slot10;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var20];
                var13 = var17.bind(var4)(var13);
                var17 = var13.Text;
                var13 = {'variant': 'redesign/message-preview/medium', 'color': 'text-link'};
                var20 = _closure1_slot7;
                var13['lineClamp'] = var20;
                var13['children'] = var19;
                var12 = var18.bind(var4)(var17, var13);
case 54:
                var8[1] = var12;
                var12 = null;
                if(!var11) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                var18 = _closure1_slot10;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 19;
                var13 = var20[var13];
                var13 = var17.bind(var4)(var13);
                var17 = var13.NativeChannelRowPreview;
                var13 = {};
                var20 = var14;
                if(!var16) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                var20 = var15;
case 58:
                var13['message'] = var20;
                var20 = 1;
                var13['lineClamp'] = var20;
                var20 = _closure1_slot6;
                var13['maxHeight'] = var20;
                var20 = 'text-subtle';
                var13['textColor'] = var20;
                var12 = var18.bind(var4)(var17, var13);
case 56:
                var8[2] = var12;
                var2['children'] = var8;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 52:
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 15;
                var6 = var12[var2];
                var6 = var3.bind(var4)(var6);
                var8 = var6.intl;
                var6 = var8.format;
                var2 = var12[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                if(var11) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                var12 = var2.vfYN5b;
                var3 = {};
                var3['count'] = var9;
                var17 = var6.bind(var8)(var12, var3);
                _fun0002_ip = 62; continue _fun0002;
case 60:
                var3 = var2.NfZxrD;
                var2 = {};
                var2['count'] = var9;
                var17 = var6.bind(var8)(var3, var2);
case 62:
                var6 = _closure1_slot12;
                var3 = _closure1_slot11;
                var2 = {};
                var13 = _closure1_slot10;
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = 11;
                var8 = var8[var20];
                var8 = var12.bind(var4)(var8);
                var12 = var8.Text;
                var8 = {};
                var8['variant'] = var7;
                var18 = 'text-default';
                var8['color'] = var18;
                var18 = var5.italic;
                var8['style'] = var18;
                var8['children'] = var17;
                var12 = var13.bind(var4)(var12, var8);
                var8 = new Array(3);
                var8[0] = var12;
                var12 = null;
                if(!(var10 !== var19)) { _fun0002_ip = 63; continue _fun0002 }
case 46:
                var18 = _closure1_slot10;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var20];
                var13 = var17.bind(var4)(var13);
                var17 = var13.Text;
                var13 = {'variant': 'redesign/message-preview/medium', 'color': 'text-link'};
                var20 = _closure1_slot7;
                var13['lineClamp'] = var20;
                var13['children'] = var19;
                var12 = var18.bind(var4)(var17, var13);
case 63:
                var8[1] = var12;
                var10 = null;
                if(!var11) { _fun0002_ip = 64; continue _fun0002 }
case 65:
                var13 = _closure1_slot10;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 19;
                var11 = var17[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.NativeChannelRowPreview;
                var11 = {};
                if(!var16) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                var14 = var15;
case 66:
                var11['message'] = var14;
                var14 = 1;
                var11['lineClamp'] = var14;
                var14 = _closure1_slot6;
                var11['maxHeight'] = var14;
                var14 = 'text-subtle';
                var11['textColor'] = var14;
                var10 = var13.bind(var4)(var12, var11);
case 64:
                var8[2] = var10;
                var2['children'] = var8;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 51:
                var3 = _closure1_slot10;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var7;
                var7 = 'text-default';
                var1['color'] = var7;
                var5 = var5.italic;
                var1['style'] = var5;
                var5 = 15;
                var7 = var10[var5];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.t;
                var6 = var5.Tqk79E;
                var5 = {};
                var5['count'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = function ReactorNotificationIcon(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var2 = var1.notification;
                var1 = var1.isMilestone;
                var3 = _closure1_slot13;
                var5 = undefined;
                var4 = var3.bind(var5)();
                var11 = var2.user;
                var9 = var2.guild;
                var7 = var2.channel;
                if(!var1) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                var1 = var7.isGroupDM;
                var1 = var1.bind(var7)();
                if(var1) { _fun0005_ip = 70; continue _fun0005 }
case 68:
                var8 = null;
                if(!(var8 == var11)) { _fun0005_ip = 71; continue _fun0005 }
case 72:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 22;
                var1 = var13[var10];
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var1['guild'] = var9;
                var12 = _closure1_slot0;
                var10 = var13[var10];
                var10 = var12.bind(var5)(var10);
                var10 = var10.GuildIconSizes;
                var10 = var10.NORMAL;
                var1['size'] = var10;
                var4 = var4.guildIcon;
                var1['style'] = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun0005_ip = 73; continue _fun0005;
case 71:
                var4 = _closure1_slot10;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 21;
                var2 = var2[var10];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Avatar;
                var2 = {};
                var2['user'] = var11;
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                var8 = var9.id;
case 74:
                var2['guildId'] = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var5)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.NORMAL;
                var2['size'] = var8;
                var1 = var4.bind(var5)(var3, var2);
case 73:
                _fun0005_ip = 76; continue _fun0005;
case 70:
                var4 = _closure1_slot10;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2['channel'] = var7;
                var7 = _closure1_slot0;
                var6 = 21;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.NORMAL;
                var2['size'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 76:
                return var1;
            }
        };
        var _closure1_slot15 = var1;
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
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var13 = 2;
        var4 = var6[var13];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
        var _closure1_slot6 = var7;
        var4 = var4.NOTIFICATION_PREVIEW_LINE_CLAMP;
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.ChannelTypes;
        var _closure1_slot8 = var7;
        var4 = var4.MessageEmbedTypes;
        var _closure1_slot9 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot10 = var7;
        var7 = var4.Fragment;
        var _closure1_slot11 = var7;
        var4 = var4.jsxs;
        var _closure1_slot12 = var4;
        var4 = 6;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'paddingRight': 4, 'paddingTop': 0};
        var4['newContainerRoleDot'] = var9;
        var9 = {};
        var10 = 'column';
        var9['flexDirection'] = var10;
        var4['container'] = var9;
        var9 = {};
        var10 = 12;
        var9['fontSize'] = var10;
        var4['textEmoji'] = var9;
        var9 = {'height': 16, 'width': 16};
        var10 = 7;
        var12 = var6[var10];
        var14 = var5.bind(var1)(var12);
        var12 = var14.isIOS;
        var14 = var12.bind(var14)();
        var12 = undefined;
        if(var14) { _fun0001_ip = 77; continue _fun0001 }
case 78:
        var14 = {};
        var14['translateY'] = var13;
        var13 = new Array(1);
        var13[0] = var14;
        var12 = var13;
case 77:
        var9['transform'] = var12;
        var4['imageEmoji'] = var9;
        var9 = {};
        var12 = 'italic';
        var9['fontStyle'] = var12;
        var10 = var6[var10];
        var12 = var5.bind(var1)(var10);
        var10 = var12.isIOS;
        var12 = var10.bind(var12)();
        var10 = 'ggsans-MediumItalic, NotoSans-MediumItalic';
        if(!var12) { _fun0001_ip = 79; continue _fun0001 }
case 80:
        var10 = 'ggsans-NormalItalic, NotoSans-NormalItalic';
case 79:
        var9['fontFamily'] = var10;
        var4['italic'] = var9;
        var9 = {};
        var10 = 8;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.radii;
        var10 = var10.sm;
        var9['borderRadius'] = var10;
        var4['guildIcon'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot13 = var4;
        var4 = 33;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ReactionNotification(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var5 = var2.notification;
                var _closure2_slot0 = var5;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var2 = _closure1_slot13;
                var9 = var2.bind(var4)();
                var17 = var5.user;
                var3 = var5.channel;
                var _closure2_slot1 = var3;
                var19 = var5.guild;
                var _closure2_slot2 = var19;
                var20 = var5.parentChannel;
                var _closure2_slot3 = var20;
                var21 = null;
                var6 = var21 == var19;
                var2 = undefined;
                if(var6) { _fun0006_ip = 81; continue _fun0006 }
case 3:
                var2 = var19.id;
case 81:
                if(!(var21 == var2)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
                var2 = var3.guild_id;
case 82:
                _closure2_slot4 = var2;
                var7 = var3.id;
                _closure2_slot5 = var7;
                var10 = var3.type;
                var6 = _closure1_slot8;
                var6 = var6.GUILD_ANNOUNCEMENT;
                var12 = var10 === var6;
                var15 = var5.message;
                _closure2_slot6 = var15;
                var14 = var5.reaction;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 17;
                var6 = var11[var6];
                var13 = var10.bind(var4)(var6);
                var11 = var13.isReactionMilestoneNotification;
                var10 = var15.reactions;
                var16 = var21 == var3;
                var6 = undefined;
                if(var16) { _fun0006_ip = 24; continue _fun0006 }
case 84:
                var6 = var3.type;
case 24:
                var11 = var11.bind(var13)(var10, var6);
                _closure2_slot7 = var11;
                var16 = _closure1_slot3;
                var13 = var16.useMemo;
                var6 = var15.reactions;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.sumBy;
                    var1 = _closure2_slot6;
                    var2 = var1.reactions;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.count_details;
                            var4 = null;
                            var1 = var4 == var5;
                            var6 = undefined;
                            if(var1) { _fun0007_ip = 85; continue _fun0007 }
case 9:
                            var6 = var5.burst;
case 85:
                            var7 = var4 != var6;
                            var1 = 0;
                            if(!var7) { _fun0007_ip = 86; continue _fun0007 }
case 8:
                            var1 = var6;
case 86:
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                            var3 = var5.normal;
case 87:
                            var4 = var4 != var3;
                            var2 = 0;
                            if(!var4) { _fun0007_ip = 89; continue _fun0007 }
case 68:
                            var2 = var3;
case 89:
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var13 = var13.bind(var16)(var6, var10);
                if(!var12) { _fun0006_ip = 21; continue _fun0006 }
case 90:
                var6 = 1;
                var12 = var6 !== var13;
case 21:
                _closure2_slot8 = var12;
                var6 = null;
                if(var12) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                var6 = null;
                if(var11) { _fun0006_ip = 91; continue _fun0006 }
case 93:
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 24;
                var10 = var18[var10];
                var16 = var16.bind(var4)(var10);
                var10 = var16.getUserAuthor;
                var6 = var10.bind(var16)(var17, var3);
case 91:
                _closure2_slot9 = var6;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 25;
                var10 = var17[var10];
                var18 = var16.bind(var4)(var10);
                var17 = var18.useStateFromStores;
                var10 = _closure1_slot5;
                var16 = new Array(1);
                var16[0] = var10;
                var10 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.roleStyle;
                    return var1;
                };
                var16 = var17.bind(var18)(var16, var10);
                var17 = var21 == var6;
                var10 = undefined;
                if(var17) { _fun0006_ip = 94; continue _fun0006 }
case 95:
                var10 = var6.colorString;
case 94:
                var17 = var21 != var10;
                var22 = undefined;
                if(!var17) { _fun0006_ip = 96; continue _fun0006 }
case 97:
                var22 = var10;
case 96:
                var10 = 'dot';
                var18 = undefined;
                if(!(var10 === var16)) { _fun0006_ip = 98; continue _fun0006 }
case 99:
                var18 = undefined;
                if(!(var18 !== var22)) { _fun0006_ip = 98; continue _fun0006 }
case 100:
                var17 = _closure1_slot10;
                var16 = _closure1_slot0;
                var23 = _closure1_slot2;
                var10 = 21;
                var10 = var23[var10];
                var10 = var16.bind(var4)(var10);
                var16 = var10.RoleDot;
                var10 = {};
                var10['color'] = var22;
                var23 = var21 == var6;
                var22 = undefined;
                if(var23) { _fun0006_ip = 101; continue _fun0006 }
case 102:
                var22 = var6.colorStrings;
case 101:
                var23 = var21 != var22;
                var21 = null;
                if(!var23) { _fun0006_ip = 103; continue _fun0006 }
case 104:
                var21 = var22;
case 103:
                var10['colors'] = var21;
                var21 = var9.newContainerRoleDot;
                var10['containerStyles'] = var21;
                var18 = var17.bind(var4)(var16, var10);
case 98:
                var17 = _closure1_slot3;
                var16 = var17.useMemo;
                var10 = new Array(6);
                var10[0] = var3;
                var10[1] = var20;
                var10[2] = var19;
                var10[3] = var6;
                var10[4] = var12;
                var10[5] = var11;
                var6 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = {};
                        var2 = 'message';
                        var1['type'] = var2;
                        var3 = _closure2_slot1;
                        var1['channel'] = var3;
                        var3 = _closure2_slot3;
                        var1['parentChannel'] = var3;
                        var3 = _closure2_slot2;
                        var1['guild'] = var3;
                        var3 = _closure2_slot9;
                        var1['author'] = var3;
                        var3 = _closure2_slot8;
                        if(var3) { _fun0008_ip = 105; continue _fun0008 }
case 106:
                        var3 = _closure2_slot7;
                        var2 = undefined;
                        if(!var3) { _fun0008_ip = 107; continue _fun0008 }
case 105:
                        var2 = 'mobile-text-heading-primary';
case 107:
                        var1['locationTextColor'] = var2;
                        return var1;
                    }
                };
                var17 = var16.bind(var17)(var6, var10);
                var10 = _closure1_slot3;
                var6 = var10.useCallback;
                var16 = var3.id;
                var3 = new Array(6);
                var3[0] = var16;
                var3[1] = var7;
                var3[2] = var2;
                var2 = var15.id;
                var3[3] = var2;
                var2 = var5.inAppNotificationId;
                var3[4] = var2;
                var2 = var5.type;
                var3[5] = var2;
                var2 = function() {
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var2 = var4[var1];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var2);
                    var7 = var8.trackDismissed;
                    var5 = {};
                    var9 = _closure2_slot0;
                    var10 = var9.type;
                    var5['type'] = var10;
                    var10 = 'notification_clicked';
                    var5['dismissReason'] = var10;
                    var10 = _closure2_slot4;
                    var5['guildId'] = var10;
                    var10 = _closure2_slot5;
                    var5['channelId'] = var10;
                    var10 = _closure2_slot6;
                    var10 = var10.id;
                    var5['messageId'] = var10;
                    var9 = var9.inAppNotificationId;
                    var5['inAppNotificationId'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var3 = _closure1_slot1;
                    var5 = 26;
                    var5 = var4[var5];
                    var7 = var3.bind(var1)(var5);
                    var5 = var7.popAll;
                    var5 = var5.bind(var7)();
                    var5 = 27;
                    var5 = var4[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.transitionToMessage;
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    var2 = _closure2_slot6;
                    var5 = var2.id;
                    var2 = {};
                    var9 = true;
                    var2['navigationReplace'] = var9;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = 28;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearNotification;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var16 = var6.bind(var10)(var2, var3);
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 26;
                    var3 = var1[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 30;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['channelId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7 = var3.bind(var6)(var1, var2);
                var3 = _closure1_slot10;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 31;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.NotificationPressable;
                var1 = {};
                var21 = _closure1_slot10;
                var20 = _closure1_slot15;
                var19 = {};
                var19['notification'] = var5;
                var19['isMilestone'] = var11;
                var19 = var21.bind(var4)(var20, var19);
                var1['icon'] = var19;
                var1['accessoryLabelNode'] = var18;
                var1['header'] = var17;
                var1['onPress'] = var16;
                var1['onSettingsPress'] = var7;
                var1['notification'] = var5;
                var7 = _closure1_slot10;
                var5 = 32;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.MediaPreviewRightAccessory;
                var5 = {};
                var5['message'] = var15;
                var5 = var7.bind(var4)(var6, var5);
                var1['rightAccessory'] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.container;
                var5['style'] = var9;
                var10 = _closure1_slot10;
                var9 = _closure1_slot14;
                var8 = {};
                var8['message'] = var15;
                var8['reaction'] = var14;
                var8['reactionCount'] = var13;
                var8['renderAnnouncementText'] = var12;
                var8['isMilestone'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();