// app/modules/launchpad/native/shared/ChannelRowPreview.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var7 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var1 = function identityHook(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function renderMessageText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var14 = var2.username;
            var10 = var2.content;
            var3 = var2.icon;
            var15 = var1.variant;
            var11 = var1.color;
            var20 = var1.muted;
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
            var13 = var1.maxFontSizeMultiplier;
            if(!(var13 === var4)) { _fun0001_ip = 85; continue _fun0001 }
 75:
            var13 = 1.75;
 85:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 9;
            var6 = var1[var6];
            var6 = var7.bind(var4)(var6);
            var16 = var6.bind(var4)();
            var6 = _closure1_slot0;
            var18 = 10;
            var1 = var1[var18];
            var1 = var6.bind(var4)(var1);
            var6 = var1.TextStyleSheet;
            var1 = var16.messagePreview;
            var1 = var1.text;
            var1 = var1.variant;
            var1 = var6[var1];
            var1 = var1.lineHeight;
            var8 = var1 * var2;
            var9 = null;
            var1 = var9 != var3;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 247; continue _fun0001 }
 175:
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            var2 = _closure1_slot11;
            var1 = {};
            var7 = var16.messagePreview;
            var7 = var7.messageTypeIconSizeNew;
            var1['size'] = var7;
            var1['color'] = var11;
            var7 = {};
            var12 = 4;
            var7['marginLeft'] = var12;
            var1['style'] = var7;
            var6 = var2.bind(var4)(var3, var1);
 247:
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = {'flexDirection': 'row', 'alignItems': 'center'};
            var12 = 1;
            var19 = var12;
            if(var20) { _fun0001_ip = 284; continue _fun0001 }
 280:
            var19 = _closure1_slot10;
 284:
            var7['opacity'] = var19;
            var7['minHeight'] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var18];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var5['lineClamp'] = var17;
            if(!(var9 == var15)) { _fun0001_ip = 350; continue _fun0001 }
 334:
            var16 = var16.messagePreview;
            var16 = var16.text;
            var15 = var16.variant;
 350:
            var5['variant'] = var15;
            var5['maxFontSizeMultiplier'] = var13;
            var5['color'] = var11;
            var11 = {};
            var11['flexShrink'] = var12;
            var5['style'] = var11;
            var11 = var9 != var14;
            if(!var11) { _fun0001_ip = 410; continue _fun0001 }
 381:
            var9 = global;
            var9 = var9.HermesInternal;
            var13 = var9.concat;
            var12 = '';
            var9 = ': ';
            var11 = var13.bind(var12)(var14, var9);
 410:
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
    var _closure1_slot15 = var1;
    var1 = function renderSystemMessage(arg1, arg2) {
        var4 = _closure1_slot15;
        var3 = {};
        var1 = arg1;
        var3['content'] = var1;
        var2 = undefined;
        var1 = arg2;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function Call(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var6 = var1.color;
            var3 = var1.channel;
            var5 = var1.muted;
            var8 = var2.id;
            var4 = _closure1_slot6;
            var3 = var4.getId;
            var9 = var3.bind(var4)();
            var3 = var2.getChannelId;
            var7 = var3.bind(var2)();
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 11;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var10.bind(var4)(var3);
            var7 = var3.bind(var4)(var7, var8);
            var3 = _closure1_slot16;
            if(var7) { _fun0002_ip = 243; continue _fun0002 }
 94:
            var10 = var2.call;
            var8 = null;
            if(!(var8 != var10)) { _fun0002_ip = 186; continue _fun0002 }
 105:
            var2 = var2.call;
            var8 = var2.participants;
            var2 = var8.includes;
            var2 = var2.bind(var8)(var9);
            if(var2) { _fun0002_ip = 186; continue _fun0002 }
 129:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 12;
            var8 = var11[var2];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.2CnhoK;
            var2 = var8.bind(var9)(var2);
            _fun0002_ip = 241; continue _fun0002;
 186:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.v05Xd3;
            var2 = var9.bind(var10)(var8);
 241:
            _fun0002_ip = 298; continue _fun0002;
 243:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 12;
            var8 = var11[var1];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.NGg/fn;
            var2 = var8.bind(var9)(var1);
 298:
            var1 = {};
            var1['muted'] = var5;
            var5 = 'text-positive';
            if(var7) { _fun0002_ip = 317; continue _fun0002 }
 314:
            var5 = var6;
 317:
            var1['color'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function Default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var6 = var2.message;
            var _closure2_slot0 = var6;
            var15 = var2.channel;
            var _closure2_slot1 = var15;
            var11 = var2.variant;
            var12 = var2.color;
            var _closure2_slot2 = var12;
            var8 = var2.username;
            var10 = var2.muted;
            var _closure2_slot3 = var10;
            var4 = var2.postProcessor;
            var _closure2_slot4 = var4;
            var3 = var2.lineClamp;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 13;
            var7 = var7[var5];
            var5 = undefined;
            var9 = var9.bind(var5)(var7);
            var7 = var9.useFontScale;
            var7 = var7.bind(var9)();
            var _closure2_slot5 = var7;
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var16 = var6.content;
            var9 = new Array(7);
            var9[0] = var16;
            var9[1] = var10;
            var16 = var15.guild_id;
            var9[2] = var16;
            var15 = var15.id;
            var9[3] = var15;
            var9[4] = var12;
            var9[5] = var4;
            var9[6] = var7;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.renderMessagePreviewMarkup;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.content;
                var1['content'] = var5;
                var5 = _closure2_slot3;
                var1['muted'] = var5;
                var5 = _closure2_slot1;
                var6 = var5.guild_id;
                var1['guildId'] = var6;
                var5 = var5.id;
                var1['channelId'] = var5;
                var5 = _closure2_slot2;
                var1['color'] = var5;
                var5 = _closure2_slot4;
                var1['postProcessor'] = var5;
                var4 = _closure2_slot5;
                var1['fontScale'] = var4;
                var4 = 1.75;
                var1['maxFontSizeMultiplier'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var13.bind(var14)(var4, var9);
            var4 = {};
            var4['color'] = var12;
            var4['variant'] = var11;
            var4['muted'] = var10;
            var4['message'] = var6;
            var4['fontScale'] = var7;
            var4['lineClamp'] = var3;
            var3 = 1.75;
            var4['maxFontSizeMultiplier'] = var3;
            var3 = null;
            if(!(var3 != var9)) { _fun0003_ip = 255; continue _fun0003 }
 226:
            var7 = _closure1_slot4;
            var10 = var7.Children;
            var7 = var10.count;
            var10 = var7.bind(var10)(var9);
            var7 = 0;
            if(!(!(var10 > var7))) { _fun0003_ip = 2006; continue _fun0003 }
 255:
            var11 = var6.hasFlag;
            var10 = _closure1_slot9;
            var10 = var10.IS_VOICE_MESSAGE;
            var10 = var11.bind(var6)(var10);
            if(var10) { _fun0003_ip = 1929; continue _fun0003 }
 282:
            var10 = var6.attachments;
            var10 = var10.length;
            var11 = 0;
            if(!(!(var10 > var11))) { _fun0003_ip = 1430; continue _fun0003 }
 302:
            var10 = var6.embeds;
            var10 = var10.length;
            if(!(!(var10 > var11))) { _fun0003_ip = 674; continue _fun0003 }
 320:
            var10 = var6.stickerItems;
            var10 = var10.length;
            if(!(!(var10 > var11))) { _fun0003_ip = 579; continue _fun0003 }
 338:
            var10 = var6.isPoll;
            var10 = var10.bind(var6)();
            if(var10) { _fun0003_ip = 468; continue _fun0003 }
 351:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 28;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.bind(var5)(var6);
            var13 = _closure1_slot15;
            var12 = {};
            var12['username'] = var8;
            if(var10) { _fun0003_ip = 401; continue _fun0003 }
 389:
            var12['content'] = var9;
            var10 = var13.bind(var5)(var12, var4);
            _fun0003_ip = 466; continue _fun0003;
 401:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 12;
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
 466:
            _fun0003_ip = 577; continue _fun0003;
 468:
            var13 = _closure1_slot15;
            var12 = {};
            var12['username'] = var8;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 12;
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
            if(var20) { _fun0003_ip = 556; continue _fun0003 }
 545:
            var19 = var19.question;
            var18 = var19.text;
 556:
            var14['question'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var12['content'] = var14;
            var10 = var13.bind(var5)(var12, var4);
 577:
            _fun0003_ip = 672; continue _fun0003;
 579:
            var13 = _closure1_slot15;
            var12 = {};
            var12['username'] = var8;
            var14 = var6.stickerItems;
            var14 = var14[var11];
            var14 = var14.name;
            var12['content'] = var14;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 26;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.StickerIcon;
            var14 = new Array(2);
            var14[0] = var15;
            var16 = _closure1_slot1;
            var15 = 27;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var14[1] = var15;
            var12['icon'] = var14;
            var10 = var13.bind(var5)(var12, var4);
 672:
            return var10;
 674:
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
                    var3 = 15;
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
            if(!var12) { _fun0003_ip = 728; continue _fun0003 }
 704:
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
                    var3 = 15;
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
 728:
            var10 = !var13;
            if(!var10) { _fun0003_ip = 737; continue _fun0003 }
 734:
            var10 = !var12;
 737:
            if(!var10) { _fun0003_ip = 764; continue _fun0003 }
 740:
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
                    var3 = 15;
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
 764:
            if(var13) { _fun0003_ip = 1282; continue _fun0003 }
 770:
            if(var12) { _fun0003_ip = 1158; continue _fun0003 }
 776:
            if(var10) { _fun0003_ip = 1031; continue _fun0003 }
 782:
            var10 = var6.embeds;
            var10 = var10.length;
            if(!(var10 > var11)) { _fun0003_ip = 820; continue _fun0003 }
 797:
            var10 = var6.embeds;
            var10 = var10[var11];
            var10 = var10.rawTitle;
            if(!(var3 == var10)) { _fun0003_ip = 1008; continue _fun0003 }
 820:
            var10 = var6.embeds;
            var10 = var10.length;
            if(!(var10 > var11)) { _fun0003_ip = 858; continue _fun0003 }
 835:
            var10 = var6.embeds;
            var10 = var10[var11];
            var10 = var10.rawDescription;
            if(!(var3 == var10)) { _fun0003_ip = 985; continue _fun0003 }
 858:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 12;
            var12 = var15[var10];
            var12 = var13.bind(var5)(var12);
            var16 = var12.intl;
            var14 = var16.formatToPlainString;
            var10 = var15[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var12 = var10.9XuYjo;
            var10 = {};
            var17 = var6.embeds;
            var17 = var17.length;
            var10['count'] = var17;
            var10 = var14.bind(var16)(var12, var10);
            var12 = 24;
            var12 = var15[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.LinkIcon;
            var12 = new Array(2);
            var12[0] = var13;
            var14 = _closure1_slot1;
            var13 = 25;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var12[1] = var13;
            var13 = var10;
            _fun0003_ip = 1404; continue _fun0003;
 985:
            var10 = var6.embeds;
            var10 = var10[var11];
            var13 = var10.rawDescription;
            var12 = undefined;
            _fun0003_ip = 1404; continue _fun0003;
 1008:
            var10 = var6.embeds;
            var10 = var10[var11];
            var13 = var10.rawTitle;
            var12 = undefined;
            _fun0003_ip = 1404; continue _fun0003;
 1031:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 12;
            var11 = var16[var10];
            var11 = var14.bind(var5)(var11);
            var17 = var11.intl;
            var15 = var17.formatToPlainString;
            var10 = var16[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.fnO3hI;
            var10 = {};
            var18 = var6.embeds;
            var18 = var18.length;
            var10['count'] = var18;
            var13 = var15.bind(var17)(var11, var10);
            var10 = 20;
            var10 = var16[var10];
            var10 = var14.bind(var5)(var10);
            var14 = var10.MusicIcon;
            var10 = new Array(2);
            var10[0] = var14;
            var15 = _closure1_slot1;
            var14 = 21;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var10[1] = var14;
            var12 = var10;
            _fun0003_ip = 1404; continue _fun0003;
 1158:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 12;
            var11 = var16[var10];
            var11 = var14.bind(var5)(var11);
            var17 = var11.intl;
            var15 = var17.formatToPlainString;
            var10 = var16[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.SJ6pPT;
            var10 = {};
            var18 = var6.embeds;
            var18 = var18.length;
            var10['count'] = var18;
            var13 = var15.bind(var17)(var11, var10);
            var10 = 18;
            var10 = var16[var10];
            var10 = var14.bind(var5)(var10);
            var14 = var10.VideoIcon;
            var10 = new Array(2);
            var10[0] = var14;
            var15 = _closure1_slot1;
            var14 = 19;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var10[1] = var14;
            var12 = var10;
            _fun0003_ip = 1404; continue _fun0003;
 1282:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 12;
            var11 = var16[var10];
            var11 = var14.bind(var5)(var11);
            var17 = var11.intl;
            var15 = var17.formatToPlainString;
            var10 = var16[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.h4pFfX;
            var10 = {};
            var18 = var6.embeds;
            var18 = var18.length;
            var10['count'] = var18;
            var13 = var15.bind(var17)(var11, var10);
            var10 = 16;
            var10 = var16[var10];
            var10 = var14.bind(var5)(var10);
            var14 = var10.ImageIcon;
            var10 = new Array(2);
            var10[0] = var14;
            var15 = _closure1_slot1;
            var14 = 17;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var10[1] = var14;
            var12 = var10;
 1404:
            var11 = _closure1_slot15;
            var10 = {};
            var10['username'] = var8;
            var10['content'] = var13;
            var10['icon'] = var12;
            var10 = var11.bind(var5)(var10, var4);
            return var10;
 1430:
            var12 = var6.attachments;
            var11 = var12.every;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
            if(!var11) { _fun0003_ip = 1484; continue _fun0003 }
 1460:
            var14 = var6.attachments;
            var13 = var14.every;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
 1484:
            var10 = !var12;
            if(!var10) { _fun0003_ip = 1493; continue _fun0003 }
 1490:
            var10 = !var11;
 1493:
            if(!var10) { _fun0003_ip = 1520; continue _fun0003 }
 1496:
            var14 = var6.attachments;
            var13 = var14.every;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
 1520:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 12;
            var14 = var15[var1];
            var14 = var13.bind(var5)(var14);
            var16 = var14.intl;
            var14 = var16.formatToPlainString;
            var1 = var15[var1];
            var1 = var13.bind(var5)(var1);
            var1 = var1.t;
            if(var12) { _fun0003_ip = 1825; continue _fun0003 }
 1570:
            if(var11) { _fun0003_ip = 1745; continue _fun0003 }
 1576:
            if(var10) { _fun0003_ip = 1662; continue _fun0003 }
 1579:
            var11 = var1.89ihS0;
            var10 = {};
            var12 = var6.attachments;
            var12 = var12.length;
            var10['count'] = var12;
            var10 = var14.bind(var16)(var11, var10);
            var11 = 22;
            var11 = var15[var11];
            var11 = var13.bind(var5)(var11);
            var12 = var11.AttachmentIcon;
            var11 = new Array(2);
            var11[0] = var12;
            var17 = _closure1_slot1;
            var12 = 23;
            var12 = var15[var12];
            var12 = var17.bind(var5)(var12);
            var11[1] = var12;
            var12 = var10;
            _fun0003_ip = 1903; continue _fun0003;
 1662:
            var17 = var1.fnO3hI;
            var10 = {};
            var18 = var6.attachments;
            var18 = var18.length;
            var10['count'] = var18;
            var12 = var14.bind(var16)(var17, var10);
            var10 = 20;
            var10 = var15[var10];
            var10 = var13.bind(var5)(var10);
            var18 = var10.MusicIcon;
            var10 = new Array(2);
            var10[0] = var18;
            var19 = _closure1_slot1;
            var18 = 21;
            var18 = var15[var18];
            var18 = var19.bind(var5)(var18);
            var10[1] = var18;
            var11 = var10;
            _fun0003_ip = 1903; continue _fun0003;
 1745:
            var17 = var1.SJ6pPT;
            var10 = {};
            var18 = var6.attachments;
            var18 = var18.length;
            var10['count'] = var18;
            var12 = var14.bind(var16)(var17, var10);
            var10 = 18;
            var10 = var15[var10];
            var10 = var13.bind(var5)(var10);
            var18 = var10.VideoIcon;
            var10 = new Array(2);
            var10[0] = var18;
            var19 = _closure1_slot1;
            var18 = 19;
            var18 = var15[var18];
            var18 = var19.bind(var5)(var18);
            var10[1] = var18;
            var11 = var10;
            _fun0003_ip = 1903; continue _fun0003;
 1825:
            var10 = var1.h4pFfX;
            var1 = {};
            var17 = var6.attachments;
            var17 = var17.length;
            var1['count'] = var17;
            var12 = var14.bind(var16)(var10, var1);
            var1 = 16;
            var1 = var15[var1];
            var1 = var13.bind(var5)(var1);
            var13 = var1.ImageIcon;
            var1 = new Array(2);
            var1[0] = var13;
            var14 = _closure1_slot1;
            var13 = 17;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var1[1] = var13;
            var11 = var1;
 1903:
            var10 = _closure1_slot15;
            var1 = {};
            var1['username'] = var8;
            var1['content'] = var12;
            var1['icon'] = var11;
            var1 = var10.bind(var5)(var1, var4);
            return var1;
 1929:
            var10 = _closure1_slot15;
            var1 = {};
            var1['username'] = var8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
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
 2006:
            var1 = var6.embeds;
            var10 = var1.length;
            var1 = 1;
            if(!(var1 === var10)) { _fun0003_ip = 2068; continue _fun0003 }
 2024:
            var1 = var6.embeds;
            var1 = var1[var7];
            var10 = var1.url;
            var1 = var6.content;
            if(!(var10 === var1)) { _fun0003_ip = 2068; continue _fun0003 }
 2048:
            var1 = var6.embeds;
            var1 = var1[var7];
            var1 = var1.rawTitle;
            if(!(var3 == var1)) { _fun0003_ip = 2090; continue _fun0003 }
 2068:
            var3 = _closure1_slot15;
            var1 = {};
            var1['username'] = var8;
            var1['content'] = var9;
            var1 = var3.bind(var5)(var1, var4);
            _fun0003_ip = 2126; continue _fun0003;
 2090:
            var3 = _closure1_slot15;
            var2 = {};
            var2['username'] = var8;
            var6 = var6.embeds;
            var6 = var6[var7];
            var6 = var6.rawTitle;
            var2['content'] = var6;
            var1 = var3.bind(var5)(var2, var4);
 2126:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function DefaultNative(arg1) {
        var1 = arg1;
        var8 = var1.message;
        var2 = var1.lineClamp;
        var _closure2_slot0 = var2;
        var6 = var1.messageSizeCacheRef;
        var5 = var1.maxHeight;
        var3 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 29;
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
        var11 = _closure1_slot4;
        var7 = var11.useMemo;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var12;
        var3[2] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 30;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var7 = var2;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = var1.setOptions;
            var2 = {'renderEmbeds': null, 'inlineEmbedMedia': null, 'inlineAttachmentMedia': null, 'renderReactions': false, 'renderShortcuts': false, 'animateEmoji': false, 'gifAutoPlay': false, 'renderReplies': false, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInviteEmbed': false, 'renderThreadEmbeds': false, 'renderForumPostActions': false, 'ignoreMentioned': true, 'enableSwipeActions': false, 'renderExecutedCommands': false, 'useAlternateEmbedColors': true};
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
        var3 = _closure1_slot11;
        var2 = _closure1_slot1;
        var1 = 31;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'pointerEvents': 'none', 'horizontalOffset': 0};
        var9 = function modifyRow(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
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
    var _closure1_slot19 = var1;
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
            var2 = 33;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStores;
            var7 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot8;
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
 91:
            var3 = _closure1_slot16;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 12;
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
            var9 = _closure1_slot14;
            var2['usernameHook'] = var9;
            var12 = _closure1_slot1;
            var11 = 34;
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
    var _closure1_slot20 = var1;
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
            var3 = 33;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot8;
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
            if(!var3) { _fun0009_ip = 307; continue _fun0009 }
 91:
            var3 = _closure1_slot16;
            var2 = var2.author;
            if(!(var2 !== var16)) { _fun0009_ip = 230; continue _fun0009 }
 108:
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 12;
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
            var9 = _closure1_slot14;
            var2['usernameHook'] = var9;
            var14 = _closure1_slot1;
            var13 = 34;
            var13 = var15[var13];
            var15 = var14.bind(var4)(var13);
            var14 = var15.getName;
            var13 = var12.guild_id;
            var12 = var12.id;
            var12 = var14.bind(var15)(var13, var12, var16);
            var2['otherUsername'] = var12;
            var2['otherUsernameHook'] = var9;
            var2 = var7.bind(var8)(var6, var2);
            _fun0009_ip = 301; continue _fun0009;
 230:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 12;
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
            var10 = _closure1_slot14;
            var6['usernameHook'] = var10;
            var2 = var8.bind(var9)(var7, var6);
 301:
            var1 = var3.bind(var4)(var2, var5);
 307:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function ChannelNameChange(arg1) {
        var4 = arg1;
        var8 = var4.message;
        var10 = var4.username;
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 12;
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
        var9 = _closure1_slot14;
        var1['usernameHook'] = var9;
        var8 = var8.content;
        var1['channelName'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ChannelIconChange(arg1) {
        var4 = arg1;
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
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
        var8 = _closure1_slot14;
        var1['usernameHook'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function ChannelPinnedMessage(arg1) {
        var4 = arg1;
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
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
        var8 = _closure1_slot14;
        var1['usernameHook'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function UserJoined(arg1) {
        var4 = arg1;
        var9 = var4.message;
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 12;
        var1 = var10[var1];
        var2 = undefined;
        var1 = var5.bind(var2)(var1);
        var7 = var1.intl;
        var6 = var7.format;
        var5 = _closure1_slot1;
        var1 = 35;
        var1 = var10[var1];
        var10 = var5.bind(var2)(var1);
        var5 = var10.getSystemMessageUserJoin;
        var1 = var9.id;
        var5 = var5.bind(var10)(var1);
        var1 = {};
        var9 = var9.nick;
        var1['username'] = var9;
        var8 = _closure1_slot14;
        var1['usernameHook'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function ThreadCreated(arg1) {
        var4 = arg1;
        var9 = var4.message;
        var10 = var4.username;
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 12;
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
        var8 = _closure1_slot14;
        var1['actorHook'] = var8;
        var9 = var9.content;
        var1['threadName'] = var9;
        var1['threadOnClick'] = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function PremiumTrialShare(arg1) {
        var4 = arg1;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 36;
        var2 = var9[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.getMessageAuthor;
        var2 = var4.message;
        var8 = var6.bind(var7)(var2);
        var2 = _closure1_slot16;
        var1 = 12;
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
    var _closure1_slot27 = var1;
    var1 = function HiddenMessage(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var7 = arg1;
            var2 = var7.message;
            var4 = _closure1_slot7;
            var3 = var4.isBlocked;
            var2 = var2.author;
            var2 = var2.id;
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center'};
            var2['style'] = var6;
            var6 = _closure1_slot16;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
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
    var _closure1_slot28 = var1;
    var1 = function getMessageComponentType(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 37;
            var3 = var1[var6];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.DEFAULT;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 47:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANGELOG;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 83:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.REPLY;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 119:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHAT_INPUT_COMMAND;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 155:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CONTEXT_MENU_COMMAND;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 191:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.POLL_RESULT;
            if(!(var3 !== var4)) { _fun0011_ip = 595; continue _fun0011 }
 227:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.RECIPIENT_ADD;
            if(!(var3 !== var4)) { _fun0011_ip = 589; continue _fun0011 }
 263:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.RECIPIENT_REMOVE;
            if(!(var3 !== var4)) { _fun0011_ip = 583; continue _fun0011 }
 299:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CALL;
            if(!(var3 !== var4)) { _fun0011_ip = 577; continue _fun0011 }
 335:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var4)) { _fun0011_ip = 571; continue _fun0011 }
 371:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANNEL_ICON_CHANGE;
            if(!(var3 !== var4)) { _fun0011_ip = 565; continue _fun0011 }
 407:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.CHANNEL_PINNED_MESSAGE;
            if(!(var3 !== var4)) { _fun0011_ip = 559; continue _fun0011 }
 440:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.USER_JOIN;
            if(!(var3 !== var4)) { _fun0011_ip = 553; continue _fun0011 }
 473:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.THREAD_CREATED;
            if(!(var3 !== var4)) { _fun0011_ip = 547; continue _fun0011 }
 506:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.MessageTypes;
            var3 = var3.PREMIUM_REFERRAL;
            if(!(var3 !== var4)) { _fun0011_ip = 541; continue _fun0011 }
 539:
            return var1;
 541:
            var1 = _closure1_slot27;
            return var1;
 547:
            var1 = _closure1_slot26;
            return var1;
 553:
            var1 = _closure1_slot25;
            return var1;
 559:
            var1 = _closure1_slot24;
            return var1;
 565:
            var1 = _closure1_slot23;
            return var1;
 571:
            var1 = _closure1_slot22;
            return var1;
 577:
            var1 = _closure1_slot17;
            return var1;
 583:
            var1 = _closure1_slot21;
            return var1;
 589:
            var1 = _closure1_slot20;
            return var1;
 595:
            var1 = _closure1_slot13;
            var3 = var1.STREAMLINED;
            var1 = arg2;
            if(!(var1 !== var3)) { _fun0011_ip = 618; continue _fun0011 }
 612:
            var1 = _closure1_slot19;
            _fun0011_ip = 622; continue _fun0011;
 618:
            var1 = _closure1_slot18;
 622:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var5 = 0;
    var2 = var10[var5];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var4 = 1;
    var8 = var10[var4];
    var2 = native4;
    var11 = var2.bind(var1)(var8);
    var _closure1_slot4 = var11;
    var2 = 2;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.View;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.MessageFlags;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var7 = var2.jsx;
    var _closure1_slot11 = var7;
    var2 = var2.jsxs;
    var _closure1_slot12 = var2;
    var7 = {};
    var7['STREAMLINED'] = var5;
    var2 = 'STREAMLINED';
    var7[var5] = var2;
    var7['FULL'] = var4;
    var2 = 'FULL';
    var7[var4] = var2;
    var _closure1_slot13 = var7;
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
            var7 = _closure1_slot6;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            if(!(var6 !== var4)) { _fun0012_ip = 138; continue _fun0012 }
 92:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 34;
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
            var4 = 12;
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
            var4 = 33;
            var4 = var7[var4];
            var13 = var6.bind(var5)(var4);
            var8 = var13.useStateFromStores;
            var4 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = var12.author;
            var4 = var4.id;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var13)(var7, var4, var6);
            var7 = var12.type;
            if(var4) { _fun0012_ip = 297; continue _fun0012 }
 275:
            var6 = _closure1_slot29;
            var4 = _closure1_slot13;
            var4 = var4.STREAMLINED;
            var4 = var6.bind(var5)(var7, var4);
            _fun0012_ip = 301; continue _fun0012;
 297:
            var4 = _closure1_slot28;
 301:
            var8 = _closure1_slot4;
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
            if(var3) { _fun0012_ip = 387; continue _fun0012 }
 352:
            var3 = _closure1_slot11;
            var2 = {};
            var16 = var2;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var7 = 'preview';
            var6 = 'context';
            var2[var6] = var7;
            var1 = var3.bind(var5)(var4, var2);
 387:
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
            var4 = 33;
            var4 = var8[var4];
            var14 = var6.bind(var5)(var4);
            var10 = var14.useStateFromStores;
            var4 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = var12.author;
            var4 = var4.id;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot1;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var10.bind(var14)(var7, var4, var6);
            var7 = _closure1_slot1;
            var6 = 34;
            var6 = var8[var6];
            var10 = var7.bind(var5)(var6);
            var8 = var10.useName;
            var7 = var11.id;
            var6 = var12.author;
            var8 = var8.bind(var10)(var13, var7, var6);
            var6 = var12.author;
            var7 = var6.id;
            var10 = _closure1_slot6;
            var6 = var10.getId;
            var6 = var6.bind(var10)();
            var10 = var8;
            if(!(var7 === var6)) { _fun0013_ip = 271; continue _fun0013 }
 216:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 12;
            var7 = var14[var6];
            var7 = var13.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var13.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.LuZzxs;
            var10 = var7.bind(var8)(var6);
 271:
            _closure2_slot3 = var10;
            var7 = var12.type;
            if(var4) { _fun0013_ip = 305; continue _fun0013 }
 283:
            var6 = _closure1_slot29;
            var4 = _closure1_slot13;
            var4 = var4.STREAMLINED;
            var4 = var6.bind(var5)(var7, var4);
            _fun0013_ip = 309; continue _fun0013;
 305:
            var4 = _closure1_slot28;
 309:
            var8 = _closure1_slot4;
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
            var3 = _closure1_slot11;
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
            var4 = 33;
            var4 = var5[var4];
            var5 = undefined;
            var11 = var9.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = var8.author;
            var12 = var4.id;
            var4 = new Array(1);
            var4[0] = var12;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3, var4);
            var9 = var8.type;
            if(var3) { _fun0014_ip = 151; continue _fun0014 }
 129:
            var4 = _closure1_slot29;
            var3 = _closure1_slot13;
            var3 = var3.FULL;
            var4 = var4.bind(var5)(var9, var3);
            _fun0014_ip = 155; continue _fun0014;
 151:
            var4 = _closure1_slot28;
 155:
            var3 = var1 == var4;
            var1 = null;
            if(var3) { _fun0014_ip = 219; continue _fun0014 }
 164:
            var3 = _closure1_slot18;
            if(!(var4 === var3)) { _fun0014_ip = 176; continue _fun0014 }
 172:
            var4 = _closure1_slot19;
 176:
            var3 = _closure1_slot11;
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
 219:
            return var1;
        }
    };
    var2 = var8.bind(var11)(var2);
    var8 = 38;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/launchpad/native/shared/ChannelRowPreview.tsx';
    var8 = var9.bind(var10)(var8);
    var3['DefaultMessageComponentStyle'] = var7;
    var6 = function ChannelRowPreview(arg1) {
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
            var9 = _closure1_slot29;
            var4 = var8.type;
            var3 = _closure1_slot13;
            var3 = var3.FULL;
            var5 = undefined;
            var4 = var9.bind(var5)(var4, var3);
            var3 = var1 == var4;
            if(var3) { _fun0015_ip = 107; continue _fun0015 }
 77:
            var3 = _closure1_slot11;
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
    var3['ChannelRowPreview'] = var6;
    var3['PrivateChannelRowPreview'] = var5;
    var3['GuildChannelRowPreview'] = var4;
    var3['SearchChannelRowPreview'] = var2;
    return var1;
})();