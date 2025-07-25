// app/modules/icymi/native/ICYMIMessageRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function MessageRowContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var14 = var3.message;
            var _closure2_slot0 = var14;
            var2 = var3.channel;
            var _closure2_slot1 = var2;
            var12 = var3.lineClamp;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 38; continue _fun0001 }
 35:
            var12 = 3;
 38:
            var9 = var3.nested;
            if(!(var9 === var4)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var9 = false;
 50:
            var19 = var3.visible;
            if(!(var19 === var4)) { _fun0001_ip = 62; continue _fun0001 }
 60:
            var19 = false;
 62:
            var3 = _closure1_slot20;
            var11 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 14;
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var7 = var8.extractMediaSourcesFromMessage;
            var22 = var2.guild_id;
            var2 = 15;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var21 = var2.GRAVITY_VALID_EMBED_TYPES;
            var25 = var8;
            var24 = var14;
            var23 = var14;
            var6 = var25[var7](var24, var23, var22, var21, var20);
            var2 = 16;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot1;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var13 = var5.bind(var7)(var3, var2);
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var2 = var14.attachments;
            var2 = var2.length;
            var3 = new Array(3);
            var3[0] = var2;
            var2 = var14.content;
            var3[1] = var2;
            var2 = var14.embeds;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.embeds;
                    var2 = var1.length;
                    var1 = 1;
                    var2 = var1 !== var2;
                    if(var2) { _fun0002_ip = 49; continue _fun0002 }
 28:
                    var1 = _closure2_slot0;
                    var1 = var1.attachments;
                    var4 = var1.length;
                    var1 = 0;
                    var2 = var4 > var1;
 49:
                    var1 = !var2;
                    if(var2) { _fun0002_ip = 127; continue _fun0002 }
 55:
                    var2 = _closure2_slot0;
                    var2 = var2.embeds;
                    var5 = 0;
                    var2 = var2[var5];
                    var4 = var2.type;
                    var2 = _closure1_slot15;
                    var2 = var2.GIFV;
                    var2 = var4 === var2;
                    if(!var2) { _fun0002_ip = 124; continue _fun0002 }
 96:
                    var3 = _closure2_slot0;
                    var4 = var3.embeds;
                    var4 = var4[var5];
                    var4 = var4.url;
                    var3 = var3.content;
                    var2 = var4 === var3;
 124:
                    var1 = var2;
 127:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = var14.attachments;
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.content_type;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 37; continue _fun0003 }
 20:
                    var3 = var4.startsWith;
                    var2 = 'audio/';
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var15 = var2.bind(var3)(var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var11.messagePreview;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = null;
            if(var9) { _fun0001_ip = 304; continue _fun0001 }
 290:
            var9 = {};
            var16 = _closure1_slot11;
            var9['paddingLeft'] = var16;
            var8 = var9;
 304:
            var7[1] = var8;
            var1['style'] = var7;
            var7 = !var5;
            if(!var7) { _fun0001_ip = 456; continue _fun0001 }
 321:
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 17;
            var5 = var16[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.MessageRowPreview;
            var5 = {};
            var5['message'] = var14;
            var5['muted'] = var13;
            var5['lineClamp'] = var12;
            var16 = var6.length;
            var17 = 0;
            var12 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 429; continue _fun0001 }
 380:
            var16 = var14.attachments;
            var16 = var16.length;
            var16 = var16 > var17;
            var12 = undefined;
            if(!var16) { _fun0001_ip = 429; continue _fun0001 }
 400:
            var16 = var14.embeds;
            var16 = var16.length;
            var12 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 429; continue _fun0001 }
 417:
            var16 = {};
            var17 = true;
            var16['renderAttachments'] = var17;
            var12 = var16;
 429:
            var5['messageOptions'] = var12;
            var12 = 'none';
            if(!var15) { _fun0001_ip = 445; continue _fun0001 }
 441:
            var12 = 'auto';
 445:
            var5['pointerEvents'] = var12;
            var7 = var9.bind(var4)(var8, var5);
 456:
            var5 = new Array(3);
            var5[0] = var7;
            var7 = var6.length;
            var8 = 0;
            var7 = var7 > var8;
            if(!var7) { _fun0001_ip = 594; continue _fun0001 }
 478:
            var15 = _closure1_slot16;
            var12 = _closure1_slot4;
            var9 = {};
            var17 = var11.media;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var14.content;
            var17 = var17.length;
            var17 = var8 === var17;
            if(!var17) { _fun0001_ip = 535; continue _fun0001 }
 519:
            var18 = {};
            var20 = _closure1_slot11;
            var20 = -var20;
            var18['marginTop'] = var20;
            var17 = var18;
 535:
            var16[1] = var17;
            var9['style'] = var16;
            var18 = _closure1_slot16;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 18;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['message'] = var14;
            var16['visible'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var9['children'] = var16;
            var7 = var15.bind(var4)(var12, var9);
 594:
            var5[1] = var7;
            var6 = var6.length;
            var6 = var8 === var6;
            if(!var6) { _fun0001_ip = 625; continue _fun0001 }
 610:
            var7 = var14.embeds;
            var7 = var7.length;
            var6 = var7 > var8;
 625:
            if(!var6) { _fun0001_ip = 713; continue _fun0001 }
 628:
            var9 = _closure1_slot16;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.media;
            var7['style'] = var11;
            var12 = _closure1_slot16;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 17;
            var10 = var15[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.NonMediaEmbedsRowPreview;
            var10 = {};
            var10['message'] = var14;
            var10['muted'] = var13;
            var13 = 3;
            var10['lineClamp'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 713:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var2;
    var1 = function ReplyMessageContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var23 = var2.message;
            var _closure2_slot0 = var23;
            var22 = var2.channel;
            var21 = var2.guild;
            var _closure2_slot1 = var21;
            var2 = _closure1_slot20;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var6 = var4[var2];
            var9 = var3.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var8.bind(var9)(var7, var6);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getMember;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var3 = var1 == var2;
            var28 = undefined;
            if(var3) { _fun0004_ip = 147; continue _fun0004 }
 141:
            var28 = var2.colorString;
 147:
            if(!(var1 == var28)) { _fun0004_ip = 186; continue _fun0004 }
 151:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.int2hex;
            var2 = _closure1_slot14;
            var28 = var3.bind(var4)(var2);
 186:
            var4 = _closure1_slot3;
            var3 = var4.useContext;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var19 = 20;
            var2 = var2[var19];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ICYMIContext;
            var2 = var3.bind(var4)(var2);
            var25 = var2.width;
            var2 = var1 == var31;
            var1 = null;
            if(var2) { _fun0004_ip = 821; continue _fun0004 }
 244:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var10.replyPreview;
            var2['style'] = var6;
            var8 = _closure1_slot16;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var14 = 21;
            var6 = var15[var14];
            var6 = var16.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var9 = {};
            var11 = 'italic';
            var9['fontStyle'] = var11;
            var6['style'] = var9;
            var9 = 22;
            var11 = var15[var9];
            var11 = var16.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var15[var9];
            var9 = var16.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.mPPce3;
            var9 = var11.bind(var12)(var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot17;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.replyInner;
            var7['style'] = var10;
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var13 = 23;
            var10 = var15[var13];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var17 = false;
            var10['animate'] = var17;
            var17 = var21.id;
            var10['guildId'] = var17;
            var10['user'] = var31;
            var13 = var15[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.SMALL;
            var10['size'] = var13;
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot17;
            var12 = _closure1_slot4;
            var11 = {};
            var17 = {};
            var20 = 4;
            var17['gap'] = var20;
            var20 = _closure1_slot13;
            var26 = var25 - var20;
            var20 = _closure1_slot12;
            var24 = 2;
            var20 = var24 * var20;
            var26 = var26 - var20;
            var20 = _closure1_slot18;
            var20 = var24 * var20;
            var27 = _closure1_slot19;
            var20 = var26 - var20;
            var26 = 30;
            var20 = var20 - var26;
            var20 = var20 - var27;
            var20 = var20 - var24;
            var17['width'] = var20;
            var11['style'] = var17;
            var20 = _closure1_slot16;
            var14 = var15[var14];
            var14 = var16.bind(var5)(var14);
            var17 = var14.Text;
            var14 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
            var27 = {};
            var27['color'] = var28;
            var14['style'] = var27;
            var27 = 24;
            var27 = var15[var27];
            var30 = var16.bind(var5)(var27);
            var29 = var30.getName;
            var28 = var21.id;
            var27 = var22.id;
            var27 = var29.bind(var30)(var28, var27, var31);
            var14['children'] = var27;
            var17 = var20.bind(var5)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = _closure1_slot16;
            var15 = var15[var19];
            var15 = var16.bind(var5)(var15);
            var15 = var15.ICYMIContext;
            var16 = var15.Provider;
            var15 = {};
            var19 = {};
            var20 = _closure1_slot18;
            var20 = var24 * var20;
            var20 = var25 - var20;
            var25 = _closure1_slot19;
            var20 = var20 - var26;
            var20 = var20 - var25;
            var20 = var20 - var24;
            var19['width'] = var20;
            var15['value'] = var19;
            var20 = _closure1_slot16;
            var19 = _closure1_slot22;
            var18 = {};
            var18['message'] = var23;
            var18['channel'] = var22;
            var18['guild'] = var21;
            var21 = true;
            var18['nested'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 821:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.ICYMI_MARGIN;
    var _closure1_slot11 = var10;
    var10 = var5.ITEM_PADDING;
    var _closure1_slot12 = var10;
    var5 = var5.MESSAGE_CONTENT_INSET;
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.DEFAULT_ROLE_COLOR;
    var _closure1_slot14 = var10;
    var5 = var5.MessageEmbedTypes;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot16 = var10;
    var10 = var5.jsxs;
    var _closure1_slot17 = var10;
    var5 = var5.Fragment;
    var5 = 11;
    var10 = var7[var5];
    var10 = var8.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var _closure1_slot18 = var10;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_8;
    var _closure1_slot19 = var5;
    var5 = 12;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var8 = var10.createStyles;
    var5 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = {};
            var2 = {};
            var8 = 1;
            var2['flex'] = var8;
            var4 = _closure1_slot13;
            var2['paddingLeft'] = var4;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 11;
            var4 = var9[var7];
            var6 = undefined;
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var2['gap'] = var4;
            var1['pressable'] = var2;
            var2 = {};
            var5 = _closure1_slot0;
            var4 = 13;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isAndroid;
            var5 = var4.bind(var5)();
            var4 = 0;
            if(!var5) { _fun0005_ip = 104; continue _fun0005 }
 98:
            var4 = -2;
 104:
            var2['marginTop'] = var4;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var9 = var4[var7];
            var9 = var5.bind(var6)(var9);
            var9 = var9.radii;
            var9 = var9.md;
            var2['borderRadius'] = var9;
            var9 = var4[var7];
            var9 = var5.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_8;
            var2['gap'] = var9;
            var1['messagePreview'] = var2;
            var2 = {};
            var9 = var4[var7];
            var9 = var5.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_8;
            var2['gap'] = var9;
            var9 = _closure1_slot11;
            var2['marginHorizontal'] = var9;
            var9 = _closure1_slot18;
            var2['padding'] = var9;
            var9 = 'hidden';
            var2['overflow'] = var9;
            var2['borderWidth'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_SUBTLE;
            var2['borderColor'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var8 = 132;
            var2['maxHeight'] = var8;
            var1['replyPreview'] = var2;
            var2 = {'flexDirection': 'row', 'gap': null, 'overflow': 'hidden'};
            var8 = _closure1_slot19;
            var2['gap'] = var8;
            var1['replyInner'] = var2;
            var2 = {};
            var8 = _closure1_slot13;
            var2['paddingLeft'] = var8;
            var8 = _closure1_slot11;
            var2['paddingBottom'] = var8;
            var1['afterMessage'] = var2;
            var2 = {};
            var8 = _closure1_slot11;
            var2['marginRight'] = var8;
            var1['media'] = var2;
            var2 = {};
            var8 = _closure1_slot11;
            var2['marginVertical'] = var8;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var2['gap'] = var4;
            var4 = _closure1_slot11;
            var2['paddingHorizontal'] = var4;
            var3 = _closure1_slot13;
            var2['marginLeft'] = var3;
            var1['footer'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var10)(var5);
    var _closure1_slot20 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var15 = var2.message;
            var _closure2_slot0 = var15;
            var19 = var2.channel;
            var _closure2_slot1 = var19;
            var16 = var2.guild;
            var _closure2_slot2 = var16;
            var20 = var2.visible;
            var8 = var2.messageContext;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot1;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var5.bind(var6)(var3, var2);
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var6 = null;
            var3 = var6 == var16;
            var2 = undefined;
            if(var3) { _fun0006_ip = 124; continue _fun0006 }
 119:
            var2 = var16.id;
 124:
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var15.author;
            var2 = var2.id;
            var3[1] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 29; continue _fun0007 }
 20:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0007_ip = 105; continue _fun0007 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 84; continue _fun0007 }
 75:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
 84:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
 105:
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 26;
            var2 = var2[var5];
            var9 = var3.bind(var4)(var2);
            var7 = var9.useICYMIMessage;
            var3 = var19.id;
            var10 = var6 == var8;
            var2 = undefined;
            if(var10) { _fun0006_ip = 206; continue _fun0006 }
 200:
            var2 = var8.reply_message_id;
 206:
            var21 = var7.bind(var9)(var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useICYMIMessage;
            var3 = var19.id;
            var9 = var6 == var8;
            var2 = undefined;
            if(var9) { _fun0006_ip = 255; continue _fun0006 }
 249:
            var2 = var8.before_message_id;
 255:
            var22 = var5.bind(var7)(var3, var2);
            var2 = _closure1_slot20;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var2 = var19.id;
            var3 = new Array(3);
            var3[0] = var2;
            var2 = var16.id;
            var3[1] = var2;
            var2 = var15.id;
            var3[2] = var2;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 27;
                var2 = var6[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var10 = var2.ICYMIAnalytics;
                var9 = var10.trackItemInteraction;
                var2 = _closure2_slot0;
                var8 = var2.id;
                var7 = 'message';
                var4 = 'press_message';
                var4 = var9.bind(var10)(var8, var7, var4);
                var4 = 28;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.navigateToPost;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var2 = var2.id;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var23 = var5.bind(var7)(var2, var3);
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var2 = var19.id;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var15;
            var2 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 27;
                var2 = var5[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var3 = _closure2_slot0;
                var7 = var3.id;
                var6 = 'message';
                var3 = 'long_press_channel';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = 29;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var5.bind(var7)(var2, var3);
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var19;
            var3[1] = var15;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 27;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var11 = var2.ICYMIAnalytics;
                var10 = var11.trackItemInteraction;
                var5 = _closure2_slot0;
                var9 = var5.id;
                var8 = 'message';
                var2 = 'long_press_message';
                var2 = var10.bind(var11)(var9, var8, var2);
                var2 = 30;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showLongPressMessageActionSheet;
                var2 = {};
                var7 = _closure2_slot1;
                var2['channel'] = var7;
                var2['message'] = var5;
                var7 = _closure1_slot10;
                var6 = var7.getUser;
                var5 = var5.author;
                var5 = var5.id;
                var5 = var6.bind(var7)(var5);
                var2['user'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var7.bind(var8)(var2, var3);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(2);
            var2[0] = var15;
            var8 = var16.id;
            var2[1] = var8;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var9 = var2.ICYMIAnalytics;
                    var8 = var9.trackItemInteraction;
                    var5 = _closure2_slot0;
                    var7 = var5.id;
                    var6 = 'message';
                    var4 = 'press_comments';
                    var4 = var8.bind(var9)(var7, var6, var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0008_ip = 123; continue _fun0008 }
 72:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 28;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.navigateToPost;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2, var1);
 123:
                    return var1;
                }
            };
            var14 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot17;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var17 = 28;
            var1 = var13[var17];
            var1 = var11.bind(var4)(var1);
            var2 = var1.MessageContentPost;
            var1 = {};
            var1['channel'] = var19;
            var1['guild'] = var16;
            var7 = var15.author;
            var1['author'] = var7;
            var1['message'] = var15;
            var7 = var15.id;
            var1['id'] = var7;
            var7 = 'message';
            var1['type'] = var7;
            var24 = _closure1_slot1;
            var7 = 31;
            var7 = var13[var7];
            var25 = var24.bind(var4)(var7);
            var8 = var25.extractTimestamp;
            var7 = var15.id;
            var7 = var8.bind(var25)(var7);
            var1['timestamp'] = var7;
            var1['onHeaderPress'] = var23;
            var1['onHeaderLongPress'] = var5;
            var8 = _closure1_slot17;
            var5 = 32;
            var5 = var13[var5];
            var5 = var11.bind(var4)(var5);
            var7 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var23;
            var5['onLongPress'] = var9;
            var9 = 130;
            var5['unstable_pressDelay'] = var9;
            var9 = 'button';
            var5['accessibilityRole'] = var9;
            var9 = 33;
            var23 = var13[var9];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var23['channel'] = var19;
            var23 = var24.bind(var4)(var23);
            var5['accessibilityLabel'] = var23;
            var9 = var13[var9];
            var13 = var11.bind(var4)(var9);
            var11 = var13.getChannelA11yHint;
            var9 = {};
            var9['channel'] = var19;
            var9['muted'] = var18;
            var9 = var11.bind(var13)(var9);
            var5['accessibilityHint'] = var9;
            var9 = var10.pressable;
            var5['style'] = var9;
            var9 = var6 != var22;
            var11 = null;
            if(!var9) { _fun0006_ip = 717; continue _fun0006 }
 684:
            var18 = _closure1_slot16;
            var13 = _closure1_slot22;
            var9 = {};
            var9['message'] = var22;
            var9['channel'] = var19;
            var9['guild'] = var16;
            var9['visible'] = var20;
            var11 = var18.bind(var4)(var13, var9);
 717:
            var9 = new Array(3);
            var9[0] = var11;
            var18 = _closure1_slot16;
            var13 = _closure1_slot22;
            var11 = {};
            var11['message'] = var15;
            var11['channel'] = var19;
            var11['guild'] = var16;
            var11['visible'] = var20;
            var11 = var18.bind(var4)(var13, var11);
            var9[1] = var11;
            var13 = var6 != var21;
            var11 = null;
            if(!var13) { _fun0006_ip = 799; continue _fun0006 }
 771:
            var20 = _closure1_slot16;
            var18 = _closure1_slot23;
            var13 = {};
            var13['message'] = var21;
            var13['channel'] = var19;
            var13['guild'] = var16;
            var11 = var20.bind(var4)(var18, var13);
 799:
            var9[2] = var11;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot17;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.footer;
            var7['style'] = var10;
            var18 = _closure1_slot16;
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var10 = 34;
            var10 = var11[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['message'] = var15;
            var10['channel'] = var19;
            var13 = var18.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot16;
            var12 = _closure1_slot0;
            var11 = var11[var17];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ThreadAsComments;
            var11 = {};
            var11['guild'] = var16;
            var11['parentMessage'] = var15;
            var11['onPress'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot21 = var5;
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIMessageRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MessageRowWrapper(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var9 = var2.message;
            var7 = var2.messageContext;
            var6 = var2.visible;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 26;
            var3 = var11[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var3 = var8.useGravityMessage;
            var10 = var3.bind(var8)(var9);
            var _closure2_slot0 = var10;
            var3 = 16;
            var8 = var11[var3];
            var13 = var4.bind(var5)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var12.bind(var13)(var9, var8);
            var _closure2_slot1 = var9;
            var8 = var11[var3];
            var14 = var4.bind(var5)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0010_ip = 39; continue _fun0010 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var12, var8);
            var3 = var11[var3];
            var11 = var4.bind(var5)(var3);
            var4 = var11.useStateFromStores;
            var12 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var11)(var3, var1);
            var4 = null;
            var11 = var4 == var9;
            var1 = null;
            if(var11) { _fun0009_ip = 249; continue _fun0009 }
 197:
            var11 = var4 == var8;
            var1 = null;
            if(var11) { _fun0009_ip = 249; continue _fun0009 }
 206:
            var1 = null;
            if(var3) { _fun0009_ip = 249; continue _fun0009 }
 211:
            var4 = _closure1_slot16;
            var3 = _closure1_slot21;
            var2 = {};
            var2['message'] = var10;
            var2['channel'] = var9;
            var2['guild'] = var8;
            var2['messageContext'] = var7;
            var2['visible'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 249:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MessageRowContent'] = var2;
    return var1;
})();