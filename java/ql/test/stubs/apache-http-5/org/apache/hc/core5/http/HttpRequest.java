/*
 * ====================================================================
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 * ====================================================================
 *
 * This software consists of voluntary contributions made by many
 * individuals on behalf of the Apache Software Foundation.  For more
 * information on the Apache Software Foundation, please see
 * <https://www.apache.org/>.
 *
 */

package org.apache.hc.core5.http;

import java.net.URI;
import java.net.URISyntaxException;

import org.apache.hc.core5.net.URIAuthority;

public interface HttpRequest extends HttpMessage {
    String getMethod();

    String getPath();

    void setPath(String path);

    String getScheme();

    void setScheme(String scheme);

    URIAuthority getAuthority();

    void setAuthority(URIAuthority authority);

    String getRequestUri();

    URI getUri() throws URISyntaxException;

    void setUri(final URI requestUri);

}
