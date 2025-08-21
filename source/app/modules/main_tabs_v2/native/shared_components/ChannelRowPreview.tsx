// app/modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var1 = function identityHook(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function renderMessageText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var14 = var2.username;
            var10 = var2.content;
            var3 = var2.icon;
            var9 = var1.layout;
            var15 = var1.variant;
            var11 = var1.color;
            var17 = var1.lineClamp;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 52; continue _fun0001 }
 49:
            var17 = 1;
 52:
            var2 = var1.fontScale;
            if(!(var2 === var4)) { _fun0001_ip = 65; continue _fun0001 }
 62:
            var2 = 1;
 65:
            var12 = var1.maxFontSizeMultiplier;
            if(!(var12 === var4)) { _fun0001_ip = 85; continue _fun0001 }
 75:
            var12 = 1.75;
 85:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var7 = var1[var7];
            var8 = var6.bind(var4)(var7);
            var7 = var8.getLayoutStyles;
            var16 = var7.bind(var8)(var9);
            var18 = 8;
            var1 = var1[var18];
            var1 = var6.bind(var4)(var1);
            var6 = var1.TextStyleSheet;
            var1 = var16.messagePreview;
            var1 = var1.text;
            var1 = var1.variant;
            var1 = var6[var1];
            var1 = var1.lineHeight;
            var13 = var1 * var2;
            var9 = null;
            var1 = var9 != var3;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 224; continue _fun0001 }
 178:
            var2 = _closure1_slot9;
            var1 = {};
            var7 = var16.messagePreview;
            var7 = var7.messageTypeIconSizeNew;
            var1['size'] = var7;
            var1['color'] = var11;
            var7 = {};
            var8 = 4;
            var7['marginLeft'] = var8;
            var1['style'] = var7;
            var6 = var2.bind(var4)(var3, var1);
 224:
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = {'flexDirection': 'row', 'alignItems': 'center'};
            var7['minHeight'] = var13;
            var1['style'] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var18];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var5['lineClamp'] = var17;
            if(!(var9 == var15)) { _fun0001_ip = 310; continue _fun0001 }
 294:
            var16 = var16.messagePreview;
            var16 = var16.text;
            var15 = var16.variant;
 310:
            var5['variant'] = var15;
            var5['maxFontSizeMultiplier'] = var12;
            var5['color'] = var11;
            var11 = {'flexShrink': 1, 'lineHeight': null, 'paddingBottom': 2};
            var12 = 2;
            var12 = var13 - var12;
            var11['lineHeight'] = var12;
            var5['style'] = var11;
            var11 = var9 != var14;
            if(!var11) { _fun0001_ip = 390; continue _fun0001 }
 361:
            var9 = global;
            var9 = var9.HermesInternal;
            var13 = var9.concat;
            var12 = '';
            var9 = ': ';
            var11 = var13.bind(var12)(var14, var9);
 390:
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function renderSystemMessage(arg1, arg2) {
        var4 = _closure1_slot13;
        var3 = {};
        var1 = arg1;
        var3['content'] = var1;
        var2 = undefined;
        var1 = arg2;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function Call(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var6 = var1.color;
            var3 = var1.channel;
            var8 = var1.layout;
            var5 = var1.muted;
            var9 = var2.id;
            var4 = _closure1_slot5;
            var3 = var4.getId;
            var10 = var3.bind(var4)();
            var3 = var2.getChannelId;
            var7 = var3.bind(var2)();
            var11 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 9;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var11.bind(var4)(var3);
            var7 = var3.bind(var4)(var7, var9);
            var3 = _closure1_slot14;
            if(var7) { _fun0002_ip = 249; continue _fun0002 }
 100:
            var11 = var2.call;
            var9 = null;
            if(!(var9 != var11)) { _fun0002_ip = 192; continue _fun0002 }
 111:
            var2 = var2.call;
            var9 = var2.participants;
            var2 = var9.includes;
            var2 = var2.bind(var9)(var10);
            if(var2) { _fun0002_ip = 192; continue _fun0002 }
 135:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 10;
            var9 = var12[var2];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.2CnhoK;
            var2 = var9.bind(var10)(var2);
            _fun0002_ip = 247; continue _fun0002;
 192:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 10;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.v05Xd3;
            var2 = var10.bind(var11)(var9);
 247:
            _fun0002_ip = 304; continue _fun0002;
 249:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 10;
            var9 = var12[var1];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.NGg/fn;
            var2 = var9.bind(var10)(var1);
 304:
            var1 = {};
            var1['layout'] = var8;
            var1['muted'] = var5;
            var5 = 'text-positive';
            if(var7) { _fun0002_ip = 328; continue _fun0002 }
 325:
            var5 = var6;
 328:
            var1['color'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function Default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var6 = var2.message;
            var _closure2_slot0 = var6;
            var16 = var2.channel;
            var _closure2_slot1 = var16;
            var12 = var2.variant;
            var13 = var2.color;
            var _closure2_slot2 = var13;
            var11 = var2.layout;
            var _closure2_slot3 = var11;
            var8 = var2.username;
            var10 = var2.muted;
            var _closure2_slot4 = var10;
            var4 = var2.postProcessor;
            var _closure2_slot5 = var4;
            var3 = var2.lineClamp;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 11;
            var7 = var7[var5];
            var5 = undefined;
            var9 = var9.bind(var5)(var7);
            var7 = var9.useFontScale;
            var7 = var7.bind(var9)();
            var _closure2_slot6 = var7;
            var15 = _closure1_slot3;
            var14 = var15.useMemo;
            var17 = var6.content;
            var9 = new Array(8);
            var9[0] = var17;
            var9[1] = var10;
            var17 = var16.guild_id;
            var9[2] = var17;
            var16 = var16.id;
            var9[3] = var16;
            var9[4] = var11;
            var9[5] = var13;
            var9[6] = var4;
            var9[7] = var7;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.renderMessagePreviewMarkup;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.content;
                var1['content'] = var5;
                var5 = _closure2_slot4;
                var1['muted'] = var5;
                var5 = _closure2_slot1;
                var6 = var5.guild_id;
                var1['guildId'] = var6;
                var5 = var5.id;
                var1['channelId'] = var5;
                var5 = _closure2_slot3;
                var1['layout'] = var5;
                var5 = _closure2_slot2;
                var1['color'] = var5;
                var5 = _closure2_slot5;
                var1['postProcessor'] = var5;
                var4 = _closure2_slot6;
                var1['fontScale'] = var4;
                var4 = 1.75;
                var1['maxFontSizeMultiplier'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var15)(var4, var9);
            var4 = {};
            var4['color'] = var13;
            var4['variant'] = var12;
            var4['layout'] = var11;
            var4['muted'] = var10;
            var4['message'] = var6;
            var4['fontScale'] = var7;
            var4['lineClamp'] = var3;
            var3 = 1.75;
            var4['maxFontSizeMultiplier'] = var3;
            var3 = null;
            if(!(var3 != var9)) { _fun0003_ip = 272; continue _fun0003 }
 243:
            var7 = _closure1_slot3;
            var10 = var7.Children;
            var7 = var10.count;
            var10 = var7.bind(var10)(var9);
            var7 = 0;
            if(!(!(var10 > var7))) { _fun0003_ip = 1731; continue _fun0003 }
 272:
            var11 = var6.hasFlag;
            var10 = _closure1_slot8;
            var10 = var10.IS_VOICE_MESSAGE;
            var10 = var11.bind(var6)(var10);
            if(var10) { _fun0003_ip = 1654; continue _fun0003 }
 299:
            var10 = var6.attachments;
            var10 = var10.length;
            var11 = 0;
            if(!(!(var10 > var11))) { _fun0003_ip = 1291; continue _fun0003 }
 319:
            var10 = var6.embeds;
            var10 = var10.length;
            if(!(!(var10 > var11))) { _fun0003_ip = 663; continue _fun0003 }
 337:
            var10 = var6.stickerItems;
            var10 = var10.length;
            if(!(!(var10 > var11))) { _fun0003_ip = 596; continue _fun0003 }
 355:
            var10 = var6.isPoll;
            var10 = var10.bind(var6)();
            if(var10) { _fun0003_ip = 485; continue _fun0003 }
 368:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 20;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.bind(var5)(var6);
            var13 = _closure1_slot13;
            var12 = {};
            var12['username'] = var8;
            if(var10) { _fun0003_ip = 418; continue _fun0003 }
 406:
            var12['content'] = var9;
            var10 = var13.bind(var5)(var12, var4);
            _fun0003_ip = 483; continue _fun0003;
 418:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 10;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.9ddYKi;
            var14 = var15.bind(var16)(var14);
            var12['content'] = var14;
            var10 = var13.bind(var5)(var12, var4);
 483:
            _fun0003_ip = 594; continue _fun0003;
 485:
            var13 = _closure1_slot13;
            var12 = {};
            var12['username'] = var8;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 10;
            var16 = var18[var14];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var18[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.t;
            var15 = var14.ImizdH;
            var14 = {};
            var19 = var6.poll;
            var20 = var3 == var19;
            var18 = undefined;
            if(var20) { _fun0003_ip = 573; continue _fun0003 }
 562:
            var19 = var19.question;
            var18 = var19.text;
 573:
            var14['question'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var12['content'] = var14;
            var10 = var13.bind(var5)(var12, var4);
 594:
            _fun0003_ip = 661; continue _fun0003;
 596:
            var13 = _closure1_slot13;
            var12 = {};
            var12['username'] = var8;
            var14 = var6.stickerItems;
            var14 = var14[var11];
            var14 = var14.name;
            var12['content'] = var14;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 19;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.StickerIcon;
            var12['icon'] = var14;
            var10 = var13.bind(var5)(var12, var4);
 661:
            return var10;
 663:
            var13 = var6.embeds;
            var12 = var13.every;
            var10 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.url;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 58; continue _fun0004 }
 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isImageUrl;
                    var2 = var2.url;
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var10);
            var12 = !var13;
            if(!var12) { _fun0003_ip = 713; continue _fun0003 }
 691:
            var15 = var6.embeds;
            var14 = var15.every;
            var10 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.url;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 58; continue _fun0005 }
 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isVideoUrl;
                    var2 = var2.url;
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var10);
 713:
            var10 = !var13;
            if(!var10) { _fun0003_ip = 722; continue _fun0003 }
 719:
            var10 = !var12;
 722:
            if(!var10) { _fun0003_ip = 747; continue _fun0003 }
 725:
            var16 = var6.embeds;
            var15 = var16.every;
            var14 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.url;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0006_ip = 58; continue _fun0006 }
 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isAudioFile;
                    var2 = var2.url;
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var10 = var15.bind(var16)(var14);
 747:
            if(var13) { _fun0003_ip = 1174; continue _fun0003 }
 753:
            if(var12) { _fun0003_ip = 1081; continue _fun0003 }
 759:
            if(var10) { _fun0003_ip = 985; continue _fun0003 }
 765:
            var10 = var6.embeds;
            var10 = var10.length;
            if(!(var10 > var11)) { _fun0003_ip = 803; continue _fun0003 }
 780:
            var10 = var6.embeds;
            var10 = var10[var11];
            var10 = var10.rawTitle;
            if(!(var3 == var10)) { _fun0003_ip = 962; continue _fun0003 }
 803:
            var10 = var6.embeds;
            var10 = var10.length;
            if(!(var10 > var11)) { _fun0003_ip = 838; continue _fun0003 }
 818:
            var10 = var6.embeds;
            var10 = var10[var11];
            var10 = var10.rawDescription;
            if(!(var3 == var10)) { _fun0003_ip = 939; continue _fun0003 }
 838:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 10;
            var12 = var14[var10];
            var12 = var13.bind(var5)(var12);
            var16 = var12.intl;
            var15 = var16.formatToPlainString;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var12 = var10.9XuYjo;
            var10 = {};
            var17 = var6.embeds;
            var17 = var17.length;
            var10['count'] = var17;
            var10 = var15.bind(var16)(var12, var10);
            var12 = 18;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.LinkIcon;
            var13 = var10;
            _fun0003_ip = 1265; continue _fun0003;
 939:
            var10 = var6.embeds;
            var10 = var10[var11];
            var13 = var10.rawDescription;
            var12 = undefined;
            _fun0003_ip = 1265; continue _fun0003;
 962:
            var10 = var6.embeds;
            var10 = var10[var11];
            var13 = var10.rawTitle;
            var12 = undefined;
            _fun0003_ip = 1265; continue _fun0003;
 985:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 10;
            var11 = var15[var10];
            var11 = var14.bind(var5)(var11);
            var17 = var11.intl;
            var16 = var17.formatToPlainString;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.fnO3hI;
            var10 = {};
            var18 = var6.embeds;
            var18 = var18.length;
            var10['count'] = var18;
            var13 = var16.bind(var17)(var11, var10);
            var10 = 16;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var12 = var10.MusicIcon;
            _fun0003_ip = 1265; continue _fun0003;
 1081:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 10;
            var11 = var15[var10];
            var11 = var14.bind(var5)(var11);
            var17 = var11.intl;
            var16 = var17.formatToPlainString;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.SJ6pPT;
            var10 = {};
            var18 = var6.embeds;
            var18 = var18.length;
            var10['count'] = var18;
            var13 = var16.bind(var17)(var11, var10);
            var10 = 15;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var12 = var10.VideoIcon;
            _fun0003_ip = 1265; continue _fun0003;
 1174:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 10;
            var11 = var15[var10];
            var11 = var14.bind(var5)(var11);
            var17 = var11.intl;
            var16 = var17.formatToPlainString;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.h4pFfX;
            var10 = {};
            var18 = var6.embeds;
            var18 = var18.length;
            var10['count'] = var18;
            var13 = var16.bind(var17)(var11, var10);
            var10 = 14;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var12 = var10.ImageIcon;
 1265:
            var11 = _closure1_slot13;
            var10 = {};
            var10['username'] = var8;
            var10['content'] = var13;
            var10['icon'] = var12;
            var10 = var11.bind(var5)(var10, var4);
            return var10;
 1291:
            var12 = var6.attachments;
            var11 = var12.every;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isImageFile;
                var1 = arg1;
                var1 = var1.filename;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var11.bind(var12)(var10);
            var11 = !var12;
            if(!var11) { _fun0003_ip = 1341; continue _fun0003 }
 1319:
            var14 = var6.attachments;
            var13 = var14.every;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isVideoFile;
                var1 = arg1;
                var1 = var1.filename;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var13.bind(var14)(var10);
 1341:
            var10 = !var12;
            if(!var10) { _fun0003_ip = 1350; continue _fun0003 }
 1347:
            var10 = !var11;
 1350:
            if(!var10) { _fun0003_ip = 1375; continue _fun0003 }
 1353:
            var14 = var6.attachments;
            var13 = var14.every;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isAudioFile;
                var1 = arg1;
                var1 = var1.filename;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var13.bind(var14)(var1);
 1375:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 10;
            var15 = var14[var1];
            var15 = var13.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var1 = var14[var1];
            var1 = var13.bind(var5)(var1);
            var1 = var1.t;
            if(var12) { _fun0003_ip = 1581; continue _fun0003 }
 1425:
            if(var11) { _fun0003_ip = 1532; continue _fun0003 }
 1428:
            if(var10) { _fun0003_ip = 1483; continue _fun0003 }
 1431:
            var11 = var1.89ihS0;
            var10 = {};
            var12 = var6.attachments;
            var12 = var12.length;
            var10['count'] = var12;
            var12 = var15.bind(var16)(var11, var10);
            var11 = 17;
            var11 = var14[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.AttachmentIcon;
            _fun0003_ip = 1628; continue _fun0003;
 1483:
            var17 = var1.fnO3hI;
            var10 = {};
            var18 = var6.attachments;
            var18 = var18.length;
            var10['count'] = var18;
            var12 = var15.bind(var16)(var17, var10);
            var10 = 16;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var11 = var10.MusicIcon;
            _fun0003_ip = 1628; continue _fun0003;
 1532:
            var17 = var1.SJ6pPT;
            var10 = {};
            var18 = var6.attachments;
            var18 = var18.length;
            var10['count'] = var18;
            var12 = var15.bind(var16)(var17, var10);
            var10 = 15;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var11 = var10.VideoIcon;
            _fun0003_ip = 1628; continue _fun0003;
 1581:
            var10 = var1.h4pFfX;
            var1 = {};
            var17 = var6.attachments;
            var17 = var17.length;
            var1['count'] = var17;
            var12 = var15.bind(var16)(var10, var1);
            var1 = 14;
            var1 = var14[var1];
            var1 = var13.bind(var5)(var1);
            var11 = var1.ImageIcon;
 1628:
            var10 = _closure1_slot13;
            var1 = {};
            var1['username'] = var8;
            var1['content'] = var12;
            var1['icon'] = var11;
            var1 = var10.bind(var5)(var1, var4);
            return var1;
 1654:
            var10 = _closure1_slot13;
            var1 = {};
            var1['username'] = var8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 10;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.slFYgo;
            var11 = var12.bind(var13)(var11);
            var1['content'] = var11;
            var1 = var10.bind(var5)(var1, var4);
            return var1;
 1731:
            var1 = var6.embeds;
            var10 = var1.length;
            var1 = 1;
            if(!(var1 === var10)) { _fun0003_ip = 1793; continue _fun0003 }
 1749:
            var1 = var6.embeds;
            var1 = var1[var7];
            var10 = var1.url;
            var1 = var6.content;
            if(!(var10 === var1)) { _fun0003_ip = 1793; continue _fun0003 }
 1773:
            var1 = var6.embeds;
            var1 = var1[var7];
            var1 = var1.rawTitle;
            if(!(var3 == var1)) { _fun0003_ip = 1815; continue _fun0003 }
 1793:
            var3 = _closure1_slot13;
            var1 = {};
            var1['username'] = var8;
            var1['content'] = var9;
            var1 = var3.bind(var5)(var1, var4);
            _fun0003_ip = 1851; continue _fun0003;
 1815:
            var3 = _closure1_slot13;
            var2 = {};
            var2['username'] = var8;
            var6 = var6.embeds;
            var6 = var6[var7];
            var6 = var6.rawTitle;
            var2['content'] = var6;
            var1 = var3.bind(var5)(var2, var4);
 1851:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function DefaultNative(arg1) {
        var1 = arg1;
        var8 = var1.message;
        var2 = var1.lineClamp;
        var _closure2_slot0 = var2;
        var6 = var1.messageSizeCacheRef;
        var5 = var1.maxHeight;
        var3 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 21;
        var7 = var10[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var7);
        var11 = var7.RenderEmbeds;
        var7 = var11.getSetting;
        var13 = var7.bind(var11)();
        var _closure2_slot1 = var13;
        var7 = var10[var2];
        var7 = var3.bind(var4)(var7);
        var11 = var7.InlineEmbedMedia;
        var7 = var11.getSetting;
        var12 = var7.bind(var11)();
        var _closure2_slot2 = var12;
        var2 = var10[var2];
        var2 = var3.bind(var4)(var2);
        var3 = var2.InlineAttachmentMedia;
        var2 = var3.getSetting;
        var2 = var2.bind(var3)();
        var _closure2_slot3 = var2;
        var11 = _closure1_slot3;
        var7 = var11.useMemo;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var12;
        var3[2] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var7 = var2;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = var1.setOptions;
            var2 = {'renderEmbeds': null, 'inlineEmbedMedia': null, 'inlineAttachmentMedia': null, 'renderReactions': false, 'animateEmoji': false, 'gifAutoPlay': false, 'renderReplies': false, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInviteEmbed': false, 'renderThreadEmbeds': false, 'renderForumPostActions': false, 'ignoreMentioned': true, 'enableSwipeActions': false, 'renderExecutedCommands': false, 'useAlternateEmbedColors': true};
            var5 = _closure2_slot1;
            var2['renderEmbeds'] = var5;
            var5 = _closure2_slot2;
            var2['inlineEmbedMedia'] = var5;
            var4 = _closure2_slot3;
            var2['inlineAttachmentMedia'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var7 = var7.bind(var11)(var2, var3);
        var3 = _closure1_slot9;
        var2 = _closure1_slot1;
        var1 = 23;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'pointerEvents': 'none', 'horizontalOffset': 0};
        var9 = function modifyRow(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.MessageContextType;
                var2 = var2.SEARCH;
                var3['contextType'] = var2;
                var5 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var5)) { _fun0007_ip = 89; continue _fun0007 }
 59:
                var2 = {'numberOfLines': null, 'expandable': false, 'seeMoreLabel': ''};
                var4 = _closure2_slot0;
                var2['numberOfLines'] = var4;
                var3['truncation'] = var2;
 89:
                return var1;
            }
        };
        var1['modifyRow'] = var9;
        var1['message'] = var8;
        var1['rowGenerator'] = var7;
        var1['messageSizeCacheRef'] = var6;
        var1['maxHeight'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function RecipientAdd(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var2 = var5.message;
            var _closure2_slot0 = var2;
            var10 = var5.channel;
            var9 = var5.username;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 25;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStores;
            var7 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var4 = var1.mentions;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var3.bind(var6)(var2, var1);
            var1 = null;
            var2 = var1 != var14;
            if(!var2) { _fun0008_ip = 221; continue _fun0008 }
 89:
            var3 = _closure1_slot14;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var7 = var13[var2];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var2 = var13[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.t;
            var6 = var2.MMN2Ji;
            var2 = {};
            var2['username'] = var9;
            var9 = _closure1_slot12;
            var2['usernameHook'] = var9;
            var12 = _closure1_slot1;
            var11 = 26;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.getName;
            var11 = var10.guild_id;
            var10 = var10.id;
            var10 = var12.bind(var13)(var11, var10, var14);
            var2['otherUsername'] = var10;
            var2['otherUsernameHook'] = var9;
            var2 = var7.bind(var8)(var6, var2);
            var1 = var3.bind(var4)(var2, var5);
 221:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function RecipientRemove(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var2 = var5.message;
            var _closure2_slot0 = var2;
            var12 = var5.channel;
            var11 = var5.username;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 25;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var4 = var1.mentions;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var6.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 != var16;
            if(!var3) { _fun0009_ip = 309; continue _fun0009 }
 89:
            var3 = _closure1_slot14;
            var2 = var2.author;
            if(!(var2 !== var16)) { _fun0009_ip = 230; continue _fun0009 }
 106:
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 10;
            var7 = var15[var2];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var2 = var15[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.t;
            var6 = var2.L2FyVl;
            var2 = {};
            var2['username'] = var11;
            var9 = _closure1_slot12;
            var2['usernameHook'] = var9;
            var14 = _closure1_slot1;
            var13 = 26;
            var13 = var15[var13];
            var15 = var14.bind(var4)(var13);
            var14 = var15.getName;
            var13 = var12.guild_id;
            var12 = var12.id;
            var12 = var14.bind(var15)(var13, var12, var16);
            var2['otherUsername'] = var12;
            var2['otherUsernameHook'] = var9;
            var2 = var7.bind(var8)(var6, var2);
            _fun0009_ip = 303; continue _fun0009;
 230:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 10;
            var8 = var12[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.5v2xa2;
            var6 = {};
            var6['username'] = var11;
            var10 = _closure1_slot12;
            var6['usernameHook'] = var10;
            var2 = var8.bind(var9)(var7, var6);
 303:
            var1 = var3.bind(var4)(var2, var5);
 309:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ChannelNameChange(arg1) {
        var4 = arg1;
        var8 = var4.message;
        var10 = var4.username;
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var6 = var11[var1];
        var2 = undefined;
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var1 = var11[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var5 = var1.oItgEx;
        var1 = {};
        var1['username'] = var10;
        var9 = _closure1_slot12;
        var1['usernameHook'] = var9;
        var8 = var8.content;
        var1['channelName'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function ChannelIconChange(arg1) {
        var4 = arg1;
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 10;
        var6 = var9[var1];
        var2 = undefined;
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var1 = var9[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var5 = var1.OEdU6e;
        var1 = {};
        var9 = var4.username;
        var1['username'] = var9;
        var8 = _closure1_slot12;
        var1['usernameHook'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function ChannelPinnedMessage(arg1) {
        var4 = arg1;
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 10;
        var6 = var9[var1];
        var2 = undefined;
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var1 = var9[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var5 = var1.vfkjq6;
        var1 = {};
        var9 = var4.username;
        var1['username'] = var9;
        var8 = _closure1_slot12;
        var1['usernameHook'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function UserJoined(arg1) {
        var4 = arg1;
        var9 = var4.message;
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 10;
        var1 = var10[var1];
        var2 = undefined;
        var1 = var5.bind(var2)(var1);
        var7 = var1.intl;
        var6 = var7.format;
        var5 = _closure1_slot1;
        var1 = 27;
        var1 = var10[var1];
        var10 = var5.bind(var2)(var1);
        var5 = var10.getSystemMessageUserJoin;
        var1 = var9.id;
        var5 = var5.bind(var10)(var1);
        var1 = {};
        var9 = var9.nick;
        var1['username'] = var9;
        var8 = _closure1_slot12;
        var1['usernameHook'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function ThreadCreated(arg1) {
        var4 = arg1;
        var9 = var4.message;
        var10 = var4.username;
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var6 = var11[var1];
        var2 = undefined;
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var1 = var11[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var5 = var1.SGaUAQ;
        var1 = {};
        var1['actorName'] = var10;
        var8 = _closure1_slot12;
        var1['actorHook'] = var8;
        var9 = var9.content;
        var1['threadName'] = var9;
        var1['threadOnClick'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function PremiumTrialShare(arg1) {
        var4 = arg1;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 28;
        var2 = var9[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.getMessageAuthor;
        var2 = var4.message;
        var8 = var6.bind(var7)(var2);
        var2 = _closure1_slot14;
        var1 = 10;
        var6 = var9[var1];
        var6 = var5.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var1 = var9[var1];
        var1 = var5.bind(var3)(var1);
        var1 = var1.t;
        var5 = var1.lieTqa;
        var1 = {};
        var8 = var8.nick;
        var1['username'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function HiddenMessage(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var7 = arg1;
            var2 = var7.message;
            var4 = _closure1_slot6;
            var3 = var4.isBlocked;
            var2 = var2.author;
            var2 = var2.id;
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center'};
            var2['style'] = var6;
            var6 = _closure1_slot14;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var9 = var12[var8];
            var1 = undefined;
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var1)(var8);
            var8 = var8.t;
            if(var5) { _fun0010_ip = 131; continue _fun0010 }
 118:
            var5 = var8.G7p6v7;
            var5 = var9.bind(var10)(var5);
            _fun0010_ip = 142; continue _fun0010;
 131:
            var8 = var8.XAkOo6;
            var5 = var9.bind(var10)(var8);
 142:
            var5 = var6.bind(var1)(var5, var7);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function getMessageComponentType(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 29;
            var3 = var1[var6];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.DEFAULT;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 47:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANGELOG;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 83:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.REPLY;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 119:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHAT_INPUT_COMMAND;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 155:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CONTEXT_MENU_COMMAND;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 191:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.POLL_RESULT;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 227:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.AUTO_MODERATION_ACTION;
            if(!(var3 !== var4)) { _fun0011_ip = 631; continue _fun0011 }
 263:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.RECIPIENT_ADD;
            if(!(var3 !== var4)) { _fun0011_ip = 625; continue _fun0011 }
 299:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.RECIPIENT_REMOVE;
            if(!(var3 !== var4)) { _fun0011_ip = 619; continue _fun0011 }
 335:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CALL;
            if(!(var3 !== var4)) { _fun0011_ip = 613; continue _fun0011 }
 371:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var4)) { _fun0011_ip = 607; continue _fun0011 }
 407:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANNEL_ICON_CHANGE;
            if(!(var3 !== var4)) { _fun0011_ip = 601; continue _fun0011 }
 443:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANNEL_PINNED_MESSAGE;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 476:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.USER_JOIN;
            if(!(var3 !== var4)) { _fun0011_ip = 589; continue _fun0011 }
 509:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.THREAD_CREATED;
            if(!(var3 !== var4)) { _fun0011_ip = 583; continue _fun0011 }
 542:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.PREMIUM_REFERRAL;
            if(!(var3 !== var4)) { _fun0011_ip = 577; continue _fun0011 }
 575:
            return var1;
 577:
            var1 = _closure1_slot25;
            return var1;
 583:
            var1 = _closure1_slot24;
            return var1;
 589:
            var1 = _closure1_slot23;
            return var1;
 595:
            var1 = _closure1_slot22;
            return var1;
 601:
            var1 = _closure1_slot21;
            return var1;
 607:
            var1 = _closure1_slot20;
            return var1;
 613:
            var1 = _closure1_slot15;
            return var1;
 619:
            var1 = _closure1_slot19;
            return var1;
 625:
            var1 = _closure1_slot18;
            return var1;
 631:
            var1 = _closure1_slot11;
            var3 = var1.STREAMLINED;
            var1 = arg2;
            if(!(var1 !== var3)) { _fun0011_ip = 654; continue _fun0011 }
 648:
            var1 = _closure1_slot17;
            _fun0011_ip = 658; continue _fun0011;
 654:
            var1 = _closure1_slot16;
 658:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var5 = 0;
    var4 = var10[var5];
    var2 = metroImportAll;
    var1 = undefined;
    var11 = var2.bind(var1)(var4);
    var _closure1_slot3 = var11;
    var4 = 1;
    var2 = var10[var4];
    var2 = var9.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.MessageFlags;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var7 = var2.jsx;
    var _closure1_slot9 = var7;
    var2 = var2.jsxs;
    var _closure1_slot10 = var2;
    var7 = {};
    var7['STREAMLINED'] = var5;
    var2 = 'STREAMLINED';
    var7[var5] = var2;
    var7['FULL'] = var4;
    var2 = 'FULL';
    var7[var4] = var2;
    var _closure1_slot11 = var7;
    var4 = var11.memo;
    var2 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var12 = var5.message;
            var _closure2_slot0 = var12;
            var11 = var5.channel;
            var _closure2_slot1 = var11;
            var1 = null;
            var4 = Object.create(var1);
            var2 = 0;
            var4['message'] = var2;
            var4['channel'] = var2;
            var16 = {};
            var15 = var5;
            var14 = var4;
            var9 = copyDataProperties(var16, var15, var14);
            var _closure2_slot2 = var9;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var2 = var12.author;
            var6 = var2.id;
            var7 = _closure1_slot5;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            if(!(var6 !== var4)) { _fun0012_ip = 138; continue _fun0012 }
 92:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 26;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var7 = var8.getName;
            var6 = var11.id;
            var4 = var12.author;
            var10 = var7.bind(var8)(var1, var6, var4);
            _fun0012_ip = 193; continue _fun0012;
 138:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 10;
            var6 = var13[var4];
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var13[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.LuZzxs;
            var10 = var6.bind(var7)(var4);
 193:
            _closure2_slot3 = var10;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 25;
            var4 = var7[var4];
            var13 = var6.bind(var5)(var4);
            var8 = var13.useStateFromStores;
            var4 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = var12.author;
            var4 = var4.id;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var13)(var7, var4, var6);
            var7 = var12.type;
            if(var4) { _fun0012_ip = 295; continue _fun0012 }
 273:
            var6 = _closure1_slot27;
            var4 = _closure1_slot11;
            var4 = var4.STREAMLINED;
            var4 = var6.bind(var5)(var7, var4);
            _fun0012_ip = 299; continue _fun0012;
 295:
            var4 = _closure1_slot26;
 299:
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = new Array(4);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var10;
            var6[3] = var9;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['message'] = var3;
                var3 = _closure2_slot1;
                var1['channel'] = var3;
                var3 = _closure2_slot3;
                var1['username'] = var3;
                var4 = _closure2_slot2;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                return var1;
            };
            var6 = var7.bind(var8)(var3, var6);
            var3 = var1 == var4;
            var1 = null;
            if(var3) { _fun0012_ip = 383; continue _fun0012 }
 348:
            var3 = _closure1_slot9;
            var2 = {};
            var16 = var2;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var7 = 'preview';
            var6 = 'context';
            var2[var6] = var7;
            var1 = var3.bind(var5)(var4, var2);
 383:
            return var1;
        }
    };
    var5 = var4.bind(var11)(var2);
    var4 = var11.memo;
    var2 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var13 = var5.guildId;
            var11 = var5.channel;
            var _closure2_slot0 = var11;
            var12 = var5.message;
            var _closure2_slot1 = var12;
            var4 = {'guildId': 0, 'channel': 0, 'message': 0};
            var1 = null;
            var17 = var4;
            var16 = null;
            var2 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var5;
            var15 = var4;
            var9 = copyDataProperties(var17, var16, var15);
            var _closure2_slot2 = var9;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 25;
            var4 = var8[var4];
            var14 = var6.bind(var5)(var4);
            var10 = var14.useStateFromStores;
            var4 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = var12.author;
            var4 = var4.id;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot1;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var10.bind(var14)(var7, var4, var6);
            var7 = _closure1_slot1;
            var6 = 26;
            var6 = var8[var6];
            var10 = var7.bind(var5)(var6);
            var8 = var10.useName;
            var7 = var11.id;
            var6 = var12.author;
            var8 = var8.bind(var10)(var13, var7, var6);
            var6 = var12.author;
            var7 = var6.id;
            var10 = _closure1_slot5;
            var6 = var10.getId;
            var6 = var6.bind(var10)();
            var10 = var8;
            if(!(var7 === var6)) { _fun0013_ip = 273; continue _fun0013 }
 218:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 10;
            var7 = var14[var6];
            var7 = var13.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var13.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.LuZzxs;
            var10 = var7.bind(var8)(var6);
 273:
            _closure2_slot3 = var10;
            var7 = var12.type;
            if(var4) { _fun0013_ip = 307; continue _fun0013 }
 285:
            var6 = _closure1_slot27;
            var4 = _closure1_slot11;
            var4 = var4.STREAMLINED;
            var4 = var6.bind(var5)(var7, var4);
            _fun0013_ip = 311; continue _fun0013;
 307:
            var4 = _closure1_slot26;
 311:
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = new Array(4);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var10;
            var6[3] = var9;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['message'] = var3;
                var3 = _closure2_slot0;
                var1['channel'] = var3;
                var3 = _closure2_slot3;
                var1['username'] = var3;
                var4 = _closure2_slot2;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                return var1;
            };
            var6 = var7.bind(var8)(var3, var6);
            var3 = var1 == var4;
            var1 = null;
            if(var3) { _fun0013_ip = 395; continue _fun0013 }
 360:
            var3 = _closure1_slot9;
            var2 = {};
            var17 = var2;
            var16 = var6;
            var6 = copyDataProperties(var17, var16);
            var7 = 'preview';
            var6 = 'context';
            var2[var6] = var7;
            var1 = var3.bind(var5)(var4, var2);
 395:
            return var1;
        }
    };
    var4 = var4.bind(var11)(var2);
    var8 = var11.memo;
    var2 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var5 = arg1;
            var8 = var5.message;
            var _closure2_slot0 = var8;
            var7 = var5.channel;
            var1 = null;
            var4 = Object.create(var1);
            var2 = 0;
            var4['message'] = var2;
            var4['channel'] = var2;
            var15 = {};
            var14 = var5;
            var13 = var4;
            var6 = copyDataProperties(var15, var14, var13);
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 25;
            var4 = var5[var4];
            var5 = undefined;
            var11 = var9.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = var8.author;
            var12 = var4.id;
            var4 = new Array(1);
            var4[0] = var12;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3, var4);
            var9 = var8.type;
            if(var3) { _fun0014_ip = 149; continue _fun0014 }
 127:
            var4 = _closure1_slot27;
            var3 = _closure1_slot11;
            var3 = var3.FULL;
            var4 = var4.bind(var5)(var9, var3);
            _fun0014_ip = 153; continue _fun0014;
 149:
            var4 = _closure1_slot26;
 153:
            var3 = var1 == var4;
            var1 = null;
            if(var3) { _fun0014_ip = 217; continue _fun0014 }
 162:
            var3 = _closure1_slot16;
            if(!(var4 === var3)) { _fun0014_ip = 174; continue _fun0014 }
 170:
            var4 = _closure1_slot17;
 174:
            var3 = _closure1_slot9;
            var2 = {};
            var2['message'] = var8;
            var2['channel'] = var7;
            var15 = var2;
            var14 = var6;
            var6 = copyDataProperties(var15, var14);
            var7 = 'search';
            var6 = 'context';
            var2[var6] = var7;
            var1 = var3.bind(var5)(var4, var2);
 217:
            return var1;
        }
    };
    var2 = var8.bind(var11)(var2);
    var8 = 30;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx';
    var8 = var9.bind(var10)(var8);
    var3['DefaultMessageComponentStyle'] = var7;
    var7 = function ChannelRowPreview(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var8 = var4.message;
            var7 = var4.channel;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['message'] = var2;
            var3['channel'] = var2;
            var12 = {};
            var11 = var4;
            var10 = var3;
            var6 = copyDataProperties(var12, var11, var10);
            var9 = _closure1_slot27;
            var4 = var8.type;
            var3 = _closure1_slot11;
            var3 = var3.FULL;
            var5 = undefined;
            var4 = var9.bind(var5)(var4, var3);
            var3 = var1 == var4;
            if(var3) { _fun0015_ip = 107; continue _fun0015 }
 77:
            var3 = _closure1_slot9;
            var2 = {};
            var2['message'] = var8;
            var2['channel'] = var7;
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var1 = var3.bind(var5)(var4, var2);
 107:
            return var1;
        }
    };
    var3['ChannelRowPreview'] = var7;
    var6 = function NotificationChannelRowPreview(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var8 = var4.message;
            var7 = var4.channel;
            var9 = var4.componentStyle;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0016_ip = 38; continue _fun0016 }
 25:
            var1 = _closure1_slot11;
            var9 = var1.FULL;
 38:
            var3 = {'message': 0, 'channel': 0, 'componentStyle': 0};
            var1 = null;
            var12 = var3;
            var11 = null;
            var2 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var4;
            var10 = var3;
            var6 = copyDataProperties(var12, var11, var10);
            var4 = _closure1_slot27;
            var3 = var8.type;
            var4 = var4.bind(var5)(var3, var9);
            var3 = var1 == var4;
            if(var3) { _fun0016_ip = 130; continue _fun0016 }
 100:
            var3 = _closure1_slot9;
            var2 = {};
            var2['message'] = var8;
            var2['channel'] = var7;
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var1 = var3.bind(var5)(var4, var2);
 130:
            return var1;
        }
    };
    var3['NotificationChannelRowPreview'] = var6;
    var3['PrivateChannelRowPreview'] = var5;
    var3['GuildChannelRowPreview'] = var4;
    var3['SearchChannelRowPreview'] = var2;
    return var1;
})();