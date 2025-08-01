// app/uikit-native/AttachmentPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var2 = function AttachmentIcon(arg1) {
        var1 = arg1;
        var8 = var1.fileName;
        var _closure2_slot0 = var8;
        var3 = _closure1_slot8;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var7 = _closure1_slot3;
        var5 = var7.useMemo;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 19;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var5 = var6.classifyFileName;
                var1 = _closure2_slot0;
                var3 = null;
                var8 = var3 != var1;
                var1 = '';
                if(!var8) { _fun0001_ip = 55; continue _fun0001 }
 51:
                var1 = _closure2_slot0;
 55:
                var5 = var5.bind(var6)(var1);
                var1 = _closure1_slot9;
                var1 = var1[var5];
                if(!(var3 == var1)) { _fun0001_ip = 92; continue _fun0001 }
 72:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var1 = var3.bind(var4)(var2);
 92:
                return var1;
            }
        };
        var5 = var5.bind(var7)(var2, var3);
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.attachmentFileIcon;
        var1['style'] = var6;
        var1['source'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var2;
    var1 = function FilenameText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var12 = var1.fileName;
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = /(?:\.([^.]+))?$/;
            var2 = var3.exec;
            var14 = null;
            var7 = var14 != var12;
            var5 = '';
            var1 = var5;
            if(!var7) { _fun0002_ip = 61; continue _fun0002 }
 58:
            var1 = var12;
 61:
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var14 != var12;
            if(!var7) { _fun0002_ip = 87; continue _fun0002 }
 83:
            var7 = var5 !== var12;
 87:
            if(!var7) { _fun0002_ip = 155; continue _fun0002 }
 90:
            var10 = _closure1_slot6;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 20;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'ellipsizeMode': 'middle', 'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'header-primary'};
            var13 = var9.attachmentFileName;
            var5['style'] = var13;
            var5['children'] = var12;
            var7 = var10.bind(var4)(var8, var5);
 155:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 20;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var9 = var9.attachmentFileName;
            var6['style'] = var9;
            var10 = 1;
            var12 = var14 != var11;
            var13 = 'UNKNOWN';
            var9 = var13;
            if(!var12) { _fun0002_ip = 263; continue _fun0002 }
 235:
            var12 = var11[var10];
            var12 = var14 != var12;
            var9 = var13;
            if(!var12) { _fun0002_ip = 263; continue _fun0002 }
 249:
            var11 = var11[var10];
            var10 = var11.toUpperCase;
            var9 = var10.bind(var11)();
 263:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function DefaultAttachmentPreview(arg1) {
        var1 = arg1;
        var9 = var1.fileName;
        var10 = var1.maxFileWidth;
        var8 = var1.borderRadius;
        var1 = _closure1_slot8;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var7 = var5.fileInfoAttachmentPreviewFile;
        var5 = new Array(2);
        var5[0] = var7;
        var7 = {};
        var7['maxWidth'] = var10;
        var7['borderRadius'] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var8 = _closure1_slot6;
        var7 = _closure1_slot11;
        var5 = {};
        var5['fileName'] = var9;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot6;
        var7 = _closure1_slot12;
        var6 = {};
        var6['fileName'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var5 = metroImportAll;
    var1 = undefined;
    var9 = var5.bind(var1)(var8);
    var _closure1_slot3 = var9;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Image;
    var _closure1_slot4 = var8;
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot6 = var8;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var13 = var6.bind(var1)(var5);
    var12 = var13.createStyles;
    var5 = {};
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'hidden', 'borderRadius': null, 'height': 75, 'padding': 12, 'flex': 1};
    var8 = 4;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.radii;
    var8 = var8.sm;
    var11['borderRadius'] = var8;
    var8 = 12;
    var5['fileInfoAttachmentPreviewFile'] = var11;
    var11 = 8;
    var14 = {'height': 32, 'width': 24, 'marginRight': 8};
    var5['attachmentFileIcon'] = var14;
    var14 = {'paddingRight': 4, 'paddingLeft': 4, 'maxWidth': 136};
    var5['attachmentFileName'] = var14;
    var14 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var5['videoIcon'] = var14;
    var5 = var12.bind(var13)(var5);
    var _closure1_slot8 = var5;
    var5 = {};
    var12 = 5;
    var12 = var7[var12];
    var12 = var10.bind(var1)(var12);
    var5['archive'] = var12;
    var12 = 6;
    var12 = var7[var12];
    var12 = var10.bind(var1)(var12);
    var5['acrobat'] = var12;
    var12 = 7;
    var12 = var7[var12];
    var12 = var10.bind(var1)(var12);
    var5['ae'] = var12;
    var11 = var7[var11];
    var11 = var10.bind(var1)(var11);
    var5['ai'] = var11;
    var11 = 9;
    var11 = var7[var11];
    var11 = var10.bind(var1)(var11);
    var5['audio'] = var11;
    var11 = 10;
    var11 = var7[var11];
    var11 = var10.bind(var1)(var11);
    var5['code'] = var11;
    var11 = 11;
    var11 = var7[var11];
    var11 = var10.bind(var1)(var11);
    var5['document'] = var11;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['image'] = var8;
    var8 = 13;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['photoshop'] = var8;
    var8 = 14;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['sketch'] = var8;
    var8 = 15;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['spreadsheet'] = var8;
    var8 = 16;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['unknown'] = var8;
    var8 = 17;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['video'] = var8;
    var8 = 18;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var5['webcode'] = var8;
    var _closure1_slot9 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        var5 = arg1;
        var4 = var5.uri;
        var3 = var5.width;
        var2 = var5.height;
        var1 = var5.borderRadius;
        var10 = var5.style;
        var8 = {};
        var8['uri'] = var4;
        var8['width'] = var3;
        var8['height'] = var2;
        var11 = {};
        var11['width'] = var3;
        var11['height'] = var2;
        var11['borderRadius'] = var1;
        var4 = _closure1_slot6;
        var3 = _closure1_slot5;
        var2 = {};
        var5 = new Array(3);
        var5[0] = var11;
        var5[1] = var10;
        var6 = {};
        var7 = 'hidden';
        var6['overflow'] = var7;
        var5[2] = var6;
        var2['style'] = var5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 21;
        var5 = var5[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = {};
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var5['style'] = var9;
        var5['source'] = var8;
        var5['localImageSource'] = var8;
        var5 = var7.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/AttachmentPreview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AttachmentPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var10 = var2.uri;
            var1 = var2.isImage;
            var4 = var2.isVideo;
            var9 = var2.width;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0003_ip = 35; continue _fun0003 }
 32:
            var9 = 75;
 35:
            var8 = var2.height;
            if(!(var8 === var5)) { _fun0003_ip = 47; continue _fun0003 }
 44:
            var8 = 75;
 47:
            var14 = var2.maxFileWidth;
            var15 = var2.fileName;
            var7 = var2.borderRadius;
            if(!(var7 === var5)) { _fun0003_ip = 102; continue _fun0003 }
 68:
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 4;
            var3 = var11[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.radii;
            var7 = var3.sm;
 102:
            var3 = var2.showPlayOnVideoPreview;
            if(!(var3 === var5)) { _fun0003_ip = 114; continue _fun0003 }
 112:
            var3 = false;
 114:
            var11 = var2.defaultPreview;
            if(!(var11 === var5)) { _fun0003_ip = 157; continue _fun0003 }
 124:
            var13 = _closure1_slot6;
            var12 = _closure1_slot13;
            var6 = {};
            var6['fileName'] = var15;
            var6['maxFileWidth'] = var14;
            var6['borderRadius'] = var7;
            var11 = var13.bind(var5)(var12, var6);
 157:
            var6 = var2.style;
            var12 = _closure1_slot8;
            var17 = var12.bind(var5)();
            if(var1) { _fun0003_ip = 626; continue _fun0003 }
 179:
            if(!var4) { _fun0003_ip = 217; continue _fun0003 }
 182:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 22;
            var1 = var13[var1];
            var12 = var12.bind(var5)(var1);
            var1 = var12.isAndroid;
            var1 = var1.bind(var12)();
            if(var1) { _fun0003_ip = 423; continue _fun0003 }
 217:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 22;
            var1 = var1[var13];
            var12 = var12.bind(var5)(var1);
            var1 = var12.isIOS;
            var1 = var1.bind(var12)();
            if(!var1) { _fun0003_ip = 273; continue _fun0003 }
 250:
            var12 = var10.startsWith;
            var1 = 'ph://';
            var1 = var12.bind(var10)(var1);
            if(var1) { _fun0003_ip = 423; continue _fun0003 }
 273:
            var1 = var11;
            if(!var4) { _fun0003_ip = 418; continue _fun0003 }
 282:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var12 = var12.bind(var5)(var4);
            var4 = var12.isIOS;
            var4 = var4.bind(var12)();
            var1 = var11;
            if(!var4) { _fun0003_ip = 418; continue _fun0003 }
 315:
            var12 = _closure1_slot6;
            var11 = _closure1_slot5;
            var4 = {};
            var4['style'] = var6;
            var15 = _closure1_slot6;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 24;
            var13 = var16[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.VideoComponent;
            var13 = {'style': null, 'source': null, 'muted': true, 'paused': true, 'resizeMode': 'cover'};
            var16 = {};
            var16['height'] = var8;
            var16['width'] = var9;
            var13['style'] = var16;
            var16 = {};
            var16['uri'] = var10;
            var13['source'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var4['children'] = var13;
            var1 = var12.bind(var5)(var11, var4);
 418:
            _fun0003_ip = 624; continue _fun0003;
 423:
            if(var3) { _fun0003_ip = 468; continue _fun0003 }
 426:
            var11 = _closure1_slot6;
            var4 = _closure1_slot10;
            var3 = {};
            var3['uri'] = var10;
            var3['width'] = var9;
            var3['height'] = var8;
            var3['borderRadius'] = var7;
            var3['style'] = var6;
            var3 = var11.bind(var5)(var4, var3);
            _fun0003_ip = 621; continue _fun0003;
 468:
            var12 = _closure1_slot7;
            var11 = _closure1_slot5;
            var4 = {};
            var4['style'] = var6;
            var15 = _closure1_slot6;
            var14 = _closure1_slot10;
            var13 = {};
            var13['uri'] = var10;
            var13['width'] = var9;
            var13['height'] = var8;
            var13['borderRadius'] = var7;
            var13['style'] = var6;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot6;
            var15 = _closure1_slot5;
            var14 = {};
            var17 = var17.videoIcon;
            var14['style'] = var17;
            var19 = _closure1_slot6;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 23;
            var17 = var20[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.CirclePlayIcon;
            var17 = {'size': 'md', 'color': 'white', 'secondaryColor': 'black'};
            var17 = var19.bind(var5)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var4['children'] = var13;
            var3 = var12.bind(var5)(var11, var4);
 621:
            var1 = var3;
 624:
            _fun0003_ip = 663; continue _fun0003;
 626:
            var4 = _closure1_slot6;
            var3 = _closure1_slot10;
            var2 = {};
            var2['uri'] = var10;
            var2['width'] = var9;
            var2['height'] = var8;
            var2['borderRadius'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 663:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['AttachmentIcon'] = var2;
    return var1;
})();