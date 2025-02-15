// app/modules/polls/PollAttachmentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = function() { // Original name: _downloadPollGif
        report = undefined;
        entity = undefined;
        tango = _closure1_slot0;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun91134: for(var _fun91134_ip = 0; ; ) switch(_fun91134_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun91134_ip = 78; continue _fun91134 }
 7:
                    mike = global;
                    zulu = mike.fetch;
                    report = undefined;
                    mike = argFoo;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=29);
 27:
                    return mike;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun91134_ip = 75; continue _fun91134 }
 35:
                    zulu = mike.blob;
                    zulu = zulu.bind(mike)();
                    SaveGenerator(address=49);
 47:
                    return zulu;
 49:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun91134_ip = 72; continue _fun91134 }
 55:
                    tango = function(argFoo) { // Original name: convertBlobToBase64
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        mike = global;
                        zulu = mike.FileReader;
                        tango = zulu.prototype;
                        tango = Object.create(tango, {constructor: {value: zulu}});
                        oscar = tango;
                        zulu = new oscar[zulu](report);
                        zulu = zulu instanceof Object ? zulu : tango;
                        var _closure5_slot1 = zulu;
                        zulu = mike.Promise;
                        mike = zulu.prototype;
                        mike = Object.create(mike, {constructor: {value: zulu}});
                        report = function(argFoo, argBar) {
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            zulu = _closure5_slot1;
                            mike = function() {
                                entity = _closure5_slot1;
                                zulu = entity.result;
                                mike = zulu.split;
                                entity = ',';
                                mike = mike.bind(zulu)(entity);
                                entity = mike.pop;
                                zulu = entity.bind(mike)();
                                mike = _closure6_slot0;
                                entity = undefined;
                                mike = mike.bind(entity)(zulu);
                                return entity;
                            };
                            zulu['onload'] = mike;
                            mike = argBar;
                            zulu['onerror'] = mike;
                            mike = zulu.readAsDataURL;
                            entity = _closure5_slot0;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        oscar = mike;
                        entity = new oscar[zulu](report, tango);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    return tango;
 72:
                    return zulu;
 75:
                    return mike;
 78:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot2 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.POLL_ATTACHMENT_FOLDER;
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/PollAttachmentUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: getFileNameFromGifUrl
        _fun91138: for(var _fun91138_ip = 0; ; ) switch(_fun91138_ip) {
 0:
            entity = global;
            tango = entity.decodeURIComponent;
            zulu = undefined;
            mike = argBar;
            tango = tango.bind(zulu)(mike);
            zulu = tango.split;
            mike = '/';
            zulu = zulu.bind(tango)(mike);
            mike = zulu.pop;
            mike = mike.bind(zulu)();
            zulu = null;
            zulu = zulu != mike;
            report = 'temp.gif';
            if(!zulu) { _fun91138_ip = 60; continue _fun91138 }
 57:
            report = mike;
 60:
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            mike = argFoo;
            entity = '-';
            entity = tango.bind(zulu)(mike, entity, report);
            return entity;
        }
    };
    zulu['getFileNameFromGifUrl'] = tango;
    tango = function(argFoo) { // Original name: getFilePathForGif
        mike = _closure1_slot1;
        entity = '/';
        mike = mike + entity;
        entity = argFoo;
        entity = mike + entity;
        return entity;
    };
    zulu['getFilePathForGif'] = tango;
    mike = function() { // Original name: downloadPollGif
        entity = undefined;
        tango = _closure1_slot2;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['downloadPollGif'] = mike;
    return entity;
})();