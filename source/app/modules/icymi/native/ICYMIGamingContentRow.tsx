// app/modules/icymi/native/ICYMIGamingContentRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function MessageRowContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.message;
            var _closure2_slot0 = var12;
            var11 = var2.lineClamp;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 26:
            var11 = 100;
 29:
            var17 = var2.visible;
            if(!(var17 === var4)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var17 = false;
 41:
            var2 = _closure1_slot9;
            var14 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var5 = var6.bind(var4)(var2);
            var3 = var5.extractMediaSourcesFromMessage;
            var2 = 8;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var19 = var2.GRAVITY_VALID_EMBED_TYPES;
            var23 = var5;
            var22 = var12;
            var21 = var12;
            var20 = undefined;
            var6 = var23[var3](var22, var21, var20, var19, var18);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = var12.attachments;
            var7 = var2.length;
            var2 = new Array(3);
            var2[0] = var7;
            var7 = var12.content;
            var2[1] = var7;
            var7 = var12.embeds;
            var2[2] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.embeds;
                    var3 = var1.length;
                    var1 = 1;
                    var3 = var1 !== var3;
                    if(var3) { _fun0002_ip = 49; continue _fun0002 }
 28:
                    var1 = _closure2_slot0;
                    var1 = var1.attachments;
                    var4 = var1.length;
                    var1 = 0;
                    var3 = var4 > var1;
 49:
                    var1 = !var3;
                    if(var3) { _fun0002_ip = 85; continue _fun0002 }
 55:
                    var2 = _closure2_slot0;
                    var4 = var2.embeds;
                    var3 = 0;
                    var3 = var4[var3];
                    var3 = var3.url;
                    var2 = var2.content;
                    var1 = var3 === var2;
 85:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var14.messagePreview;
            var1['style'] = var7;
            var7 = !var5;
            if(!var7) { _fun0001_ip = 330; continue _fun0001 }
 200:
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 9;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.MessageRowPreview;
            var5 = {};
            var5['message'] = var12;
            var13 = false;
            var5['muted'] = var13;
            var5['lineClamp'] = var11;
            var13 = var6.length;
            var15 = 0;
            var11 = undefined;
            if(!(var15 === var13)) { _fun0001_ip = 310; continue _fun0001 }
 261:
            var13 = var12.attachments;
            var13 = var13.length;
            var13 = var13 > var15;
            var11 = undefined;
            if(!var13) { _fun0001_ip = 310; continue _fun0001 }
 281:
            var13 = var12.embeds;
            var13 = var13.length;
            var11 = undefined;
            if(!(var15 === var13)) { _fun0001_ip = 310; continue _fun0001 }
 298:
            var13 = {};
            var15 = true;
            var13['renderAttachments'] = var15;
            var11 = var13;
 310:
            var5['messageOptions'] = var11;
            var11 = 'auto';
            var5['pointerEvents'] = var11;
            var7 = var9.bind(var4)(var8, var5);
 330:
            var5 = new Array(3);
            var5[0] = var7;
            var7 = var6.length;
            var8 = 0;
            var7 = var7 > var8;
            if(!var7) { _fun0001_ip = 468; continue _fun0001 }
 352:
            var13 = _closure1_slot7;
            var11 = _closure1_slot4;
            var9 = {};
            var15 = var14.media;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = var12.content;
            var15 = var15.length;
            var15 = var8 === var15;
            if(!var15) { _fun0001_ip = 409; continue _fun0001 }
 393:
            var16 = {};
            var18 = _closure1_slot5;
            var18 = -var18;
            var16['marginTop'] = var18;
            var15 = var16;
 409:
            var14[1] = var15;
            var9['style'] = var14;
            var16 = _closure1_slot7;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 10;
            var14 = var18[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['message'] = var12;
            var14['visible'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var9['children'] = var14;
            var7 = var13.bind(var4)(var11, var9);
 468:
            var5[1] = var7;
            var6 = var6.length;
            var6 = var8 === var6;
            if(!var6) { _fun0001_ip = 499; continue _fun0001 }
 484:
            var7 = var12.embeds;
            var7 = var7.length;
            var6 = var7 > var8;
 499:
            if(!var6) { _fun0001_ip = 574; continue _fun0001 }
 502:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 9;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.NonMediaEmbedsRowPreview;
            var10 = {'message': null, 'muted': false, 'lineClamp': 3};
            var10['message'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 574:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
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
    var5 = native4;
    var1 = undefined;
    var9 = var5.bind(var1)(var8);
    var _closure1_slot3 = var9;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ICYMI_MARGIN;
    var _closure1_slot5 = var8;
    var5 = var5.MESSAGE_CONTENT_INSET;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot7 = var8;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var8 = var10.createStyles;
    var5 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = {};
            var2 = {};
            var4 = _closure1_slot5;
            var2['marginTop'] = var4;
            var4 = _closure1_slot5;
            var2['marginLeft'] = var4;
            var1['header'] = var2;
            var2 = {};
            var4 = 1;
            var2['flex'] = var4;
            var4 = _closure1_slot6;
            var2['paddingLeft'] = var4;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 5;
            var4 = var8[var7];
            var6 = undefined;
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var2['gap'] = var4;
            var4 = _closure1_slot5;
            var2['paddingBottom'] = var4;
            var1['pressable'] = var2;
            var2 = {};
            var5 = _closure1_slot0;
            var4 = 6;
            var4 = var8[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isAndroid;
            var5 = var4.bind(var5)();
            var4 = 0;
            if(!var5) { _fun0003_ip = 136; continue _fun0003 }
 130:
            var4 = -2;
 136:
            var2['marginTop'] = var4;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.md;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['gap'] = var8;
            var8 = _closure1_slot5;
            var2['paddingLeft'] = var8;
            var1['messagePreview'] = var2;
            var2 = {};
            var8 = _closure1_slot5;
            var2['marginRight'] = var8;
            var1['media'] = var2;
            var2 = {};
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var2['gap'] = var4;
            var3 = _closure1_slot5;
            var2['paddingHorizontal'] = var3;
            var1['footer'] = var2;
            var2 = {'width': 20, 'height': 20};
            var1['icon'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var10)(var5);
    var _closure1_slot9 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var17 = var2.message;
            var _closure2_slot0 = var17;
            var16 = var2.visible;
            var10 = var2.messageContext;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var2 = _closure1_slot9;
            var27 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useGetOrFetchApplication;
            var11 = null;
            var6 = var11 == var10;
            var2 = undefined;
            if(var6) { _fun0004_ip = 90; continue _fun0004 }
 84:
            var2 = var10.external_content_application_id;
 90:
            var23 = var3.bind(var4)(var2);
            _closure2_slot1 = var23;
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var2 = var17.id;
            var3 = new Array(2);
            var3[0] = var2;
            var7 = var11 == var23;
            var2 = undefined;
            if(var7) { _fun0004_ip = 135; continue _fun0004 }
 130:
            var2 = var23.id;
 135:
            var3[1] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.trackItemInteraction;
                    var3 = _closure2_slot0;
                    var6 = var3.id;
                    var5 = 'game_message';
                    var3 = 'press_header';
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var3 = _closure2_slot1;
                    var5 = null;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0005_ip = 86; continue _fun0005 }
 77:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
 86:
                    if(!(var5 != var3)) { _fun0005_ip = 178; continue _fun0005 }
 90:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 13;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 15;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 14;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var3['applicationId'] = var2;
                    var2 = 'GuildDiscoverableProfile';
                    var2 = var5.bind(var6)(var4, var2, var3);
 178:
                    return var1;
                }
            };
            var12 = var4.bind(var6)(var2, var3);
            _closure2_slot2 = var12;
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var2 = var17.id;
            var3 = new Array(3);
            var3[0] = var2;
            var2 = var17.content;
            var3[1] = var2;
            var3[2] = var12;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var3);
                    var8 = var9.trackItemInteraction;
                    var3 = _closure2_slot0;
                    var7 = var3.id;
                    var6 = 'game_message';
                    var4 = 'press_message';
                    var4 = var8.bind(var9)(var7, var6, var4);
                    var6 = var3.content;
                    var4 = var6.match;
                    var3 = /(https?:\\/\\/[^\s]+)/;
                    var4 = var4.bind(var6)(var3);
                    var3 = null;
                    if(!(var3 == var4)) { _fun0006_ip = 108; continue _fun0006 }
 98:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
                    _fun0006_ip = 172; continue _fun0006;
 108:
                    var3 = 0;
                    var6 = var4[var3];
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleClick;
                    var2 = {};
                    var2['href'] = var6;
                    var6 = true;
                    var2['trusted'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var2['messageId'] = var5;
                    var2 = var3.bind(var4)(var2);
 172:
                    return var1;
                }
            };
            var13 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var17;
            var1 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var2 = var4[var1];
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var8 = var9.trackItemInteraction;
                var5 = _closure2_slot0;
                var7 = var5.id;
                var6 = 'game_message';
                var2 = 'press_forward';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = 17;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openForwardModal;
                var2 = {};
                var2['message'] = var5;
                var5 = 'icymi-tab';
                var2['source'] = var5;
                var5 = {};
                var6 = true;
                var5['isICYMIGameContentForwarding'] = var6;
                var2['forwardOptions'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var21 = var3.bind(var4)(var1, var2);
            var2 = var11 == var23;
            var1 = null;
            if(var2) { _fun0004_ip = 1077; continue _fun0004 }
 246:
            var3 = var11 == var10;
            var2 = undefined;
            if(var3) { _fun0004_ip = 261; continue _fun0004 }
 255:
            var2 = var10.external_content_application_id;
 261:
            var2 = var11 == var2;
            var1 = null;
            if(var2) { _fun0004_ip = 1077; continue _fun0004 }
 273:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 18;
            var6 = var19[var14];
            var6 = var8.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
            var15 = var27.header;
            var6['style'] = var15;
            var24 = 19;
            var15 = var19[var24];
            var15 = var8.bind(var5)(var15);
            var25 = var15.intl;
            var20 = var25.format;
            var15 = var19[var24];
            var15 = var8.bind(var5)(var15);
            var15 = var15.t;
            var18 = var15.zbVaKi;
            var15 = {};
            var26 = var23.name;
            var15['applicationName'] = var26;
            var15 = var20.bind(var25)(var18, var15);
            var6['children'] = var15;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot7;
            var7 = 12;
            var7 = var19[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.GuildContentPost;
            var7 = {};
            var18 = _closure1_slot1;
            var15 = 20;
            var15 = var19[var15];
            var19 = var18.bind(var5)(var15);
            var18 = var19.extractTimestamp;
            var15 = var10.reference_message_id;
            if(!(var11 == var15)) { _fun0004_ip = 476; continue _fun0004 }
 471:
            var15 = var17.id;
 476:
            var15 = var18.bind(var19)(var15);
            var7['timestamp'] = var15;
            var20 = _closure1_slot7;
            var28 = _closure1_slot1;
            var19 = _closure1_slot2;
            var26 = 21;
            var15 = var19[var26];
            var18 = var28.bind(var5)(var15);
            var15 = {};
            var25 = 22;
            var25 = var19[var25];
            var29 = var28.bind(var5)(var25);
            var28 = var29.getApplicationIconSource;
            var25 = {};
            var30 = var23.id;
            var25['id'] = var30;
            var30 = var23.icon;
            var25['icon'] = var30;
            var25 = var28.bind(var29)(var25);
            var15['source'] = var25;
            var25 = _closure1_slot0;
            var26 = var19[var26];
            var26 = var25.bind(var5)(var26);
            var26 = var26.AvatarSizes;
            var26 = var26.NORMAL;
            var15['size'] = var26;
            var15 = var20.bind(var5)(var18, var15);
            var7['avatar'] = var15;
            var20 = _closure1_slot7;
            var15 = var19[var14];
            var15 = var25.bind(var5)(var15);
            var18 = var15.Text;
            var15 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var23 = var23.name;
            var15['children'] = var23;
            var15 = var20.bind(var5)(var18, var15);
            var7['title'] = var15;
            var18 = _closure1_slot7;
            var14 = var19[var14];
            var14 = var25.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-secondary'};
            var20 = var19[var24];
            var20 = var25.bind(var5)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var19 = var19[var24];
            var19 = var25.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.yNWCsL;
            var19 = var20.bind(var23)(var19);
            var14['children'] = var19;
            var14 = var18.bind(var5)(var15, var14);
            var7['subtitle'] = var14;
            var7['onHeaderPress'] = var12;
            var7['onHeaderLongPress'] = var12;
            var10 = var10.reference_message_id;
            if(!(var11 == var10)) { _fun0004_ip = 768; continue _fun0004 }
 763:
            var10 = var17.id;
 768:
            var7['id'] = var10;
            var10 = true;
            var7['disableInteractions'] = var10;
            var10 = 'game_content';
            var7['type'] = var10;
            var12 = _closure1_slot8;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 23;
            var10 = var20[var10];
            var10 = var23.bind(var5)(var10);
            var11 = var10.PressableHighlight;
            var10 = {};
            var14 = var27.pressable;
            var10['style'] = var14;
            var10['onPress'] = var13;
            var15 = _closure1_slot7;
            var14 = _closure1_slot11;
            var13 = {};
            var13['message'] = var17;
            var13['visible'] = var16;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot7;
            var15 = _closure1_slot4;
            var14 = {};
            var17 = var27.footer;
            var14['style'] = var17;
            var19 = _closure1_slot7;
            var17 = 24;
            var17 = var20[var17];
            var17 = var23.bind(var5)(var17);
            var18 = var17.Button;
            var17 = {};
            var26 = _closure1_slot7;
            var25 = _closure1_slot1;
            var22 = 25;
            var22 = var20[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var27 = var27.icon;
            var22['style'] = var27;
            var27 = 'custom';
            var22['size'] = var27;
            var22 = var26.bind(var5)(var25, var22);
            var17['icon'] = var22;
            var22 = 'tertiary';
            var17['variant'] = var22;
            var17['onPress'] = var21;
            var21 = var20[var24];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.HT2IlJ;
            var20 = var21.bind(var22)(var20);
            var17['text'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1077:
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIGamingContentRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MessageRowWrapper(arg1) {
        var1 = arg1;
        var7 = var1.message;
        var6 = var1.messageContext;
        var5 = var1.visible;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 26;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useGravityMessage;
        var7 = var2.bind(var3)(var7);
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var1['message'] = var7;
        var1['messageContext'] = var6;
        var1['visible'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['MessageRowContent'] = var2;
    return var1;
})();