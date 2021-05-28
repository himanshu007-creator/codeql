/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// API class

package org.mozilla.javascript;

/**
 * Interface to define classes from generated byte code.
 */
public interface GeneratedClassLoader {

    /**
     * Define a new Java class.
     * Classes created via this method should have the same class loader.
     *
     * @param name fully qualified class name
     * @param data class byte code
     * @return new class object
     */
    public Class<?> defineClass(String name, byte[] data);

    /**
     * Link the given class.
     *
     * @param cl Class instance returned from the previous call to
     *        {@link #defineClass(String, byte[])}
     * @see java.lang.ClassLoader
     */
    public void linkClass(Class<?> cl);
}
