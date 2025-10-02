// app/modules/icymi/native/ICYMIMessageRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function MessageRowContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var14 = var3.message;
            var _closure2_slot0 = var14;
            var2 = var3.channel;
            var _closure2_slot1 = var2;
            var12 = var3.lineClamp;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = 3;
case 2:
            var9 = var3.nested;
            if(!(var9 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = false;
case 4:
            var19 = var3.visible;
            if(!(var19 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var19 = false;
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 14;
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var7 = var8.useDestinationICYMIExperiment;
            var6 = {};
            var11 = 'ICYMIMessageRow';
            var6['location'] = var11;
            var6 = var7.bind(var8)(var6);
            var7 = var6.isNewCardDesign;
            var6 = _closure1_slot19;
            var11 = var6.bind(var4)(var7);
            var8 = _closure1_slot3;
            var7 = var8.useContext;
            var6 = 15;
            var6 = var5[var6];
            var6 = var3.bind(var4)(var6);
            var6 = var6.ICYMIContext;
            var16 = var7.bind(var8)(var6);
            var6 = 16;
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var7 = var8.extractMediaSourcesFromMessage;
            var22 = var2.guild_id;
            var2 = 17;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var21 = var2.GRAVITY_VALID_EMBED_TYPES;
            var25 = var8;
            var24 = var14;
            var23 = var14;
            var6 = var25[var7](var24, var23, var22, var21, var20);
            var2 = 18;
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
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.embeds;
                    var2 = var1.length;
                    var1 = 1;
                    var2 = var1 !== var2;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot0;
                    var1 = var1.attachments;
                    var4 = var1.length;
                    var1 = 0;
                    var2 = var4 > var1;
case 8:
                    var1 = !var2;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot0;
                    var2 = var2.embeds;
                    var5 = 0;
                    var2 = var2[var5];
                    var4 = var2.type;
                    var2 = _closure1_slot13;
                    var2 = var2.GIFV;
                    var2 = var4 === var2;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure2_slot0;
                    var4 = var3.embeds;
                    var4 = var4[var5];
                    var4 = var4.url;
                    var3 = var3.content;
                    var2 = var4 === var3;
case 12:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = var14.attachments;
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.content_type;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = var4.startsWith;
                    var2 = 'audio/';
                    var1 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var15 = var2.bind(var3)(var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var11.messagePreview;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = null;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = {};
            var16 = var16.margin;
            var9['paddingLeft'] = var16;
            var8 = var9;
case 16:
            var7[1] = var8;
            var1['style'] = var7;
            var7 = !var5;
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 19;
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
            if(!(var17 === var16)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var14.attachments;
            var16 = var16.length;
            var16 = var16 > var17;
            var12 = undefined;
            if(!var16) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var16 = var14.embeds;
            var16 = var16.length;
            var12 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 20; continue _fun0001 }
case 23:
            var16 = {};
            var17 = true;
            var16['renderAttachments'] = var17;
            var12 = var16;
case 20:
            var5['messageOptions'] = var12;
            var12 = 'none';
            if(!var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = 'auto';
case 24:
            var5['pointerEvents'] = var12;
            var7 = var9.bind(var4)(var8, var5);
case 18:
            var5 = new Array(3);
            var5[0] = var7;
            var7 = var6.length;
            var8 = 0;
            var7 = var7 > var8;
            if(!var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var15 = _closure1_slot14;
            var12 = _closure1_slot4;
            var9 = {};
            var16 = var11.media;
            var9['style'] = var16;
            var18 = _closure1_slot14;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 20;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['message'] = var14;
            var16['visible'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var9['children'] = var16;
            var7 = var15.bind(var4)(var12, var9);
case 26:
            var5[1] = var7;
            var6 = var6.length;
            var6 = var8 === var6;
            if(!var6) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = var14.embeds;
            var7 = var7.length;
            var6 = var7 > var8;
case 28:
            if(!var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var9 = _closure1_slot14;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.media;
            var7['style'] = var11;
            var12 = _closure1_slot14;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 19;
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
case 30:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var1 = function ReplyMessageContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var23 = var2.message;
            var _closure2_slot0 = var23;
            var22 = var2.channel;
            var21 = var2.guild;
            var _closure2_slot1 = var21;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var5 = undefined;
            var7 = var3.bind(var5)(var2);
            var6 = var7.useDestinationICYMIExperiment;
            var2 = {};
            var8 = 'ICYMIMessageRow';
            var2['location'] = var8;
            var2 = var6.bind(var7)(var2);
            var6 = var2.isNewCardDesign;
            var2 = _closure1_slot19;
            var10 = var2.bind(var5)(var6);
            var7 = _closure1_slot3;
            var6 = var7.useContext;
            var19 = 15;
            var2 = var4[var19];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ICYMIContext;
            var20 = var6.bind(var7)(var2);
            var2 = 18;
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
            var32 = var8.bind(var9)(var7, var6);
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
            var29 = undefined;
            if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var29 = var2.colorString;
case 32:
            if(!(var1 == var29)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var29 = _closure1_slot12;
case 34:
            var4 = _closure1_slot3;
            var3 = var4.useContext;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var19];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ICYMIContext;
            var2 = var3.bind(var4)(var2);
            var26 = var2.width;
            var2 = var1 == var32;
            var1 = null;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot15;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var10.replyPreview;
            var2['style'] = var6;
            var8 = _closure1_slot14;
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
            var9 = _closure1_slot15;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.replyInner;
            var7['style'] = var10;
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var13 = 23;
            var10 = var15[var13];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var17 = false;
            var10['animate'] = var17;
            var17 = var21.id;
            var10['guildId'] = var17;
            var10['user'] = var32;
            var13 = var15[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.SMALL;
            var10['size'] = var13;
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot15;
            var12 = _closure1_slot4;
            var11 = {};
            var17 = {};
            var24 = 4;
            var17['gap'] = var24;
            var24 = var20.inset;
            var27 = var26 - var24;
            var24 = _closure1_slot11;
            var25 = 2;
            var24 = var25 * var24;
            var27 = var27 - var24;
            var24 = _closure1_slot17;
            var24 = var25 * var24;
            var28 = _closure1_slot18;
            var24 = var27 - var24;
            var27 = 30;
            var24 = var24 - var27;
            var24 = var24 - var28;
            var24 = var24 - var25;
            var17['width'] = var24;
            var11['style'] = var17;
            var24 = _closure1_slot14;
            var14 = var15[var14];
            var14 = var16.bind(var5)(var14);
            var17 = var14.Text;
            var14 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
            var28 = {};
            var28['color'] = var29;
            var14['style'] = var28;
            var28 = 24;
            var28 = var15[var28];
            var31 = var16.bind(var5)(var28);
            var30 = var31.getName;
            var29 = var21.id;
            var28 = var22.id;
            var28 = var30.bind(var31)(var29, var28, var32);
            var14['children'] = var28;
            var17 = var24.bind(var5)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = _closure1_slot14;
            var15 = var15[var19];
            var15 = var16.bind(var5)(var15);
            var15 = var15.ICYMIContext;
            var16 = var15.Provider;
            var15 = {};
            var19 = {};
            var24 = _closure1_slot17;
            var24 = var25 * var24;
            var24 = var26 - var24;
            var26 = _closure1_slot18;
            var24 = var24 - var27;
            var24 = var24 - var26;
            var24 = var24 - var25;
            var19['width'] = var24;
            var24 = var20.margin;
            var19['margin'] = var24;
            var20 = var20.inset;
            var19['inset'] = var20;
            var15['value'] = var19;
            var20 = _closure1_slot14;
            var19 = _closure1_slot21;
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
case 36:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var5 = metroImportAll;
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
    var5 = var5.ITEM_PADDING;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot12 = var10;
    var5 = var5.MessageEmbedTypes;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot14 = var10;
    var10 = var5.jsxs;
    var _closure1_slot15 = var10;
    var5 = var5.Fragment;
    var _closure1_slot16 = var5;
    var5 = 11;
    var10 = var7[var5];
    var10 = var8.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var _closure1_slot17 = var10;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_8;
    var _closure1_slot18 = var5;
    var5 = 12;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var8 = var10.createICYMIStyles;
    var5 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var1 = {};
            var2 = {};
            var11 = 1;
            var2['flex'] = var11;
            var6 = 0;
            if(var5) { _fun0005_ip = 9; continue _fun0005 }
case 38:
            var6 = var4.inset;
case 9:
            var2['paddingLeft'] = var6;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 11;
            var7 = var12[var9];
            var8 = undefined;
            var7 = var10.bind(var8)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['gap'] = var7;
            var1['pressable'] = var2;
            var2 = {};
            var10 = _closure1_slot0;
            var7 = 13;
            var7 = var12[var7];
            var10 = var10.bind(var8)(var7);
            var7 = var10.isAndroid;
            var10 = var7.bind(var10)();
            var7 = 0;
            if(!var10) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var7 = -2;
case 39:
            var2['marginTop'] = var7;
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var10.bind(var8)(var7);
            var7 = var7.radii;
            var7 = var7.md;
            var2['borderRadius'] = var7;
            var7 = 0;
            if(!var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var10 = var10.spacing;
            var7 = var10.PX_8;
case 41:
            var2['gap'] = var7;
            var1['messagePreview'] = var2;
            var2 = {};
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var12 = var7[var9];
            var12 = var10.bind(var8)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var2['gap'] = var12;
            var12 = var4.margin;
            var2['marginHorizontal'] = var12;
            var12 = _closure1_slot17;
            var2['padding'] = var12;
            var12 = 'hidden';
            var2['overflow'] = var12;
            var2['borderWidth'] = var11;
            var11 = var7[var9];
            var11 = var10.bind(var8)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_SUBTLE;
            var2['borderColor'] = var11;
            var7 = var7[var9];
            var7 = var10.bind(var8)(var7);
            var7 = var7.radii;
            var7 = var7.lg;
            var2['borderRadius'] = var7;
            var7 = 132;
            var2['maxHeight'] = var7;
            var1['replyPreview'] = var2;
            var2 = {'flexDirection': 'row', 'gap': null, 'overflow': 'hidden'};
            var7 = _closure1_slot18;
            var2['gap'] = var7;
            var1['replyInner'] = var2;
            var2 = {};
            var7 = 0;
            if(var5) { _fun0005_ip = 17; continue _fun0005 }
case 43:
            var7 = var4.inset;
case 17:
            var2['paddingLeft'] = var7;
            var7 = var4.margin;
            var2['paddingBottom'] = var7;
            var1['afterMessage'] = var2;
            var2 = {};
            var7 = var4.margin;
            var2['marginRight'] = var7;
            var1['media'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var10 = var6[var9];
            var10 = var7.bind(var8)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var2['marginTop'] = var10;
            var10 = var4.margin;
            var2['marginBottom'] = var10;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_8;
            var2['gap'] = var6;
            var6 = var4.margin;
            var2['paddingHorizontal'] = var6;
            var3 = 0;
            if(var5) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = var4.inset;
case 44:
            var2['marginLeft'] = var3;
            var1['footer'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var10)(var5);
    var _closure1_slot19 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var10 = var2.message;
            var _closure2_slot0 = var10;
            var11 = var2.channel;
            var _closure2_slot1 = var11;
            var12 = var2.guild;
            var _closure2_slot2 = var12;
            var15 = var2.visible;
            var _closure2_slot3 = var15;
            var7 = var2.messageContext;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
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
            var _closure2_slot4 = var18;
            var8 = _closure1_slot3;
            var6 = var8.useEffect;
            var2 = null;
            var5 = var2 == var12;
            var3 = undefined;
            if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var3 = var12.id;
case 46:
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var10.author;
            var3 = var3.id;
            var5[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 15:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
case 48:
                    if(!(var6 != var3)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
case 51:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
case 49:
                    return var1;
                }
            };
            var3 = var6.bind(var8)(var3, var5);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 26;
            var3 = var3[var6];
            var9 = var5.bind(var4)(var3);
            var8 = var9.useICYMIMessage;
            var5 = var11.id;
            var13 = var2 == var7;
            var3 = undefined;
            if(var13) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var3 = var7.reply_message_id;
case 53:
            var17 = var8.bind(var9)(var5, var3);
            _closure2_slot5 = var17;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useICYMIMessage;
            var3 = var11.id;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var2 = var7.before_message_id;
case 55:
            var21 = var5.bind(var6)(var3, var2);
            _closure2_slot6 = var21;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 14;
            var2 = var9[var2];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useDestinationICYMIExperiment;
            var2 = {};
            var6 = 'ICYMIMessageRow';
            var2['location'] = var6;
            var3 = var3.bind(var5)(var2);
            var6 = var3.isNewCardDesign;
            var2 = var3.isNewHeaderAndInteractions;
            _closure2_slot7 = var2;
            var3 = var3.isBottomSheetInteractions;
            _closure2_slot8 = var3;
            var5 = _closure1_slot19;
            var16 = var5.bind(var4)(var6);
            _closure2_slot9 = var16;
            var19 = _closure1_slot3;
            var13 = var19.useCallback;
            var5 = var11.id;
            var8 = new Array(2);
            var8[0] = var5;
            var8[1] = var10;
            var5 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 27;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var8 = var9.itemInteracted;
                var4 = _closure2_slot0;
                var7 = var4.id;
                var6 = 'message';
                var4 = 'long_press_channel';
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = _closure1_slot0;
                var3 = 28;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var13.bind(var19)(var5, var8);
            var20 = _closure1_slot3;
            var19 = var20.useCallback;
            var13 = new Array(2);
            var13[0] = var11;
            var13[1] = var10;
            var5 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 27;
                var2 = var4[var1];
                var1 = undefined;
                var10 = var3.bind(var1)(var2);
                var9 = var10.itemInteracted;
                var5 = _closure2_slot0;
                var8 = var5.id;
                var3 = 'message';
                var2 = 'long_press_message';
                var2 = var9.bind(var10)(var8, var3, var2);
                var3 = _closure1_slot0;
                var2 = 29;
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
            var20 = var19.bind(var20)(var5, var13);
            _closure2_slot10 = var20;
            var22 = _closure1_slot3;
            var19 = var22.useCallback;
            var13 = new Array(2);
            var13[0] = var10;
            var5 = var12.id;
            var13[1] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.itemInteracted;
                    var5 = _closure2_slot0;
                    var7 = var5.id;
                    var6 = 'message';
                    var4 = 'press_comments';
                    var4 = var8.bind(var9)(var7, var6, var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 30;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.navigateToPost;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2, var1);
case 57:
                    return var1;
                }
            };
            var19 = var19.bind(var22)(var5, var13);
            _closure2_slot11 = var19;
            var5 = 31;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.useMessageConversationProps;
            var7 = var5.bind(var7)(var10);
            _closure2_slot12 = var7;
            var13 = _closure1_slot3;
            var9 = var13.useCallback;
            var22 = var11.id;
            var5 = new Array(5);
            var5[0] = var22;
            var22 = var12.id;
            var5[1] = var22;
            var22 = var10.id;
            var5[2] = var22;
            var5[3] = var3;
            var5[4] = var7;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var7 = 27;
                    var2 = var1[var7];
                    var1 = undefined;
                    var9 = var3.bind(var1)(var2);
                    var5 = var9.itemInteracted;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var3 = 'message';
                    var2 = 'press_message';
                    var2 = var5.bind(var9)(var4, var3, var2);
                    var3 = _closure2_slot8;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    if(var3) { _fun0009_ip = 59; continue _fun0009 }
case 52:
                    var3 = 30;
                    var3 = var2[var3];
                    var11 = var4.bind(var1)(var3);
                    var10 = var11.navigateToPost;
                    var3 = _closure2_slot1;
                    var9 = var3.id;
                    var3 = _closure2_slot2;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var10.bind(var11)(var9, var5, var3);
                    _fun0009_ip = 60; continue _fun0009;
case 59:
                    var3 = 32;
                    var3 = var2[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openConversation;
                    var3 = {};
                    var13 = _closure2_slot12;
                    var14 = var3;
                    var8 = copyDataProperties(var14, var13);
                    var9 = 'icymi-bottom-sheet';
                    var8 = 'renderLocation';
                    var3[var8] = var9;
                    var6 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.itemInteracted;
                    var2 = var4.bind(var5)(var3, var2);
case 60:
                    return var1;
                }
            };
            var9 = var9.bind(var13)(var3, var5);
            _closure2_slot13 = var9;
            var13 = _closure1_slot3;
            var5 = var13.useMemo;
            var3 = new Array(12);
            var3[0] = var21;
            var3[1] = var11;
            var3[2] = var12;
            var3[3] = var20;
            var3[4] = var9;
            var3[5] = var19;
            var3[6] = var2;
            var3[7] = var10;
            var3[8] = var18;
            var3[9] = var17;
            var3[10] = var16;
            var3[11] = var15;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot16;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 33;
                    var5 = var9[var1];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var7 = var5.PressableHighlight;
                    var5 = {};
                    var6 = _closure2_slot13;
                    var5['onPress'] = var6;
                    var6 = _closure2_slot10;
                    var5['onLongPress'] = var6;
                    var6 = 130;
                    var5['unstable_pressDelay'] = var6;
                    var6 = 'button';
                    var5['accessibilityRole'] = var6;
                    var12 = _closure1_slot1;
                    var6 = 34;
                    var10 = var9[var6];
                    var13 = var12.bind(var1)(var10);
                    var12 = {};
                    var10 = _closure2_slot1;
                    var12['channel'] = var10;
                    var12 = var13.bind(var1)(var12);
                    var5['accessibilityLabel'] = var12;
                    var6 = var9[var6];
                    var9 = var8.bind(var1)(var6);
                    var8 = var9.getChannelA11yHint;
                    var6 = {};
                    var6['channel'] = var10;
                    var10 = _closure2_slot4;
                    var6['muted'] = var10;
                    var6 = var8.bind(var9)(var6);
                    var5['accessibilityHint'] = var6;
                    var6 = _closure2_slot9;
                    var6 = var6.pressable;
                    var5['style'] = var6;
                    var8 = _closure2_slot6;
                    var6 = null;
                    var8 = var6 != var8;
                    var9 = null;
                    if(!var8) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                    var12 = _closure1_slot14;
                    var10 = _closure1_slot21;
                    var8 = {};
                    var13 = _closure2_slot6;
                    var8['message'] = var13;
                    var13 = _closure2_slot1;
                    var8['channel'] = var13;
                    var13 = _closure2_slot2;
                    var8['guild'] = var13;
                    var13 = _closure2_slot3;
                    var8['visible'] = var13;
                    var9 = var12.bind(var1)(var10, var8);
case 61:
                    var8 = new Array(3);
                    var8[0] = var9;
                    var12 = _closure1_slot14;
                    var10 = _closure1_slot21;
                    var9 = {};
                    var13 = _closure2_slot0;
                    var9['message'] = var13;
                    var13 = _closure2_slot1;
                    var9['channel'] = var13;
                    var13 = _closure2_slot2;
                    var9['guild'] = var13;
                    var13 = _closure2_slot3;
                    var9['visible'] = var13;
                    var9 = var12.bind(var1)(var10, var9);
                    var8[1] = var9;
                    var9 = _closure2_slot5;
                    var10 = var6 != var9;
                    var9 = null;
                    if(!var10) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot22;
                    var10 = {};
                    var15 = _closure2_slot5;
                    var10['message'] = var15;
                    var15 = _closure2_slot1;
                    var10['channel'] = var15;
                    var15 = _closure2_slot2;
                    var10['guild'] = var15;
                    var9 = var13.bind(var1)(var12, var10);
case 63:
                    var8[2] = var9;
                    var5['children'] = var8;
                    var7 = var4.bind(var1)(var7, var5);
                    var5 = new Array(3);
                    var5[0] = var7;
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var10 = _closure2_slot9;
                    var10 = var10.footer;
                    var7['style'] = var10;
                    var10 = _closure2_slot7;
                    if(var10) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var13 = _closure1_slot15;
                    var12 = _closure1_slot16;
                    var10 = {};
                    var17 = _closure1_slot14;
                    var16 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var15 = 36;
                    var15 = var20[var15];
                    var16 = var16.bind(var1)(var15);
                    var15 = {};
                    var19 = _closure2_slot0;
                    var15['message'] = var19;
                    var18 = _closure2_slot1;
                    var15['channel'] = var18;
                    var16 = var17.bind(var1)(var16, var15);
                    var15 = new Array(2);
                    var15[0] = var16;
                    var18 = _closure1_slot14;
                    var17 = _closure1_slot0;
                    var16 = 30;
                    var16 = var20[var16];
                    var16 = var17.bind(var1)(var16);
                    var17 = var16.ThreadAsComments;
                    var16 = {};
                    var20 = _closure2_slot2;
                    var16['guild'] = var20;
                    var16['parentMessage'] = var19;
                    var19 = _closure2_slot11;
                    var16['onPress'] = var19;
                    var16 = var18.bind(var1)(var17, var16);
                    var15[1] = var16;
                    var10['children'] = var15;
                    var10 = var13.bind(var1)(var12, var10);
                    _fun0010_ip = 67; continue _fun0010;
case 65:
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var11 = 35;
                    var11 = var15[var11];
                    var12 = var12.bind(var1)(var11);
                    var11 = {};
                    var15 = _closure2_slot0;
                    var11['message'] = var15;
                    var15 = _closure2_slot1;
                    var11['channel'] = var15;
                    var14 = _closure2_slot2;
                    var11['guild'] = var14;
                    var14 = 'base';
                    var11['backgroundVariant'] = var14;
                    var10 = var13.bind(var1)(var12, var11);
case 67:
                    var7['children'] = var10;
                    var7 = var9.bind(var1)(var8, var7);
                    var5[1] = var7;
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var5.bind(var13)(var1, var3);
            if(var6) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            if(var2) { _fun0006_ip = 68; continue _fun0006 }
case 70:
            var5 = _closure1_slot15;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 30;
            var2 = var17[var13];
            var2 = var15.bind(var4)(var2);
            var3 = var2.MessageContentPost;
            var2 = {};
            var2['channel'] = var11;
            var2['guild'] = var12;
            var12 = var10.author;
            var2['author'] = var12;
            var2['message'] = var10;
            var12 = var10.id;
            var2['id'] = var12;
            var12 = 'message';
            var2['type'] = var12;
            var16 = _closure1_slot1;
            var12 = 38;
            var12 = var17[var12];
            var18 = var16.bind(var4)(var12);
            var16 = var18.extractTimestamp;
            var12 = var10.id;
            var12 = var16.bind(var18)(var12);
            var2['timestamp'] = var12;
            var2['onHeaderPress'] = var9;
            var2['onHeaderLongPress'] = var8;
            var12 = new Array(2);
            var12[0] = var1;
            var16 = _closure1_slot14;
            var13 = var17[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Separator;
            var13 = {};
            var13 = var16.bind(var4)(var15, var13);
            var12[1] = var13;
            var2['children'] = var12;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 68:
            var5 = undefined;
            if(var6) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var5 = var1;
case 71:
            var3 = _closure1_slot14;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 37;
            var1 = var13[var1];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var17 = _closure1_slot0;
            var14 = 22;
            var15 = var13[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.hMFMY2;
            var14 = var15.bind(var16)(var14);
            var1['actionLabel'] = var14;
            var14 = var10.id;
            var1['id'] = var14;
            var14 = 'message';
            var1['type'] = var14;
            var11 = var11.id;
            var1['channelId'] = var11;
            var11 = 38;
            var11 = var13[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.extractTimestamp;
            var10 = var10.id;
            var10 = var11.bind(var12)(var10);
            var1['timestamp'] = var10;
            var1['onHeaderPress'] = var9;
            var1['onHeaderLongPress'] = var8;
            var1['conversationProps'] = var7;
            var6 = !var6;
            var1['shouldFeatureUser'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot20 = var5;
    var5 = 40;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIMessageRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MessageRowWrapper(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var8 = var2.message;
            var11 = var2.messageContext;
            var10 = var2.visible;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 14;
            var2 = var13[var2];
            var6 = undefined;
            var5 = var12.bind(var6)(var2);
            var4 = var5.useDestinationICYMIExperiment;
            var2 = {};
            var7 = 'ICYMIMessageRow';
            var2['location'] = var7;
            var2 = var4.bind(var5)(var2);
            var4 = var2.isBottomSheetInteractions;
            var2 = var2.isNewCardDesign;
            var5 = 26;
            var5 = var13[var5];
            var7 = var12.bind(var6)(var5);
            var5 = var7.useGravityMessage;
            var9 = var5.bind(var7)(var8);
            var _closure2_slot0 = var9;
            var5 = 18;
            var7 = var13[var5];
            var15 = var12.bind(var6)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var14.bind(var15)(var8, var7);
            var _closure2_slot1 = var8;
            var7 = var13[var5];
            var16 = var12.bind(var6)(var7);
            var15 = var16.useStateFromStores;
            var7 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
case 73:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var15.bind(var16)(var14, var7);
            var5 = var13[var5];
            var13 = var12.bind(var6)(var5);
            var12 = var13.useStateFromStores;
            var14 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var14;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var12.bind(var13)(var5, var1);
            var12 = null;
            var13 = var12 == var8;
            var1 = null;
            if(var13) { _fun0011_ip = 75; continue _fun0011 }
case 54:
            var13 = var12 == var7;
            var1 = null;
            if(var13) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var1 = null;
            if(var5) { _fun0011_ip = 75; continue _fun0011 }
case 77:
            if(!var4) { _fun0011_ip = 78; continue _fun0011 }
case 79:
            if(var2) { _fun0011_ip = 80; continue _fun0011 }
case 78:
            var5 = _closure1_slot14;
            var4 = _closure1_slot20;
            var2 = {};
            var2['message'] = var9;
            var2['channel'] = var8;
            var2['guild'] = var7;
            var2['messageContext'] = var11;
            var2['visible'] = var10;
            var2 = var5.bind(var6)(var4, var2);
            _fun0011_ip = 81; continue _fun0011;
case 80:
            var5 = _closure1_slot14;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 39;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.MessageConversationRow;
            var3 = {};
            var3['message'] = var9;
            var3['channel'] = var8;
            var3['guild'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 81:
            var1 = var2;
case 75:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MessageRowContent'] = var2;
    return var1;
})();