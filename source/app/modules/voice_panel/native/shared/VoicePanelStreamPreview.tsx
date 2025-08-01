// app/modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var10 = var4.StyleSheet;
    var9 = var4.Pressable;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var7 = var6[var4];
    var8 = var13.bind(var1)(var7);
    var7 = var8.createAnimatedComponent;
    var7 = var7.bind(var8)(var9);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var8 = var13.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Button;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 200;
    var4['duration'] = var7;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'alignItems': 'center', 'justifyContent': 'center', 'width': '100%', 'height': '100%'};
    var11 = 'center';
    var12 = 6;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['roundedCard'] = var9;
    var9 = {};
    var15 = var10.absoluteFillObject;
    var16 = var9;
    var10 = copyDataProperties(var16, var15);
    var10 = 'alignItems';
    var9[var10] = var11;
    var10 = 'justifyContent';
    var9[var10] = var11;
    var4['streamPreviewImageContainer'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'opacity': 0.5};
    var4['streamPreviewImage'] = var9;
    var9 = {'position': 'absolute', 'width': '75%', 'opacity': 0.5};
    var4['streamPreviewImagePlaceholder'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}";
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelStreamPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.mode;
            var _closure2_slot0 = var7;
            var8 = var2.stream;
            var13 = var2.disabled;
            var11 = var2.onPress;
            var14 = var2.layout;
            var2 = _closure1_slot8;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var10 = null;
            var2 = var10 == var8;
            var5 = undefined;
            if(var2) { _fun0001_ip = 85; continue _fun0001 }
 80:
            var5 = var8.guildId;
 85:
            var2 = var10 == var8;
            var3 = undefined;
            if(var2) { _fun0001_ip = 99; continue _fun0001 }
 94:
            var3 = var8.channelId;
 99:
            var9 = var10 == var8;
            var2 = undefined;
            if(var9) { _fun0001_ip = 114; continue _fun0001 }
 108:
            var2 = var8.ownerId;
 114:
            var2 = var6.bind(var4)(var5, var3, var2);
            var8 = var2.previewUrl;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 3;
            var2 = var15[var5];
            var3 = var9.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function p() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 87; continue _fun0002 }
 13:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = 1;
                    var6 = 'pip';
                    if(!(var6 === var7)) { _fun0002_ip = 71; continue _fun0002 }
 69:
                    var3 = 0;
 71:
                    var2 = _closure1_slot7;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    _fun0002_ip = 99; continue _fun0002;
 87:
                    var2 = {};
                    var3 = 1;
                    var2['opacity'] = var3;
                    var1 = var2;
 99:
                    return var1;
                }
            };
            var6 = {};
            var6['mode'] = var7;
            var7 = 8;
            var7 = var15[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.withTiming;
            var6['withTiming'] = var7;
            var7 = _closure1_slot7;
            var6['OPACITY_TIMING'] = var7;
            var1['__closure'] = var6;
            var6 = 15496474861955.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot9;
            var1['__initData'] = var6;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot4;
            var2 = _closure1_slot5;
            var1 = {};
            var1['layout'] = var14;
            var1['onPress'] = var11;
            var6 = var16.roundedCard;
            var1['style'] = var6;
            var1['disabled'] = var13;
            var6 = false;
            var1['accessible'] = var6;
            var7 = _closure1_slot3;
            var6 = _closure1_slot1;
            var5 = var15[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Image;
            var5 = {};
            var5['layout'] = var14;
            if(!(var10 == var8)) { _fun0001_ip = 327; continue _fun0001 }
 305:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 9;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            _fun0001_ip = 337; continue _fun0001;
 327:
            var17 = {};
            var17['uri'] = var8;
            var15 = var17;
 337:
            var5['source'] = var15;
            if(!(var10 == var8)) { _fun0001_ip = 353; continue _fun0001 }
 345:
            var15 = var16.streamPreviewImagePlaceholder;
            _fun0001_ip = 359; continue _fun0001;
 353:
            var15 = var16.streamPreviewImage;
 359:
            var5['style'] = var15;
            var10 = var10 != var8;
            var8 = 'contain';
            if(!var10) { _fun0001_ip = 378; continue _fun0001 }
 374:
            var8 = 'cover';
 378:
            var5['resizeMode'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot3;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 10;
            var6 = var16[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['style'] = var9;
            var6['layout'] = var14;
            var10 = _closure1_slot6;
            var9 = {};
            var9['layout'] = var14;
            var9['disabled'] = var13;
            var15 = _closure1_slot0;
            var12 = 11;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.7Xq/nZ;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var12 = 'sm';
            var9['size'] = var12;
            var12 = 'primary-overlay';
            var9['variant'] = var12;
            var9['onPress'] = var11;
            var9 = var8.bind(var4)(var10, var9);
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