// app/modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function getSourceFromURI(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = 'number';
            var2 = typeof var3;
            var1 = var3;
            if(!(var4 !== var2)) { _fun0001_ip = 27; continue _fun0001 }
 17:
            var2 = {};
            var2['uri'] = var3;
            var1 = var2;
 27:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = 'center';
    var12 = 7;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var10['backgroundColor'] = var14;
    var4['container'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 24};
    var4['avatarContainer'] = var10;
    var10 = {'width': 80, 'height': 80, 'borderRadius': null, 'overflow': 'hidden'};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var10['borderRadius'] = var12;
    var4['avatarWrapper'] = var10;
    var10 = {'width': 80, 'height': 80};
    var4['avatar'] = var10;
    var10 = {};
    var12 = 0.2;
    var10['opacity'] = var12;
    var4['disconnectedAvatar'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'padding': 16, 'width': '100%'};
    var4['textContainer'] = var10;
    var10 = {};
    var10['textAlign'] = var11;
    var4['text'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelCTACardCallerDisconnected() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = _closure1_slot4;
            var3 = var5.useContext;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var3.bind(var5)(var1);
            var15 = var1.channelId;
            var _closure2_slot0 = var15;
            var1 = _closure1_slot10;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var15);
            var10 = null;
            var5 = var10 == var1;
            var3 = undefined;
            if(var5) { _fun0002_ip = 90; continue _fun0002 }
 84:
            var3 = var1.recipients;
 90:
            if(!(var10 == var3)) { _fun0002_ip = 98; continue _fun0002 }
 94:
            var3 = new Array(0);
 98:
            var7 = _closure1_slot3;
            var1 = 1;
            var5 = var7.bind(var4)(var3, var1);
            var3 = 0;
            var13 = var5[var3];
            var _closure2_slot1 = var13;
            var6 = _closure1_slot5;
            var5 = var6.getId;
            var14 = var5.bind(var6)();
            var _closure2_slot2 = var14;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 9;
            var6 = var5[var6];
            var11 = var8.bind(var4)(var6);
            var9 = var11.useStateFromStoresArray;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = new Array(3);
            var6[0] = var15;
            var6[1] = var14;
            var6[2] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getUser;
                    var1 = _closure2_slot2;
                    var9 = var4.bind(var5)(var1);
                    var4 = var5.getUser;
                    var1 = _closure2_slot1;
                    var6 = var4.bind(var5)(var1);
                    var4 = null;
                    var1 = var4 == var9;
                    var5 = undefined;
                    var7 = undefined;
                    if(var1) { _fun0003_ip = 68; continue _fun0003 }
 53:
                    var8 = var9.getAvatarURL;
                    var1 = 80;
                    var7 = var8.bind(var9)(var5, var1);
 68:
                    var1 = new Array(3);
                    var1[0] = var7;
                    var7 = var4 == var6;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 100; continue _fun0003 }
 85:
                    var8 = var6.getAvatarURL;
                    var7 = 80;
                    var4 = var8.bind(var6)(var5, var7);
 100:
                    var1[1] = var4;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getName;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var5, var2, var6);
                    var1[2] = var2;
                    return var1;
                }
            };
            var6 = var9.bind(var11)(var8, var2, var6);
            var2 = 3;
            var2 = var7.bind(var4)(var6, var2);
            var19 = var2[var3];
            var20 = var2[var1];
            var1 = 2;
            var18 = var2[var1];
            var3 = _closure1_slot9;
            var7 = _closure1_slot1;
            var6 = 11;
            var1 = var5[var6];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var8 = var16.container;
            var1['style'] = var8;
            var5 = var5[var6];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var8 = var16.avatarContainer;
            var5['style'] = var8;
            var9 = var10 != var19;
            if(!var9) { _fun0002_ip = 376; continue _fun0002 }
 290:
            var13 = _closure1_slot8;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = var17[var6];
            var11 = var15.bind(var4)(var8);
            var8 = {};
            var14 = var16.avatarWrapper;
            var8['style'] = var14;
            var14 = 12;
            var14 = var17[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var17 = _closure1_slot11;
            var17 = var17.bind(var4)(var19);
            var14['source'] = var17;
            var17 = var16.avatar;
            var14['style'] = var17;
            var14 = var13.bind(var4)(var15, var14);
            var8['children'] = var14;
            var9 = var13.bind(var4)(var11, var8);
 376:
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var10 != var20;
            if(!var9) { _fun0002_ip = 495; continue _fun0002 }
 391:
            var14 = _closure1_slot8;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = var19[var6];
            var13 = var17.bind(var4)(var11);
            var11 = {};
            var15 = var16.avatarWrapper;
            var11['style'] = var15;
            var15 = 12;
            var15 = var19[var15];
            var17 = var17.bind(var4)(var15);
            var15 = {};
            var19 = _closure1_slot11;
            var19 = var19.bind(var4)(var20);
            var15['source'] = var19;
            var20 = var16.avatar;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var16.disconnectedAvatar;
            var19[1] = var20;
            var15['style'] = var19;
            var15 = var14.bind(var4)(var17, var15);
            var11['children'] = var15;
            var9 = var14.bind(var4)(var13, var11);
 495:
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = var15[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = var16.textContainer;
            var6['style'] = var9;
            var14 = _closure1_slot8;
            var21 = _closure1_slot0;
            var11 = 13;
            var9 = var15[var11];
            var9 = var21.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'style': null, 'variant': 'heading-sm/semibold', 'color': 'always-white'};
            var17 = var16.text;
            var9['style'] = var17;
            var19 = 14;
            var17 = var15[var19];
            var17 = var21.bind(var4)(var17);
            var20 = var17.intl;
            var17 = var20.string;
            var15 = var15[var19];
            var15 = var21.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.WkAgPT;
            var15 = var17.bind(var20)(var15);
            var9['children'] = var15;
            var13 = var14.bind(var4)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var10 = var10 != var18;
            if(!var10) { _fun0002_ip = 782; continue _fun0002 }
 668:
            var13 = _closure1_slot8;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var15.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-xs/medium', 'color': 'always-white'};
            var16 = var16.text;
            var11['style'] = var16;
            var16 = var14[var19];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.kXrAq6;
            var14 = {};
            var14['username'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 782:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();