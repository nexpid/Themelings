// app/modules/conversations/native/ConversationList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useState;
    var _closure1_slot4 = var7;
    var7 = var4.useRef;
    var _closure1_slot5 = var7;
    var4 = var4.useEffect;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot7 = var7;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'gap': null, 'flexGrow': 0, 'maxHeight': 600};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['scrollContent'] = var9;
    var9 = {};
    var12 = 'flex-start';
    var9['alignItems'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['paddingBottom'] = var12;
    var4['titleContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['padding'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['marginBottom'] = var10;
    var4['titleIconContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationList() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot11;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var1 = _closure1_slot5;
            var7 = null;
            var10 = var1.bind(var5)(var7);
            var _closure2_slot0 = var10;
            var2 = _closure1_slot4;
            var1 = 0;
            var3 = var2.bind(var5)(var1);
            var12 = _closure1_slot3;
            var9 = 2;
            var4 = var12.bind(var5)(var3, var9);
            var11 = var4[var1];
            var _closure2_slot1 = var11;
            var3 = 1;
            var4 = var4[var3];
            var _closure2_slot2 = var4;
            var4 = true;
            var4 = var2.bind(var5)(var4);
            var6 = var12.bind(var5)(var4, var9);
            var4 = var6[var1];
            var _closure2_slot3 = var4;
            var6 = var6[var3];
            var _closure2_slot4 = var6;
            var6 = false;
            var2 = var2.bind(var5)(var6);
            var2 = var12.bind(var5)(var2, var9);
            var1 = var2[var1];
            var _closure2_slot5 = var1;
            var2 = var2[var3];
            var _closure2_slot6 = var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useConversationContext;
            var2 = var2.bind(var3)();
            var3 = var2.keyMessage;
            var _closure2_slot7 = var3;
            var9 = var2.conversation;
            var _closure2_slot8 = var9;
            var3 = _closure1_slot6;
            var12 = function() {
                var2 = global;
                var6 = var2.setTimeout;
                var5 = undefined;
                var4 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = 1000;
                var3 = var6.bind(var5)(var4, var3);
                var _closure3_slot0 = var3;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 100;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot1 = var2;
                var1 = function() {
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var4 = _closure3_slot0;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var3 = var3.clearTimeout;
                    var2 = _closure3_slot1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var3.bind(var5)(var12, var2);
            var2 = new Array(4);
            var2[0] = var11;
            var2[1] = var9;
            var2[2] = var4;
            var2[3] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot8;
                    var3 = var2.type;
                    var2 = 'forum_thread';
                    if(!(var2 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = _closure2_slot1;
                    var7 = 0;
                    if(!(var2 > var7)) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 6:
                    var2 = _closure2_slot5;
                    var3 = global;
                    var6 = var3.Math;
                    var3 = var6.max;
                    var8 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = 500;
                    var2 = var8 - var2;
                    var5 = var3.bind(var6)(var7, var2);
                    _fun0002_ip = 9; continue _fun0002;
case 7:
                    var2 = 24;
                    var2 = var8 - var2;
                    var5 = var3.bind(var6)(var7, var2);
case 9:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 10:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var1['y'] = var5;
                    var4 = _closure2_slot5;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = var7 == var9;
            var1 = null;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot10;
            var3 = _closure1_slot7;
            var2 = {};
            var2['ref'] = var10;
            var10 = var15.scrollContent;
            var2['style'] = var10;
            var2['showsVerticalScrollIndicator'] = var6;
            var6 = var9.title;
            var10 = var7 != var6;
            if(!var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = _closure1_slot10;
            var11 = _closure1_slot8;
            var6 = {};
            var13 = var15.titleContainer;
            var6['style'] = var13;
            var16 = _closure1_slot9;
            var13 = {};
            var15 = var15.titleIconContainer;
            var13['style'] = var15;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 7;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var18 = var14.ChatIcon;
            var14 = {};
            var19 = 'sm';
            var14['size'] = var19;
            var14 = var16.bind(var5)(var18, var14);
            var13['children'] = var14;
            var14 = var16.bind(var5)(var11, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = 8;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            var17 = var9.title;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var6['children'] = var13;
            var10 = var12.bind(var5)(var11, var6);
case 13:
            var6 = new Array(2);
            var6[0] = var10;
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var9.messages;
            var9 = var10.map;
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var1.id;
                    var6 = _closure2_slot7;
                    var10 = null;
                    var6 = var10 == var6;
                    var9 = undefined;
                    if(var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var6 = _closure2_slot7;
                    var9 = var6.id;
case 17:
                    var6 = undefined;
                    if(!(var11 === var9)) { _fun0003_ip = 8; continue _fun0003 }
case 19:
                    var6 = _closure2_slot0;
case 8:
                    var2['scrollViewRef'] = var6;
                    var6 = _closure2_slot2;
                    var2['setScrollPosition'] = var6;
                    var2['message'] = var1;
                    var6 = _closure2_slot8;
                    var9 = var6.channel;
                    var2['channel'] = var9;
                    var9 = var6.type;
                    var6 = 'forum_thread';
                    var6 = var6 !== var9;
                    if(!var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var9 = _closure2_slot7;
                    var10 = var10 == var9;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var8 = _closure2_slot7;
                    var9 = var8.id;
case 22:
                    var8 = var1.id;
                    var6 = var9 === var8;
case 20:
                    var2['isKeyMessage'] = var6;
                    var6 = {};
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.spacing;
                    var7 = var7.PX_4;
                    var6['padding'] = var7;
                    var2['containerStyle'] = var6;
                    var6 = true;
                    var2['channelStyling'] = var6;
                    var2['hideAdditionalButtons'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var8);
case 15:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['ConversationList'] = var2;
    return var1;
})();