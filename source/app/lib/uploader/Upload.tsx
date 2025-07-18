// app/lib/uploader/Upload.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var5 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var10 = 0;
    var2 = var9[var10];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var7 = 1;
    var2 = var9[var7];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var5 = {};
    var5['REACT_NATIVE'] = var10;
    var2 = 'REACT_NATIVE';
    var5[var10] = var2;
    var5['WEB'] = var7;
    var2 = 'WEB';
    var5[var7] = var2;
    var _closure1_slot9 = var5;
    var2 = {};
    var2['FILE_ATTACHMENT'] = var10;
    var6 = 'FILE_ATTACHMENT';
    var2[var10] = var6;
    var2['IMAGE_PICKER'] = var7;
    var6 = 'IMAGE_PICKER';
    var2[var7] = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.EventEmitter;
    var6 = function(arg1) {
        var4 = function Upload(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var6 = this;
                var1 = _closure1_slot4;
                var5 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var6, var5);
                var1 = _closure1_slot7;
                var11 = var1.bind(var4)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var4)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 103:
                var1 = var5.bind(var4)(var6, var1);
                var1['item'] = var3;
                var6 = var3.platform;
                var5 = _closure1_slot9;
                var5 = var5.REACT_NATIVE;
                if(!(var6 !== var5)) { _fun0002_ip = 312; continue _fun0002 }
 138:
                var5 = var3.id;
                var6 = null;
                if(!(var6 == var5)) { _fun0002_ip = 184; continue _fun0002 }
 149:
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 6;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.uniqueId;
                var6 = 'upload';
                var5 = var7.bind(var8)(var6);
 184:
                var1['id'] = var5;
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var5 = 7;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.classifyFile;
                var5 = var3.file;
                var5 = var6.bind(var7)(var5);
                var1['classification'] = var5;
                var6 = var1.classification;
                var5 = 'image';
                var5 = var5 === var6;
                var1['isImage'] = var5;
                var6 = var1.classification;
                var5 = 'video';
                var5 = var5 === var6;
                var1['isVideo'] = var5;
                var5 = var3.file;
                var5 = var5.name;
                var1['filename'] = var5;
                var5 = var3.file;
                var5 = var5.type;
                var1['mimeType'] = var5;
                _fun0002_ip = 496; continue _fun0002;
 312:
                var5 = var3.id;
                var6 = null;
                if(!(var6 == var5)) { _fun0002_ip = 329; continue _fun0002 }
 323:
                var5 = var3.uri;
 329:
                var1['id'] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 5;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.getFile;
                var5 = {};
                var8 = var3.uri;
                var5['uri'] = var8;
                var8 = var3.filename;
                var5['overrideFilename'] = var8;
                var8 = var3.mimeType;
                var5['overrideType'] = var8;
                var5 = var6.bind(var7)(var5);
                var6 = var5.filename;
                var1['filename'] = var6;
                var6 = var5.isImage;
                var1['isImage'] = var6;
                var6 = var5.isVideo;
                var1['isVideo'] = var6;
                var5 = var5.type;
                var1['mimeType'] = var5;
                var5 = var3.origin;
                var1['origin'] = var5;
                var5 = var3.durationSecs;
                var1['durationSecs'] = var5;
                var5 = var3.waveform;
                var1['waveform'] = var5;
                var5 = var3.isRemix;
                var1['isRemix'] = var5;
 496:
                var5 = var3.isThumbnail;
                var1['isThumbnail'] = var5;
                var3 = var3.clip;
                var1['clip'] = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.v4;
                var2 = var2.bind(var3)();
                var1['uniqueId'] = var2;
                var2 = arg2;
                var1['showLargeMessageDialog'] = var2;
                var2 = false;
                var1['spoiler'] = var2;
                var2 = null;
                var1['description'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'cancel';
        var5['key'] = var1;
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'resetState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var7);
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'lib/uploader/Upload.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['UploadPlatform'] = var5;
    var4 = function isResolvedUpload(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.isVideo;
            var3 = undefined;
            var1 = var3 !== var1;
            if(!var1) { _fun0003_ip = 28; continue _fun0003 }
 18:
            var2 = var2.isImage;
            var1 = var3 !== var2;
 28:
            return var1;
        }
    };
    var3['isResolvedUpload'] = var4;
    var3['UploadOrigin'] = var2;
    return var1;
})();