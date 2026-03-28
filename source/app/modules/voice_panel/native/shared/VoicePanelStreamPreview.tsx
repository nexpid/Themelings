// app/modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Pressable;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var8 = var11.bind(var1)(var7);
    var7 = var8.createAnimatedComponent;
    var7 = var7.bind(var8)(var9);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Button;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 200;
    var4['duration'] = var7;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'alignItems': 'center', 'justifyContent': 'center', 'width': '100%', 'height': '100%'};
    var12 = 'center';
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var9['backgroundColor'] = var13;
    var4['roundedCard'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'opacity': 0.5};
    var4['streamPreviewImage'] = var9;
    var9 = {'position': 'absolute', 'width': '75%', 'opacity': 0.5};
    var4['streamPreviewImagePlaceholder'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SCRIM;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginHorizontal'] = var13;
    var4['ownStreamTextContainer'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingVertical'] = var10;
    var4['ownStreamText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelStreamPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = var3.mode;
            var _closure2_slot0 = var6;
            var2 = var3.stream;
            var _closure2_slot1 = var2;
            var14 = var3.disabled;
            var11 = var3.onPress;
            var16 = var3.layout;
            var3 = _closure1_slot11;
            var4 = undefined;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var12 = null;
            var3 = var12 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.guildId;
case 2:
            var3 = var12 == var2;
            var5 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2.channelId;
case 4:
            var9 = var12 == var2;
            var3 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.ownerId;
case 6:
            var3 = var8.bind(var4)(var7, var5, var3);
            var8 = var3.previewUrl;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 10;
            var3 = var10[var3];
            var17 = var7.bind(var4)(var3);
            var9 = var17.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot5;
            var5[1] = var3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot1;
                    var5 = var4.ownerId;
                    var6 = _closure1_slot5;
                    var4 = var6.getId;
                    var4 = var4.bind(var6)();
                    var1 = var5 === var4;
case 8:
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot4;
                    var4 = var5.getStreamerActiveStreamMetadataForStream;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 11;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.encodeStreamKey;
                    var2 = _closure2_slot1;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    var1 = var3 == var2;
case 10:
                    return var1;
                }
            };
            var9 = var9.bind(var17)(var5, var2, var3);
            var17 = 5;
            var2 = var10[var17];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function T() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = 1;
                    var6 = 'pip';
                    if(!(var6 === var7)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = 0;
case 14:
                    var2 = _closure1_slot10;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    _fun0003_ip = 16; continue _fun0003;
case 12:
                    var2 = {};
                    var3 = 1;
                    var2['opacity'] = var3;
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var5 = {};
            var5['mode'] = var6;
            var6 = 12;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.withTiming;
            var5['withTiming'] = var6;
            var6 = _closure1_slot10;
            var5['OPACITY_TIMING'] = var6;
            var1['__closure'] = var5;
            var5 = 15496474861955.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot12;
            var1['__initData'] = var5;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = {};
            var1['layout'] = var16;
            var1['onPress'] = var11;
            var5 = var15.roundedCard;
            var1['style'] = var5;
            var5 = var14;
            if(var5) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var9;
case 17:
            var1['disabled'] = var5;
            var5 = false;
            var1['accessible'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var17];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Image;
            var5 = {};
            var5['layout'] = var16;
            if(!(var12 == var8)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 13;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var18 = {};
            var18['uri'] = var8;
            var17 = var18;
case 21:
            var5['source'] = var17;
            if(!(var12 == var8)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var17 = var15.streamPreviewImagePlaceholder;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var17 = var15.streamPreviewImage;
case 24:
            var5['style'] = var17;
            var12 = var12 != var8;
            var8 = 'contain';
            if(!var12) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = 'cover';
case 25:
            var5['resizeMode'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 14;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['style'] = var10;
            var6['layout'] = var16;
            var12 = _closure1_slot6;
            if(var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var10 = _closure1_slot9;
            var9 = {};
            var9['layout'] = var16;
            var9['disabled'] = var14;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 16;
            var16 = var19[var14];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var19[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["7Xq/nV"];
            var14 = var16.bind(var17)(var14);
            var9['text'] = var14;
            var14 = 'sm';
            var9['size'] = var14;
            var14 = 'primary-overlay';
            var9['variant'] = var14;
            var9['onPress'] = var11;
            var9 = var12.bind(var4)(var10, var9);
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var11 = _closure1_slot3;
            var10 = {};
            var14 = var15.ownStreamTextContainer;
            var10['style'] = var14;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 15;
            var13 = var19[var13];
            var13 = var18.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-sm/semibold', 'color': 'always-white'};
            var15 = var15.ownStreamText;
            var13['style'] = var15;
            var15 = 16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.ro/HN8;
            var15 = var16.bind(var17)(var15);
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 29:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['VoicePanelStreamPreview'] = var2;
    return var1;
})();