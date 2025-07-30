// app/modules/search/native/components/list/rows/FileGridItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getAttachmentIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 7;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isImageFile;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 168; continue _fun0001 }
 45:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isVideoFile;
            var1 = var1.bind(var3)(var4);
            var6 = _closure1_slot8;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            if(var1) { _fun0001_ip = 128; continue _fun0001 }
 88:
            var1 = 10;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var3 = var1.FileIcon;
            var1 = {'size': 'lg', 'color': 'interactive-normal'};
            var1 = var6.bind(var5)(var3, var1);
            _fun0001_ip = 166; continue _fun0001;
 128:
            var3 = 9;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.VideoIcon;
            var3 = {'size': 'lg', 'color': 'interactive-normal'};
            var1 = var6.bind(var5)(var4, var3);
 166:
            _fun0001_ip = 218; continue _fun0001;
 168:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ImageIcon;
            var2 = {'size': 'lg', 'color': 'interactive-normal'};
            var1 = var4.bind(var5)(var3, var2);
 218:
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var4 = var4.useWindowDimensions;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot6 = var8;
    var4 = var4.SearchFileTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
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
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function FileGridItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var11 = var3.data;
            var _closure2_slot0 = var11;
            var2 = var3.onPress;
            var _closure2_slot1 = var2;
            var15 = var3.imageStyle;
            var _closure2_slot2 = var15;
            var13 = var3.containerStyle;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot10;
            var8 = var3.bind(var4)();
            var _closure2_slot3 = var8;
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)();
            var12 = var3.scale;
            var _closure2_slot4 = var12;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 11;
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var9)(var5, var3);
            var _closure2_slot5 = var9;
            var10 = _closure1_slot2;
            var7 = var10.useMemo;
            var3 = var11.author;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = null;
            var14 = var3 == var9;
            var3 = undefined;
            if(var14) { _fun0002_ip = 171; continue _fun0002 }
 166:
            var3 = var9.guild_id;
 171:
            var5[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.author;
                    var2 = var3.getAvatarSource;
                    var5 = _closure2_slot5;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 43; continue _fun0003 }
 34:
                    var4 = _closure2_slot5;
                    var1 = var4.guild_id;
 43:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var7.bind(var10)(var3, var5);
            var3 = var11.attachment;
            var14 = var3.filename;
            _closure2_slot6 = var14;
            var3 = var11.attachment;
            var17 = var3.size;
            var7 = _closure1_slot2;
            var5 = var7.useCallback;
            var16 = var11.channelId;
            var3 = new Array(3);
            var3[0] = var16;
            var16 = var11.messageId;
            var3[1] = var16;
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
            var5 = var5.bind(var7)(var2, var3);
            var3 = var7.useMemo;
            var2 = new Array(5);
            var2[0] = var11;
            var2[1] = var14;
            var2[2] = var15;
            var2[3] = var12;
            var8 = var8.icon;
            var2[4] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = _closure1_slot7;
                    var1 = var1.ATTACHMENT;
                    if(!(var1 !== var2)) { _fun0004_ip = 116; continue _fun0004 }
 29:
                    var1 = _closure1_slot7;
                    var1 = var1.SOUND;
                    if(!(var1 !== var2)) { _fun0004_ip = 47; continue _fun0004 }
 43:
                    var1 = undefined;
                    return var1;
 47:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.SearchSoundMediaImage;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['containerStyle'] = var5;
                    var6 = var5.height;
                    var1['height'] = var6;
                    var5 = var5.width;
                    var1['width'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 116:
                    var1 = _closure2_slot0;
                    var1 = var1.attachment;
                    var1 = var1.width;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0004_ip = 196; continue _fun0004 }
 137:
                    var1 = _closure2_slot0;
                    var1 = var1.attachment;
                    var1 = var1.width;
                    var2 = 0;
                    if(!(var1 > var2)) { _fun0004_ip = 196; continue _fun0004 }
 158:
                    var1 = _closure2_slot0;
                    var1 = var1.attachment;
                    var1 = var1.height;
                    if(!(var3 != var1)) { _fun0004_ip = 196; continue _fun0004 }
 177:
                    var1 = _closure2_slot0;
                    var1 = var1.attachment;
                    var1 = var1.height;
                    if(!(!(var1 > var2))) { _fun0004_ip = 277; continue _fun0004 }
 196:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.SearchFileMediaImage;
                    var1 = {};
                    var5 = _closure2_slot6;
                    var1['fileName'] = var5;
                    var5 = _closure2_slot2;
                    var1['containerStyle'] = var5;
                    var6 = var5.height;
                    var1['height'] = var6;
                    var5 = var5.width;
                    var1['width'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0004_ip = 421; continue _fun0004;
 277:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.SearchAttachmentMediaImage;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['containerStyle'] = var6;
                    var9 = _closure2_slot0;
                    var10 = var9.attachment;
                    var2['attachment'] = var10;
                    var10 = var9.channelId;
                    var2['channelId'] = var10;
                    var9 = var9.author;
                    var9 = var9.id;
                    var2['authorId'] = var9;
                    var8 = _closure2_slot4;
                    var2['scale'] = var8;
                    var8 = var6.height;
                    var7 = _closure1_slot6;
                    var8 = var8 + var7;
                    var2['imageHeight'] = var8;
                    var6 = var6.width;
                    var6 = var6 + var7;
                    var2['imageWidth'] = var6;
                    var6 = function renderFallback() {
                        var4 = _closure1_slot8;
                        var3 = _closure1_slot3;
                        var2 = {};
                        var6 = _closure2_slot3;
                        var7 = var6.icon;
                        var6 = new Array(2);
                        var6[0] = var7;
                        var7 = _closure2_slot2;
                        var6[1] = var7;
                        var2['style'] = var6;
                        var6 = _closure1_slot11;
                        var1 = _closure2_slot0;
                        var1 = var1.attachment;
                        var5 = var1.filename;
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['renderFallback'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 421:
                    return var1;
                }
            };
            var16 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot9;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var12 = 13;
            var1 = var7[var12];
            var1 = var8.bind(var4)(var1);
            var2 = var1.SearchListCardContainer;
            var1 = {};
            var1['containerStyle'] = var13;
            var1['onPress'] = var5;
            var15 = _closure1_slot8;
            var5 = var7[var12];
            var5 = var8.bind(var4)(var5);
            var13 = var5.SearchListCardThumbnail;
            var5 = {};
            var5['thumbnail'] = var16;
            var13 = var15.bind(var4)(var13, var5);
            var5 = new Array(3);
            var5[0] = var13;
            var13 = _closure1_slot8;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.SearchListCardContent;
            var7 = {};
            var7['label'] = var14;
            var14 = 0;
            var15 = var17 > var14;
            var14 = undefined;
            if(!var15) { _fun0002_ip = 458; continue _fun0002 }
 427:
            var16 = _closure1_slot0;
            var18 = _closure1_slot1;
            var15 = 14;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.sizeString;
            var14 = var15.bind(var16)(var17);
 458:
            var7['subLabel'] = var14;
            var7 = var13.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/FileGridItem.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();