// app/modules/messages/SignedAttachmentLinkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun84828: for(var _fun84828_ip = 0; ; ) switch(_fun84828_ip) {
 0:
        golf = argBar;
        yankee = argBaz;
        zulu = argFred;
        options = argPlugh;
        var _closure1_slot0 = golf;
        var _closure1_slot1 = yankee;
        var _closure1_slot2 = options;
        report = function(argFoo) { // Original name: isAttachmentUrl
            _fun84829: for(var _fun84829_ip = 0; ; ) switch(_fun84829_ip) {
 0:
                entity = argFoo;
                var _closure2_slot0 = entity;
                report = _closure1_slot8;
                zulu = report.has;
                entity = entity.hostname;
                entity = zulu.bind(report)(entity);
                zulu = _closure1_slot10;
                report = global;
                oscar = report.Array;
                report = oscar.from;
                tango = _closure1_slot5;
                report = report.bind(oscar)(tango);
                tango = report.some;
                mike = function(argFoo) {
                    entity = _closure2_slot0;
                    zulu = entity.pathname;
                    mike = zulu.startsWith;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = tango.bind(report)(mike);
                if(entity) { _fun84829_ip = 82; continue _fun84829 }
 79:
                entity = zulu;
 82:
                if(!entity) { _fun84829_ip = 88; continue _fun84829 }
 85:
                entity = mike;
 88:
                return entity;
            }
        };
        var _closure1_slot11 = report;
        tango = function(argFoo) { // Original name: getSignedAttachmentExpiration
            _fun84831: for(var _fun84831_ip = 0; ; ) switch(_fun84831_ip) {
 0:
                entity = argFoo;
                zulu = entity.searchParams;
                mike = zulu.get;
                entity = 'ex';
                mike = mike.bind(zulu)(entity);
                entity = global;
                tango = entity.parseInt;
                zulu = null;
                report = zulu != mike;
                zulu = '';
                if(!report) { _fun84831_ip = 49; continue _fun84831 }
 46:
                zulu = mike;
 49:
                report = undefined;
                mike = 16;
                zulu = tango.bind(report)(zulu, mike);
                entity = entity.isNaN;
                mike = entity.bind(report)(zulu);
                entity = undefined;
                if(mike) { _fun84831_ip = 115; continue _fun84831 }
 76:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 2;
                mike = oscar[mike];
                mike = tango.bind(report)(mike);
                mike = mike.Millis;
                mike = mike.SECOND;
                entity = zulu * mike;
 115:
                return entity;
            }
        };
        var _closure1_slot12 = tango;
        entity = function(argFoo) { // Original name: shouldRefreshAttachmentUrl
            _fun84832: for(var _fun84832_ip = 0; ; ) switch(_fun84832_ip) {
 0:
                tango = _closure1_slot12;
                zulu = undefined;
                entity = argFoo;
                zulu = tango.bind(zulu)(entity);
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun84832_ip = 55; continue _fun84832 }
 26:
                tango = global;
                report = tango.Date;
                tango = report.now;
                tango = tango.bind(report)();
                mike = _closure1_slot7;
                mike = tango + mike;
                entity = zulu <= mike;
 55:
                return entity;
            }
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo) { // Original name: isAttachmentExpired
            _fun84833: for(var _fun84833_ip = 0; ; ) switch(_fun84833_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 3;
                entity = tango[entity];
                tango = undefined;
                report = zulu.bind(tango)(entity);
                zulu = report.toURLSafe;
                entity = argFoo;
                entity = entity.url;
                zulu = zulu.bind(report)(entity);
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun84833_ip = 62; continue _fun84833 }
 53:
                mike = _closure1_slot13;
                entity = mike.bind(tango)(zulu);
 62:
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: isEmbedMediaExpiredAttachment
            _fun84834: for(var _fun84834_ip = 0; ; ) switch(_fun84834_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity != mike)) { _fun84834_ip = 89; continue _fun84834 }
 9:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                tango = 3;
                tango = report[tango];
                report = undefined;
                oscar = oscar.bind(report)(tango);
                tango = oscar.toURLSafe;
                mike = mike.url;
                tango = tango.bind(oscar)(mike);
                entity = entity != tango;
                if(!entity) { _fun84834_ip = 87; continue _fun84834 }
 57:
                mike = _closure1_slot11;
                mike = mike.bind(report)(tango);
                oscar = !mike;
                mike = !oscar;
                if(oscar) { _fun84834_ip = 84; continue _fun84834 }
 75:
                zulu = _closure1_slot13;
                mike = zulu.bind(report)(tango);
 84:
                entity = mike;
 87:
                return entity;
 89:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo) { // Original name: embedHasExpiredAttachmentUrl
            _fun84835: for(var _fun84835_ip = 0; ; ) switch(_fun84835_ip) {
 0:
                mike = argFoo;
                report = _closure1_slot15;
                entity = mike.image;
                tango = undefined;
                entity = report.bind(tango)(entity);
                if(entity) { _fun84835_ip = 61; continue _fun84835 }
 26:
                options = mike.images;
                report = null;
                oscar = report == options;
                report = undefined;
                if(oscar) { _fun84835_ip = 58; continue _fun84835 }
 43:
                golf = options.some;
                oscar = _closure1_slot15;
                report = golf.bind(options)(oscar);
 58:
                entity = report;
 61:
                if(entity) { _fun84835_ip = 79; continue _fun84835 }
 64:
                zulu = _closure1_slot15;
                mike = mike.video;
                entity = zulu.bind(tango)(mike);
 79:
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        entity = function() { // Original name: _refreshAttachmentUrl
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun84838: for(var _fun84838_ip = 0; ; ) switch(_fun84838_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun84838_ip = 151; continue _fun84838 }
 10:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 4;
                        mike = zulu[mike];
                        zulu = undefined;
                        mike = tango.bind(zulu)(mike);
                        report = mike.HTTP;
                        tango = report.post;
                        mike = {};
                        oscar = _closure1_slot4;
                        oscar = oscar.ATTACHMENTS_REFRESH_URLS;
                        mike['url'] = oscar;
                        oscar = {};
                        golf = new Array(1);
                        options = argFoo;
                        golf[0] = options;
                        oscar['attachment_urls'] = golf;
                        mike['body'] = oscar;
                        oscar = false;
                        mike['rejectWithError'] = oscar;
                        mike = tango.bind(report)(mike);
                        SaveGenerator(address=101);
 99:
                        return mike;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun84838_ip = 148; continue _fun84838 }
 107:
                        tango = mike.ok;
                        zulu = undefined;
                        if(!tango) { _fun84838_ip = 145; continue _fun84838 }
 118:
                        tango = mike.body;
                        report = tango.refreshed_urls;
                        tango = 0;
                        tango = report[tango];
                        zulu = tango.refreshed;
 145:
                        return zulu;
 148:
                        return mike;
 151:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot17 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot17 = entity;
        entity = function() { // Original name: _maybeRefreshAttachmentUrl
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun84841: for(var _fun84841_ip = 0; ; ) switch(_fun84841_ip) {
 0:
                        StartGenerator();
                        mike = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun84841_ip = 110; continue _fun84841 }
 10:
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        tango = 3;
                        report = report[tango];
                        tango = undefined;
                        oscar = oscar.bind(tango)(report);
                        report = oscar.toURLSafe;
                        oscar = report.bind(oscar)(mike);
                        report = null;
                        if(!(report != oscar)) { _fun84841_ip = 107; continue _fun84841 }
 52:
                        zulu = _closure1_slot13;
                        zulu = zulu.bind(tango)(oscar);
                        if(zulu) { _fun84841_ip = 67; continue _fun84841 }
 64:
                        return mike;
 67:
                        zulu = function() { // Original name: refreshAttachmentUrl
                            entity = undefined;
                            tango = _closure1_slot17;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        zulu = zulu.bind(tango)(mike);
                        SaveGenerator(address=85);
 83:
                        return zulu;
 85:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun84841_ip = 104; continue _fun84841 }
 91:
                        tango = mike;
                        if(!(report != zulu)) { _fun84841_ip = 101; continue _fun84841 }
 98:
                        tango = zulu;
 101:
                        return tango;
 104:
                        return zulu;
 107:
                        return mike;
 110:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot18 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot18 = entity;
        oscar = global;
        romeo = oscar.Object;
        offset = romeo.defineProperty;
        verify = {};
        entity = true;
        verify['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(romeo)(zulu, entity, verify);
        entity = 0;
        verify = options[entity];
        entity = undefined;
        verify = yankee.bind(entity)(verify);
        var _closure1_slot3 = verify;
        offset = 1;
        verify = options[offset];
        verify = golf.bind(entity)(verify);
        verify = verify.Endpoints;
        var _closure1_slot4 = verify;
        romeo = function(argFoo) { // Original name: getHostWithoutPort
            _fun84843: for(var _fun84843_ip = 0; ; ) switch(_fun84843_ip) {
 0:
                tango = argFoo;
                entity = null;
                mike = entity == tango;
                entity = undefined;
                if(mike) { _fun84843_ip = 34; continue _fun84843 }
 14:
                zulu = tango.split;
                mike = ':';
                zulu = zulu.bind(tango)(mike);
                mike = 0;
                entity = zulu[mike];
 34:
                return entity;
            }
        };
        backup = oscar.Set;
        verify = backup.prototype;
        foxtrot = Object.create(verify, {constructor: {value: backup}});
        echo = ['/attachments/', '/ephemeral-attachments/'];
        update = foxtrot;
        verify = new update[backup](echo, result);
        verify = verify instanceof Object ? verify : foxtrot;
        var _closure1_slot5 = verify;
        backup = oscar.Set;
        verify = backup.prototype;
        foxtrot = Object.create(verify, {constructor: {value: backup}});
        echo = ['/external/'];
        update = foxtrot;
        verify = new update[backup](echo, result);
        verify = verify instanceof Object ? verify : foxtrot;
        var _closure1_slot6 = verify;
        sizing = 2;
        verify = options[sizing];
        verify = yankee.bind(entity)(verify);
        verify = verify.Millis;
        verify = verify.HOUR;
        verify = offset * verify;
        var _closure1_slot7 = verify;
        foxtrot = oscar.Set;
        verify = oscar.window;
        verify = verify.GLOBAL_ENV;
        verify = verify.CDN_HOST;
        yankee = new Array(2);
        yankee[0] = verify;
        verify = oscar.window;
        verify = verify.GLOBAL_ENV;
        kilo = verify.MEDIA_PROXY_ENDPOINT;
        verify = null;
        backup = verify == kilo;
        offset = undefined;
        if(backup) { _fun84828_ip = 376; continue _fun84828 }
 365:
        backup = kilo.substring;
        offset = backup.bind(kilo)(sizing);
 376:
        yankee[1] = offset;
        offset = yankee.map;
        backup = offset.bind(yankee)(romeo);
        yankee = backup.filter;
        offset = oscar.Boolean;
        echo = yankee.bind(backup)(offset);
        yankee = foxtrot.prototype;
        yankee = Object.create(yankee, {constructor: {value: foxtrot}});
        update = yankee;
        offset = new update[foxtrot](echo, result);
        offset = offset instanceof Object ? offset : yankee;
        var _closure1_slot8 = offset;
        offset = oscar.Set;
        yankee = oscar.window;
        yankee = yankee.GLOBAL_ENV;
        kilo = yankee.IMAGE_PROXY_ENDPOINTS;
        yankee = verify == kilo;
        foxtrot = undefined;
        if(yankee) { _fun84828_ip = 477; continue _fun84828 }
 463:
        backup = kilo.split;
        yankee = ',';
        foxtrot = backup.bind(kilo)(yankee);
 477:
        if(!(verify == foxtrot)) { _fun84828_ip = 485; continue _fun84828 }
 481:
        foxtrot = new Array(0);
 485:
        yankee = foxtrot.map;
        verify = function(argFoo) {
            zulu = argFoo;
            mike = zulu.substring;
            entity = 2;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        yankee = yankee.bind(foxtrot)(verify);
        verify = yankee.map;
        yankee = verify.bind(yankee)(romeo);
        verify = yankee.filter;
        oscar = oscar.Boolean;
        echo = verify.bind(yankee)(oscar);
        verify = offset.prototype;
        verify = Object.create(verify, {constructor: {value: offset}});
        update = verify;
        oscar = new update[offset](echo, result);
        oscar = oscar instanceof Object ? oscar : verify;
        var _closure1_slot9 = oscar;
        oscar = false;
        var _closure1_slot10 = oscar;
        oscar = 5;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.fileFinishedImporting;
        oscar = 'modules/messages/SignedAttachmentLinkUtils.tsx';
        oscar = golf.bind(options)(oscar);
        zulu['isAttachmentUrl'] = report;
        report = function(argFoo) { // Original name: isExternalProxiedAttachmentUrl
            _fun84845: for(var _fun84845_ip = 0; ; ) switch(_fun84845_ip) {
 0:
                entity = argFoo;
                var _closure2_slot0 = entity;
                report = _closure1_slot9;
                tango = report.has;
                entity = entity.hostname;
                entity = tango.bind(report)(entity);
                tango = global;
                report = tango.Array;
                tango = report.from;
                zulu = _closure1_slot6;
                tango = tango.bind(report)(zulu);
                zulu = tango.some;
                mike = function(argFoo) {
                    entity = _closure2_slot0;
                    zulu = entity.pathname;
                    mike = zulu.startsWith;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                zulu = !entity;
                entity = !zulu;
                if(zulu) { _fun84845_ip = 84; continue _fun84845 }
 81:
                entity = mike;
 84:
                return entity;
            }
        };
        zulu['isExternalProxiedAttachmentUrl'] = report;
        report = function(argFoo) { // Original name: removeSignedUrlParameters
            _fun84847: for(var _fun84847_ip = 0; ; ) switch(_fun84847_ip) {
 0:
                entity = argFoo;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.toURLSafe;
                mike = mike.bind(zulu)(entity);
                zulu = null;
                if(!(zulu != mike)) { _fun84847_ip = 103; continue _fun84847 }
 45:
                report = ['ex', 'is', 'hm'];
                zulu = report.length;
                tango = 0;
                zulu = tango < zulu;
                if(!zulu) { _fun84847_ip = 101; continue _fun84847 }
 69:
                golf = report[tango];
                oscar = mike.searchParams;
                zulu = oscar.delete;
                zulu = zulu.bind(oscar)(golf);
                tango = tango + 1;
                zulu = report.length;
                if(tango < zulu) { _fun84847_ip = 69; continue _fun84847 }
 101:
                return mike;
 103:
                return entity;
            }
        };
        zulu['removeSignedUrlParameters'] = report;
        zulu['getSignedAttachmentExpiration'] = tango;
        tango = function(argFoo) { // Original name: messageHasExpiredAttachmentUrl
            _fun84848: for(var _fun84848_ip = 0; ; ) switch(_fun84848_ip) {
 0:
                zulu = argFoo;
                report = zulu.attachments;
                tango = report.some;
                entity = _closure1_slot14;
                entity = tango.bind(report)(entity);
                if(entity) { _fun84848_ip = 51; continue _fun84848 }
 30:
                tango = zulu.embeds;
                zulu = tango.some;
                mike = _closure1_slot16;
                entity = zulu.bind(tango)(mike);
 51:
                return entity;
            }
        };
        zulu['messageHasExpiredAttachmentUrl'] = tango;
        mike = function() { // Original name: maybeRefreshAttachmentUrl
            entity = undefined;
            tango = _closure1_slot18;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['maybeRefreshAttachmentUrl'] = mike;
        return entity;
    }
})();