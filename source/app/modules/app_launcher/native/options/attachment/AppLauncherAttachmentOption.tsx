// app/modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function AttachmentPreviewAppLauncher(arg1) {
        var1 = arg1;
        var11 = var1.uri;
        var10 = var1.isImage;
        var9 = var1.isVideo;
        var1 = _closure1_slot8;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var1 = var6.selectedImage;
        var8 = var1.width;
        var7 = var1.height;
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 8;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['uri'] = var11;
        var1['isImage'] = var10;
        var1['isVideo'] = var9;
        var1['width'] = var8;
        var1['height'] = var7;
        var6 = var6.selectedImage;
        var1['style'] = var6;
        var5 = _closure1_slot9;
        var1['defaultPreview'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'width': 32, 'height': 32};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var4['imageIconWrapper'] = var10;
    var10 = {'width': 32, 'height': 32};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var4['selectedImage'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FileIcon;
    var4 = {};
    var9 = 'sm';
    var4['size'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ImageFileIcon;
    var4 = {'size': 'sm', 'color': 'interactive-text-default'};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot10 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherAttachmentOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.option;
            var _closure2_slot0 = var9;
            var2 = var3.channel;
            var _closure2_slot1 = var2;
            var13 = var3.style;
            var5 = var3.autoFocus;
            var10 = var3.hasError;
            var6 = var3.onPress;
            var3 = var3.onSelectAttachment;
            var _closure2_slot2 = var3;
            var7 = _closure1_slot8;
            var4 = undefined;
            var12 = var7.bind(var4)();
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 10;
            var7 = var14[var7];
            var15 = var11.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var5 = _closure1_slot6;
                var4 = var5.getUpload;
                var3 = _closure2_slot1;
                var3 = var3.id;
                var2 = _closure2_slot0;
                var2 = var2.name;
                var1 = _closure1_slot5;
                var1 = var1.ApplicationLauncherCommand;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var11 = var14.bind(var15)(var11, var7);
            var _closure2_slot3 = var11;
            var14 = _closure1_slot3;
            var15 = var14.useEffect;
            var2 = var2.id;
            var7 = new Array(2);
            var7[0] = var2;
            var2 = var9.name;
            var7[1] = var2;
            var2 = function() {
                var1 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.remove;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.name;
                    var1 = _closure1_slot5;
                    var1 = var1.ApplicationLauncherCommand;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                return var1;
            };
            var2 = var15.bind(var14)(var2, var7);
            var2 = var14.useRef;
            var2 = var2.bind(var14)(var3);
            var _closure2_slot4 = var2;
            var3 = var14.useEffect;
            var2 = function() {
                var2 = _closure2_slot4;
                var1 = _closure2_slot2;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var14)(var2);
            var3 = var14.useEffect;
            var7 = null;
            var2 = var7 == var11;
            var15 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var11.filename;
case 2:
            var2 = new Array(1);
            var2[0] = var15;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot3;
                    var3 = var5.filename;
case 4:
                    if(!(var4 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var4 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var4 = _closure2_slot4;
                    var3 = var4.current;
                    var2 = _closure2_slot3;
                    var2 = var2.filename;
                    var2 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var1 = var3.bind(var14)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 12;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var13;
            var1['hasError'] = var10;
            var1['option'] = var9;
            var9 = var7 != var11;
            var1['selected'] = var9;
            var10 = var7 != var11;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var11.filename;
case 9:
            var1['selectedItemName'] = var9;
            if(!(var7 != var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var11.item;
            var9 = var7.platform;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.UploadPlatform;
            var7 = var7.REACT_NATIVE;
            if(!(var9 !== var7)) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var10 = _closure1_slot7;
            var9 = _closure1_slot4;
            var7 = {};
            var12 = var12.imageIconWrapper;
            var7['style'] = var12;
            var12 = _closure1_slot10;
            var7['children'] = var12;
            var7 = var10.bind(var4)(var9, var7);
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var10 = _closure1_slot7;
            var9 = _closure1_slot11;
            var8 = {};
            var12 = var11.item;
            var12 = var12.uri;
            var8['uri'] = var12;
            var12 = var11.isImage;
            var8['isImage'] = var12;
            var11 = var11.isVideo;
            var8['isVideo'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 14:
            var1['leading'] = var7;
            var1['onPress'] = var6;
            var1['autoFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();