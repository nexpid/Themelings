// app/modules/media_viewer/native/portraitThumbnailHelpers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var2 = {};
    var4 = 'function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}';
    var2['code'] = var4;
    var _closure1_slot0 = var2;
    var2 = function() {
        var1 = function lerpVarWidthThumbnailScrollBounds(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var4 = var3.length;
                var1 = 0;
                if(!(var1 !== var4)) { _fun0001_ip = 156; continue _fun0001 }
 20:
                if(!(!(var2 < var1))) { _fun0001_ip = 154; continue _fun0001 }
 27:
                var4 = var3.length;
                if(!(var2 >= var4)) { _fun0001_ip = 41; continue _fun0001 }
 36:
                var2 = var3.length;
 41:
                var4 = global;
                var5 = var4.Math;
                var4 = var5.floor;
                var7 = var4.bind(var5)(var2);
                var5 = var2 - var7;
                var2 = var3.length;
                if(!(!(var7 >= var2))) { _fun0001_ip = 130; continue _fun0001 }
 73:
                var2 = var3[var7];
                var4 = var2.scrollStart;
                var2 = var3.length;
                var6 = 1;
                var8 = var2 - var6;
                var2 = var4;
                if(!(var7 < var8)) { _fun0001_ip = 116; continue _fun0001 }
 102:
                var6 = var7 + var6;
                var6 = var3[var6];
                var2 = var6.scrollStart;
 116:
                var2 = var2 - var4;
                var2 = var5 * var2;
                var2 = var4 + var2;
                return var2;
 130:
                var4 = var3.length;
                var2 = 1;
                var2 = var4 - var2;
                var2 = var3[var2];
                var2 = var2.scrollStart;
                return var2;
 154:
                return var1;
 156:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 5256874583737.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot0;
        var1['__initData'] = var2;
        return var1;
    };
    var1 = undefined;
    var2 = var2.bind(var1)();
    var5 = native7;
    var4 = 0;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/portraitThumbnailHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['lerpVarWidthThumbnailScrollBounds'] = var2;
    return var1;
})();