// app/modules/polls/PollAttachmentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _downloadPollGif() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = global;
                    var3 = var2.fetch;
                    var5 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=29);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.blob;
                    var3 = var3.bind(var2)();
                    SaveGenerator(address=49);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = function convertBlobToBase64(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.FileReader;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var6 = var4;
                        var3 = new var6[var3](var5);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var _closure5_slot1 = var3;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var5 = function(arg1, arg2) {
                            var1 = arg1;
                            var _closure6_slot0 = var1;
                            var3 = _closure5_slot1;
                            var2 = function() {
                                var1 = _closure5_slot1;
                                var3 = var1.result;
                                var2 = var3.split;
                                var1 = ',';
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.pop;
                                var3 = var1.bind(var2)();
                                var2 = _closure6_slot0;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var3);
                                return var1;
                            };
                            var3['onload'] = var2;
                            var2 = arg2;
                            var3['onerror'] = var2;
                            var2 = var3.readAsDataURL;
                            var1 = _closure5_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var6 = var2;
                        var1 = new var6[var3](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot2 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot2 = var1;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.POLL_ATTACHMENT_FOLDER;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/PollAttachmentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getFileNameFromGifUrl(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var4 = var1.decodeURIComponent;
            var3 = undefined;
            var2 = arg2;
            var4 = var4.bind(var3)(var2);
            var3 = var4.split;
            var2 = '/';
            var3 = var3.bind(var4)(var2);
            var2 = var3.pop;
            var2 = var2.bind(var3)();
            var3 = null;
            var3 = var3 != var2;
            var5 = 'temp.gif';
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = var2;
case 12:
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var2 = arg1;
            var1 = '-';
            var1 = var4.bind(var3)(var2, var1, var5);
            return var1;
        }
    };
    var3['getFileNameFromGifUrl'] = var4;
    var4 = function getFilePathForGif(arg1) {
        var2 = _closure1_slot1;
        var1 = '/';
        var2 = var2 + var1;
        var1 = arg1;
        var1 = var2 + var1;
        return var1;
    };
    var3['getFilePathForGif'] = var4;
    var2 = function downloadPollGif() {
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['downloadPollGif'] = var2;
    return var1;
})();