// app/modules/search/native/components/list/rows/FileGridItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function getAttachmentIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 7;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isImageFile;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isVideoFile;
            var1 = var1.bind(var3)(var4);
            var6 = _closure1_slot9;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 10;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var3 = var1.FileIcon;
            var1 = {'size': 'lg', 'color': 'interactive-normal'};
            var1 = var6.bind(var5)(var3, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = 9;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.VideoIcon;
            var3 = {'size': 'lg', 'color': 'interactive-normal'};
            var1 = var6.bind(var5)(var4, var3);
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ImageIcon;
            var2 = {'size': 'lg', 'color': 'interactive-normal'};
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.useWindowDimensions;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot7 = var8;
    var4 = var4.SearchFileTypes;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'padding': 0, 'backgroundColor': null, 'overflow': 'hidden'};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var11;
    var4['container'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center'};
    var4['icon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function FileGridItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var11 = var3.data;
            var _closure2_slot0 = var11;
            var2 = var3.onPress;
            var _closure2_slot1 = var2;
            var16 = var3.imageStyle;
            var _closure2_slot2 = var16;
            var13 = var3.containerStyle;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot11;
            var12 = var3.bind(var4)();
            var _closure2_slot3 = var12;
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)();
            var15 = var3.scale;
            var _closure2_slot4 = var15;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var8)(var5, var3);
            var _closure2_slot5 = var9;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var3 = var11.author;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = null;
            var10 = var3 == var9;
            var3 = undefined;
            if(var10) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var3 = var9.guild_id;
case 8:
            var5[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.author;
                    var2 = var3.getAvatarSource;
                    var5 = _closure2_slot5;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure2_slot5;
                    var1 = var4.guild_id;
case 9:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var7.bind(var8)(var3, var5);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var11.attachment;
            var14 = var5.bind(var4)(var3);
            _closure2_slot6 = var14;
            var3 = var11.attachment;
            var17 = var3.size;
            var8 = _closure1_slot3;
            var5 = var8.useCallback;
            var18 = var11.channelId;
            var3 = new Array(3);
            var3[0] = var18;
            var18 = var11.messageId;
            var3[1] = var18;
            var3[2] = var2;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = _closure2_slot0;
                var4 = var1.channelId;
                var2['channelId'] = var4;
                var1 = var1.messageId;
                var2['messageId'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var5.bind(var8)(var2, var3);
            var3 = var8.useMemo;
            var2 = new Array(5);
            var2[0] = var11;
            var2[1] = var14;
            var2[2] = var16;
            var2[3] = var15;
            var12 = var12.icon;
            var2[4] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = _closure1_slot8;
                    var1 = var1.MEDIA_ATTACHMENT;
                    if(!(var1 !== var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var1 = _closure1_slot8;
                    var1 = var1.ATTACHMENT;
                    if(!(var1 !== var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var1 = _closure1_slot8;
                    var1 = var1.AUDIO;
                    if(!(var1 !== var2)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var1 = undefined;
                    return var1;
case 15:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.SearchSoundMediaImage;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['containerStyle'] = var5;
                    var8 = var5.height;
                    var1['height'] = var8;
                    var5 = var5.width;
                    var1['width'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 13:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.SearchFileMediaImage;
                    var1 = {};
                    var5 = _closure2_slot6;
                    var1['fileName'] = var5;
                    var5 = _closure2_slot2;
                    var1['containerStyle'] = var5;
                    var8 = var5.height;
                    var1['height'] = var8;
                    var5 = var5.width;
                    var1['width'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 11:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.SearchAttachmentMediaImage;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['containerStyle'] = var5;
                    var8 = _closure2_slot0;
                    var9 = var8.attachment;
                    var1['attachment'] = var9;
                    var9 = var8.channelId;
                    var1['channelId'] = var9;
                    var8 = var8.author;
                    var8 = var8.id;
                    var1['authorId'] = var8;
                    var7 = _closure2_slot4;
                    var1['scale'] = var7;
                    var7 = var5.height;
                    var6 = _closure1_slot7;
                    var7 = var7 + var6;
                    var1['containerHeight'] = var7;
                    var5 = var5.width;
                    var5 = var5 + var6;
                    var1['containerWidth'] = var5;
                    var5 = function renderFallback() {
                        var4 = _closure1_slot9;
                        var3 = _closure1_slot4;
                        var2 = {};
                        var6 = _closure2_slot3;
                        var7 = var6.icon;
                        var6 = new Array(2);
                        var6[0] = var7;
                        var7 = _closure2_slot2;
                        var6[1] = var7;
                        var2['style'] = var6;
                        var6 = _closure1_slot12;
                        var1 = _closure2_slot0;
                        var1 = var1.attachment;
                        var5 = var1.filename;
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['renderFallback'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var16 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot10;
            var8 = _closure1_slot0;
            var12 = 14;
            var1 = var7[var12];
            var1 = var8.bind(var4)(var1);
            var2 = var1.SearchListCardContainer;
            var1 = {};
            var1['containerStyle'] = var13;
            var1['onPress'] = var5;
            var15 = _closure1_slot9;
            var5 = var7[var12];
            var5 = var8.bind(var4)(var5);
            var13 = var5.SearchListCardThumbnail;
            var5 = {};
            var5['thumbnail'] = var16;
            var13 = var15.bind(var4)(var13, var5);
            var5 = new Array(3);
            var5[0] = var13;
            var13 = _closure1_slot9;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.SearchListCardContent;
            var7 = {};
            var7['label'] = var14;
            var14 = 0;
            var15 = var17 > var14;
            var14 = undefined;
            if(!var15) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 15;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.sizeString;
            var14 = var15.bind(var16)(var17);
case 17:
            var7['subLabel'] = var14;
            var7 = var13.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SearchListCardFooter;
            var6 = {};
            var11 = var11.author;
            var6['author'] = var11;
            var6['avatarSource'] = var10;
            var6['channel'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/FileGridItem.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();