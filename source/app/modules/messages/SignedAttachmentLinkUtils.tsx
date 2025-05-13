// app/modules/messages/SignedAttachmentLinkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golfie = argBar;
        yankee = argBaz;
        zuuluu = argFre;
        option = argPlu;
        var _closure1_slot0 = golfie;
        var _closure1_slot1 = yankee;
        var _closure1_slot2 = option;
        report = function(argFoo) { // Original name: isAttachmentUrl
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                var _closure2_slot0 = entity;
                report = _closure1_slot8;
                tangon = report.has;
                entity = entity.hostname;
                entity = tangon.bind(report)(entity);
                tangon = global;
                report = tangon.Array;
                tangon = report.from;
                zuuluu = _closure1_slot5;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.some;
                michal = function(argFoo) {
                    entity = _closure2_slot0;
                    zuuluu = entity.pathname;
                    michal = zuuluu.startsWith;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = !entity;
                entity = !zuuluu;
                if(zuuluu) { _fun00004_ip = 82; continue _fun00003 }
 79:
                entity = michal;
 82:
                return entity;
            }
        };
        var _closure1_slot10 = report;
        tangon = function(argFoo) { // Original name: getSignedAttachmentExpiration
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.searchParams;
                michal = zuuluu.get;
                entity = 'ex';
                michal = michal.bind(zuuluu)(entity);
                entity = global;
                tangon = entity.parseInt;
                zuuluu = null;
                report = zuuluu != michal;
                zuuluu = '';
                if(!report) { _fun00006_ip = 49; continue _fun00005 }
 46:
                zuuluu = michal;
 49:
                report = undefined;
                michal = 16;
                zuuluu = tangon.bind(report)(zuuluu, michal);
                entity = entity.isNaN;
                michal = entity.bind(report)(zuuluu);
                entity = undefined;
                if(michal) { _fun00006_ip = 115; continue _fun00005 }
 76:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 2;
                michal = oscard[michal];
                michal = tangon.bind(report)(michal);
                michal = michal.Millis;
                michal = michal.SECOND;
                entity = zuuluu * michal;
 115:
                return entity;
            }
        };
        var _closure1_slot11 = tangon;
        entity = function(argFoo) { // Original name: shouldRefreshAttachmentUrl
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot11;
                zuuluu = undefined;
                entity = argFoo;
                zuuluu = tangon.bind(zuuluu)(entity);
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00008_ip = 55; continue _fun00007 }
 26:
                tangon = global;
                report = tangon.Date;
                tangon = report.now;
                tangon = tangon.bind(report)();
                michal = _closure1_slot7;
                michal = tangon + michal;
                entity = zuuluu <= michal;
 55:
                return entity;
            }
        };
        var _closure1_slot12 = entity;
        entity = function(argFoo) { // Original name: isAttachmentExpired
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 3;
                entity = tangon[entity];
                tangon = undefined;
                report = zuuluu.bind(tangon)(entity);
                zuuluu = report.toURLSafe;
                entity = argFoo;
                entity = entity.url;
                zuuluu = zuuluu.bind(report)(entity);
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00010_ip = 62; continue _fun00009 }
 53:
                michal = _closure1_slot12;
                entity = michal.bind(tangon)(zuuluu);
 62:
                return entity;
            }
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo) { // Original name: isEmbedMediaExpiredAttachment
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity != michal)) { _fun00012_ip = 89; continue _fun00011 }
 9:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 3;
                tangon = report[tangon];
                report = undefined;
                oscard = oscard.bind(report)(tangon);
                tangon = oscard.toURLSafe;
                michal = michal.url;
                tangon = tangon.bind(oscard)(michal);
                entity = entity != tangon;
                if(!entity) { _fun00012_ip = 87; continue _fun00011 }
 57:
                michal = _closure1_slot10;
                michal = michal.bind(report)(tangon);
                oscard = !michal;
                michal = !oscard;
                if(oscard) { _fun00012_ip = 84; continue _fun00011 }
 75:
                zuuluu = _closure1_slot12;
                michal = zuuluu.bind(report)(tangon);
 84:
                entity = michal;
 87:
                return entity;
 89:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: embedHasExpiredAttachmentUrl
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = argFoo;
                report = _closure1_slot14;
                entity = michal.image;
                tangon = undefined;
                entity = report.bind(tangon)(entity);
                if(entity) { _fun00014_ip = 61; continue _fun00013 }
 26:
                option = michal.images;
                report = null;
                oscard = report == option;
                report = undefined;
                if(oscard) { _fun00014_ip = 58; continue _fun00013 }
 43:
                golfie = option.some;
                oscard = _closure1_slot14;
                report = golfie.bind(option)(oscard);
 58:
                entity = report;
 61:
                if(entity) { _fun00014_ip = 79; continue _fun00013 }
 64:
                zuuluu = _closure1_slot14;
                michal = michal.video;
                entity = zuuluu.bind(tangon)(michal);
 79:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function() { // Original name: _refreshAttachmentUrl
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00016_ip = 151; continue _fun00015 }
 10:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 4;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        michal = tangon.bind(zuuluu)(michal);
                        report = michal.HTTP;
                        tangon = report.post;
                        michal = {};
                        oscard = _closure1_slot4;
                        oscard = oscard.ATTACHMENTS_REFRESH_URLS;
                        michal['url'] = oscard;
                        oscard = {};
                        golfie = new Array(1);
                        option = argFoo;
                        golfie[0] = option;
                        oscard['attachment_urls'] = golfie;
                        michal['body'] = oscard;
                        oscard = false;
                        michal['rejectWithError'] = oscard;
                        michal = tangon.bind(report)(michal);
                        SaveGenerator(address=101);
 99:
                        return michal;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00016_ip = 148; continue _fun00015 }
 107:
                        tangon = michal.ok;
                        zuuluu = undefined;
                        if(!tangon) { _fun00016_ip = 145; continue _fun00015 }
 118:
                        tangon = michal.body;
                        report = tangon.refreshed_urls;
                        tangon = 0;
                        tangon = report[tangon];
                        zuuluu = tangon.refreshed;
 145:
                        return zuuluu;
 148:
                        return michal;
 151:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot16 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot16 = entity;
        entity = function() { // Original name: _maybeRefreshAttachmentUrl
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        StartGenerator();
                        michal = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00018_ip = 108; continue _fun00017 }
 10:
                        oscard = _closure1_slot1;
                        report = _closure1_slot2;
                        tangon = 3;
                        report = report[tangon];
                        tangon = undefined;
                        oscard = oscard.bind(tangon)(report);
                        report = oscard.toURLSafe;
                        oscard = report.bind(oscard)(michal);
                        report = null;
                        if(!(report != oscard)) { _fun00018_ip = 105; continue _fun00017 }
 52:
                        zuuluu = _closure1_slot12;
                        zuuluu = zuuluu.bind(tangon)(oscard);
                        if(zuuluu) { _fun00018_ip = 67; continue _fun00017 }
 64:
                        return michal;
 67:
                        zuuluu = function() { // Original name: refreshAttachmentUrl
                            entity = undefined;
                            tangon = _closure1_slot16;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        zuuluu = zuuluu.bind(tangon)(michal);
                        SaveGenerator(address=83);
 81:
                        return zuuluu;
 83:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tangon) { _fun00018_ip = 102; continue _fun00017 }
 89:
                        tangon = michal;
                        if(!(report != zuuluu)) { _fun00018_ip = 99; continue _fun00017 }
 96:
                        tangon = zuuluu;
 99:
                        return tangon;
 102:
                        return zuuluu;
 105:
                        return michal;
 108:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot17 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot17 = entity;
        oscard = global;
        romeon = oscard.Object;
        offset = romeon.defineProperty;
        verify = {};
        entity = true;
        verify['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(romeon)(zuuluu, entity, verify);
        entity = 0;
        verify = option[entity];
        entity = undefined;
        verify = yankee.bind(entity)(verify);
        var _closure1_slot3 = verify;
        offset = 1;
        verify = option[offset];
        verify = golfie.bind(entity)(verify);
        verify = verify.Endpoints;
        var _closure1_slot4 = verify;
        romeon = function(argFoo) { // Original name: getHostWithoutPort
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = argFoo;
                entity = null;
                michal = entity == tangon;
                entity = undefined;
                if(michal) { _fun00020_ip = 34; continue _fun00019 }
 14:
                zuuluu = tangon.split;
                michal = ':';
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 0;
                entity = zuuluu[michal];
 34:
                return entity;
            }
        };
        backup = oscard.Set;
        verify = backup.prototype;
        foxtra = Object.create(verify, {constructor: {value: backup}});
        echoed = ['/attachments/', '/ephemeral-attachments/'];
        update = foxtra;
        verify = new update[backup](echoed, result);
        verify = verify instanceof Object ? verify : foxtra;
        var _closure1_slot5 = verify;
        backup = oscard.Set;
        verify = backup.prototype;
        foxtra = Object.create(verify, {constructor: {value: backup}});
        echoed = ['/external/'];
        update = foxtra;
        verify = new update[backup](echoed, result);
        verify = verify instanceof Object ? verify : foxtra;
        var _closure1_slot6 = verify;
        sizing = 2;
        verify = option[sizing];
        verify = yankee.bind(entity)(verify);
        verify = verify.Millis;
        verify = verify.HOUR;
        verify = offset * verify;
        var _closure1_slot7 = verify;
        foxtra = oscard.Set;
        verify = oscard.window;
        verify = verify.GLOBAL_ENV;
        verify = verify.CDN_HOST;
        yankee = new Array(2);
        yankee[0] = verify;
        verify = oscard.window;
        verify = verify.GLOBAL_ENV;
        kiloes = verify.MEDIA_PROXY_ENDPOINT;
        verify = null;
        backup = verify == kiloes;
        offset = undefined;
        if(backup) { _fun00002_ip = 356; continue _fun00001 }
 345:
        backup = kiloes.substring;
        offset = backup.bind(kiloes)(sizing);
 356:
        yankee[1] = offset;
        offset = yankee.map;
        backup = offset.bind(yankee)(romeon);
        yankee = backup.filter;
        offset = oscard.Boolean;
        echoed = yankee.bind(backup)(offset);
        yankee = foxtra.prototype;
        yankee = Object.create(yankee, {constructor: {value: foxtra}});
        update = yankee;
        offset = new update[foxtra](echoed, result);
        offset = offset instanceof Object ? offset : yankee;
        var _closure1_slot8 = offset;
        offset = oscard.Set;
        yankee = oscard.window;
        yankee = yankee.GLOBAL_ENV;
        kiloes = yankee.IMAGE_PROXY_ENDPOINTS;
        yankee = verify == kiloes;
        foxtra = undefined;
        if(yankee) { _fun00002_ip = 457; continue _fun00001 }
 443:
        backup = kiloes.split;
        yankee = ',';
        foxtra = backup.bind(kiloes)(yankee);
 457:
        if(!(verify == foxtra)) { _fun00002_ip = 465; continue _fun00001 }
 461:
        foxtra = new Array(0);
 465:
        yankee = foxtra.map;
        verify = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.substring;
            entity = 2;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        yankee = yankee.bind(foxtra)(verify);
        verify = yankee.map;
        yankee = verify.bind(yankee)(romeon);
        verify = yankee.filter;
        oscard = oscard.Boolean;
        echoed = verify.bind(yankee)(oscard);
        verify = offset.prototype;
        verify = Object.create(verify, {constructor: {value: offset}});
        update = verify;
        oscard = new update[offset](echoed, result);
        oscard = oscard instanceof Object ? oscard : verify;
        var _closure1_slot9 = oscard;
        oscard = 5;
        oscard = option[oscard];
        option = golfie.bind(entity)(oscard);
        golfie = option.fileFinishedImporting;
        oscard = 'modules/messages/SignedAttachmentLinkUtils.tsx';
        oscard = golfie.bind(option)(oscard);
        zuuluu['isAttachmentUrl'] = report;
        report = function(argFoo) { // Original name: isExternalProxiedAttachmentUrl
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                var _closure2_slot0 = entity;
                report = _closure1_slot9;
                tangon = report.has;
                entity = entity.hostname;
                entity = tangon.bind(report)(entity);
                tangon = global;
                report = tangon.Array;
                tangon = report.from;
                zuuluu = _closure1_slot6;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.some;
                michal = function(argFoo) {
                    entity = _closure2_slot0;
                    zuuluu = entity.pathname;
                    michal = zuuluu.startsWith;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = !entity;
                entity = !zuuluu;
                if(zuuluu) { _fun00022_ip = 82; continue _fun00021 }
 79:
                entity = michal;
 82:
                return entity;
            }
        };
        zuuluu['isExternalProxiedAttachmentUrl'] = report;
        report = function(argFoo) { // Original name: removeSignedUrlParameters
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.toURLSafe;
                michal = michal.bind(zuuluu)(entity);
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00024_ip = 103; continue _fun00023 }
 45:
                report = ['ex', 'is', 'hm'];
                zuuluu = report.length;
                tangon = 0;
                zuuluu = tangon < zuuluu;
                if(!zuuluu) { _fun00024_ip = 101; continue _fun00023 }
 69:
                golfie = report[tangon];
                oscard = michal.searchParams;
                zuuluu = oscard.delete;
                zuuluu = zuuluu.bind(oscard)(golfie);
                tangon = tangon + 1;
                zuuluu = report.length;
                if(tangon < zuuluu) { _fun00024_ip = 69; continue _fun00023 }
 101:
                return michal;
 103:
                return entity;
            }
        };
        zuuluu['removeSignedUrlParameters'] = report;
        zuuluu['getSignedAttachmentExpiration'] = tangon;
        tangon = function(argFoo) { // Original name: messageHasExpiredAttachmentUrl
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = argFoo;
                report = zuuluu.attachments;
                tangon = report.some;
                entity = _closure1_slot13;
                entity = tangon.bind(report)(entity);
                if(entity) { _fun00026_ip = 51; continue _fun00025 }
 30:
                tangon = zuuluu.embeds;
                zuuluu = tangon.some;
                michal = _closure1_slot15;
                entity = zuuluu.bind(tangon)(michal);
 51:
                return entity;
            }
        };
        zuuluu['messageHasExpiredAttachmentUrl'] = tangon;
        michal = function() { // Original name: maybeRefreshAttachmentUrl
            entity = undefined;
            tangon = _closure1_slot17;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['maybeRefreshAttachmentUrl'] = michal;
        return entity;
    }
})();